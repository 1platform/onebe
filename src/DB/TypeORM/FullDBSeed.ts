import chalk from "chalk";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { EntityManager } from "typeorm";

import { defaultConnection } from "@/DB";
import { ISeedInfo } from "@/DB/TypeORM/Interfaces";
import { HTTPError } from "@/Exceptions";
import Config from "@/System/Config";
import { getDefaultLogger } from "@/System/Logger";

/**
 * Function used to read the Seeding data from a JSON file.
 *
 * @param file The file to be imported.
 */
function readDataJson(file: string): ISeedInfo {
  try {
    return JSON.parse(readFileSync(file, "utf-8"));
  } catch (err) {
    return null;
  }
}

/**
 * Function used to read the Seeding data from a Source file (.ts/.js).
 *
 * @param file The file to be imported.
 */
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

/**
 * Function used to fetch all seeds from the seeding getModuleFolder.
 *
 * @param basePath The base path to the seeds' getModuleFolder.
 */
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

/**
 * Function used to build a tier of Entities that should be used for Data Import (and Database cleaning).
 *
 * @param entity The entity for which we want to determine the tier level.
 * @param entityDependencies The list of dependencies for that entity.
 * @param allDependencies A map will entities and their dependencies.
 * @param levels A map containing the entities and their tier level.
 */
function buildDepsLevel(
  entity: string,
  entityDependencies: Array<string>,
  allDependencies: Record<string, Array<string>>,
  levels: Record<string, number>,
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

/**
 * Function used to build a tier based array with entities.
 *
 * @param seeds The map with entities that need to be classified.
 */
function createDependencyTree(seeds: Record<string, ISeedInfo>): Array<Array<string>> {
  const dependencies: Record<string, string[]> = {};
  let maxDependencies = 0;

  // Building the dependencies list.
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
      {},
    ),
  );
}

/**
 * Function used to clean the database.
 *
 * @param entityManager The entity manager used to seed the database.
 * @param dependencies The tier list with entities to be deleted.
 */
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

/**
 * Function used to create an entity using a model.
 *
 * @param entityManager The entity manager used to perform the database import.
 * @param entityName The name of the entity for which we want to import data.
 * @param data The data that we want to import.
 */
async function createEntityWithModel(entityManager: EntityManager, entityName: string, data: Array<any>) {
  await entityManager.save(entityName, entityManager.create(entityName, data));
}

/**
 * Function used to create an entity using an SQL INSERT statement.
 *
 * @param entityManager The entity manager used to perform the database import.
 * @param seed The seed information.
 */
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
      }),
    )
    .map((items) => `(${ items.join(",") })`);
  getDefaultLogger().debug(`INSERT INTO \`${ seed.entity }\` (${ mappedFields.join(",") }) VALUES ${ mappedData.join(",") };`);

  await entityManager.query(`INSERT INTO \`${ seed.entity }\` (${ mappedFields.join(",") }) VALUES ${ mappedData.join(",") };`);
}

/**
 * Function used to create the entities in the database.
 *
 * @param entityManager The entity manager used to perform the database import.
 * @param seeds The map containing the entities and the information required to perform the data import.
 * @param dependencies The tier list of the entities.
 */
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

/**
 * Function used to perform a full Database Seeding.
 *
 * @param truncate Flag to let the function know if the user wants to clear the database before import or not.
 */
export default async function FullDBSeed(truncate = false): Promise<void> {
  const seeds = await fetchSeedFiles(resolve(Config.get("db.seeds.getModuleFolder")));
  const dependencyTree = createDependencyTree(seeds);

  await defaultConnection().transaction(async (entityManager: EntityManager) => {
    if (truncate) {
      await truncateEntities(entityManager, dependencyTree);
    }

    await createEntities(entityManager, seeds, dependencyTree);
  });
}
