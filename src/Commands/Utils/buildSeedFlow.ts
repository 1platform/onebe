import { readdirSync, readFileSync, statSync } from "fs";
import { extname, join, resolve } from "path";
import chalk from "chalk";
import { EntityManager } from "typeorm";
import Config from "@/System/Config";
import { HTTPError } from "@/Exceptions";
import { getDefaultLogger } from "@/System/Logger";
import { defaultConnection } from "@/DB";

interface ISeedInfo<T = any> {
  entity: string;
  data: Array<T>;
  dependsOn?: Array<string>;
  isQuery?: boolean;
  fields?: Array<string>;
}

function readDataJson(file: string): ISeedInfo {
  try {
    return JSON.parse(readFileSync(file, "utf-8"));
  } catch (err) {
    return null;
  }
}

async function readSourceFile(file: string): Promise<ISeedInfo> {
  try {
    let fileModule = await import(file);
    fileModule = fileModule.default || fileModule;
    if (!fileModule || typeof fileModule !== "object") {
      return null;
    }

    return fileModule;
  } catch (err) {
    return null;
  }
}

async function fetchSeedFiles(basePath: string): Promise<Record<string, ISeedInfo>> {
  const files = readdirSync(basePath)
    .filter((file) => [ ".ts", ".js", ".json" ].indexOf(extname(file)) >= 0)
    .map((file) => join(basePath, file))
    .filter((file) => statSync(file).isFile());

  const resolvedData: Record<string, ISeedInfo> = {};
  for (const file of files) {
    const ext = extname(file);
    let data: ISeedInfo;
    if (ext === ".json") {
      data = readDataJson(file);
    } else {
      data = await readSourceFile(file);
    }

    if (data) {
      resolvedData[data.entity] = data;
    }
  }

  return resolvedData;
}

function buildDepsLevel(
  entity: string,
  entityDependencies: Array<string>,
  allDependencies: Record<string, Array<string>>,
  levels: Record<string, number>
): number {
  if (levels[entity]) {
    return levels[entity];
  }

  if (entityDependencies.length === 0) {
    levels[entity] = 0;
    return levels[entity];
  }

  let level = 0;
  for (const dependency of entityDependencies) {
    level += buildDepsLevel(dependency, allDependencies[dependency], allDependencies, levels);
  }

  levels[entity] = level + 1;
  return levels[entity];
}

function createDependencyTree(seeds: Record<string, ISeedInfo>): Array<Array<string>> {
  const dependencies: Record<string, string[]> = {};

  let maxDependencies = 0;

  for (const seedKey of Object.keys(seeds)) {
    const seed: ISeedInfo = seeds[seedKey];
    if (!dependencies[seedKey]) {
      dependencies[seedKey] = [];
    }

    if (!seed.dependsOn) {
      continue;
    }
    for (const dependency of seed.dependsOn) {
      if (!seeds[dependency]) {
        throw new HTTPError(`Unable to find dependency entity [${ dependency }] for entity [${ seedKey }] in the seeds list`);
      }

      if (!dependencies[seedKey]) {
        dependencies[seedKey] = [];
      }

      dependencies[seedKey].push(dependency);

      maxDependencies = dependencies[seedKey].length > maxDependencies ? dependencies[seedKey].length : maxDependencies;
    }
  }

  const dependencyLevels: Record<string, number> = {};
  for (let iLevel = 0; iLevel <= maxDependencies; iLevel += 1) {
    const currentLevelDependencies = Object.keys(dependencies)
      .filter((entity) => dependencies[entity].length === iLevel)
      .reduce((accum, entity) => ({ ...accum, [entity]: dependencies[entity] }), {});

    for (const entity of Object.keys(currentLevelDependencies)) {
      buildDepsLevel(entity, currentLevelDependencies[entity], dependencies, dependencyLevels);
    }
  }
  return Object.values(
    Object.keys(dependencyLevels).reduce(
      (accum, entity) => ({
        ...accum,
        [dependencyLevels[entity]]: [ ...(accum[dependencyLevels[entity]] || []), entity ],
      }),
      {}
    )
  );
}

async function truncateEntities(entityManager: EntityManager, dependencies: Array<Array<string>>): Promise<void> {
  const revertedArray = [ ...dependencies ].reverse();

  for (const entityList of revertedArray) {
    for (const entity of entityList) {
      getDefaultLogger().debug(`Cleaning entity: ${ chalk.blue(entity) }`);
      getDefaultLogger().debug(`DELETE FROM \`${ entity }\`;`);
      await entityManager.query(`DELETE FROM \`${ entity }\`;`);
      getDefaultLogger().debug(`Successfully cleaned entity: ${ chalk.blue(entity) }`);
    }
  }
}

async function createEntityWithModel(entityManager: EntityManager, entityName: string, data: Array<any>) {
  await entityManager.save(entityName, entityManager.create(entityName, data));
}

async function createEntityWithInsert(entityManager: EntityManager, seed: ISeedInfo) {
  const mappedFields = seed.fields.map((field) => `\`${ field }\``);
  const mappedData = seed.data
    .map((items) =>
      Object.values(items).map((item) => {
        if (typeof item === "string") {
          return `"${ item }"`;
        }
        if (typeof item === "undefined" || item === null) {
          return "null";
        }

        return item;
      })
    )
    .map((items) => `(${ items.join(",") })`);
  getDefaultLogger().debug(`INSERT INTO \`${ seed.entity }\` (${ mappedFields.join(",") }) VALUES ${ mappedData.join(",") };`);

  await entityManager.query(`INSERT INTO \`${ seed.entity }\` (${ mappedFields.join(",") }) VALUES ${ mappedData.join(",") };`);
}

async function createEntities(entityManager: EntityManager, seeds: Record<string, ISeedInfo>, dependencies: Array<Array<string>>): Promise<void> {
  for (const entityList of dependencies) {
    for (const entity of entityList) {
      const seed = seeds[entity];
      getDefaultLogger().debug(`Adding data to entity: ${ chalk.blue(entity) }`);
      await (seed.isQuery ? createEntityWithInsert(entityManager, seed) : createEntityWithModel(entityManager, entity, seed.data));
      getDefaultLogger().debug(`Successfully added data for entity: ${ chalk.blue(entity) }`);
    }
  }
}

export default async function buildSeedFlow(truncate = false): Promise<void> {
  const seeds = await fetchSeedFiles(resolve(Config.get("db.seeds.folder")));
  const dependencyTree = createDependencyTree(seeds);

  await defaultConnection().transaction(async (entityManager: EntityManager) => {
    if (truncate) {
      await truncateEntities(entityManager, dependencyTree);
    }

    await createEntities(entityManager, seeds, dependencyTree);
  });
}
