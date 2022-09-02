import { camelCase } from "../../Utils";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import { getDefaultLogger } from "../../System/Logger";
import Config from "../../System/Config";

/**
 * Gets contents of the migration file.
 *
 * @param name The name of the migration.
 * @param timestamp The timestamp when the migration file was created.
 * @param [options] Additional code to be written into the file.
 */
function getMigrationTemplate(name: string, timestamp: number, options?: Record<string, string | string[]>): string {
  const migrationName = `${ camelCase(name, true) }_${ timestamp }`;

  const imports = [ "MigrationInterface", "QueryRunner" ];
  if (options?.imports) {
    if (!Array.isArray(options.imports)) {
      options.imports = [ options.imports ];
    }
    imports.push(...options.imports);
  }

  return `import { ${ imports.join(", ") } } from "onebe/DB/TypeORM"

/**
 * Migration ${ migrationName }
 *
 * Generated: ${ new Date().toISOString() }
 */
export class ${ migrationName } implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // TODO: Add code for applying the migration
    ${ options?.up ?? "" }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // TODO: Add code for reverting migration
    ${ options?.down ?? "" }
  }
}
`;
}

/**
 * Function used to create a new database migration.
 *
 * @param migrationName The name of the migration.
 * @param [options] Additional code to be written into the file.
 */
export default function createMigrationFile(migrationName: string, options?: Record<string, string | string[]>): void {
  const timestamp = Date.now();
  const migrationFile = path.resolve(Config.get("db.migrations.folder", "./"), `${ timestamp }-${ migrationName }.ts`);
  const template = getMigrationTemplate(migrationName, timestamp, options || {});

  if (!fs.existsSync(path.dirname(migrationFile))) {
    fs.mkdirSync(path.dirname(migrationFile), { recursive: true });
  }
  fs.writeFileSync(migrationFile, template, "utf-8");
  getDefaultLogger().info(`Migration ${ chalk.blue(migrationFile) } has been generated successfully.`);
}
