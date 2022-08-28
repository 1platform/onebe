"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMigrationFile;

var _Utils = require("../../Utils");

var _path = _interopRequireDefault(require("path"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets contents of the migration file.
 *
 * @param name The name of the migration.
 * @param timestamp The timestamp when the migration file was created.
 * @param [options] Additional code to be written into the file.
 */
function getMigrationTemplate(name, timestamp, options) {
  const migrationName = `${(0, _Utils.camelCase)(name, true)}_${timestamp}`;
  const imports = ["MigrationInterface", "QueryRunner"];

  if (options?.imports) {
    if (!Array.isArray(options.imports)) {
      options.imports = [options.imports];
    }

    imports.push(...options.imports);
  }

  return `import { ${imports.join(", ")} } from "onebe/DB/TypeORM"

/**
 * Migration ${migrationName}
 *
 * Generated: ${new Date().toISOString()}
 */
export class ${migrationName} implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // TODO: Add code for applying the migration
    ${options?.up ?? ""}
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // TODO: Add code for reverting migration
    ${options?.down ?? ""}
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


function createMigrationFile(migrationName, options) {
  const timestamp = Date.now();

  const migrationFile = _path.default.resolve(_Config.default.get("db.migrations.folder", "./"), `${timestamp}-${migrationName}.ts`);

  const template = getMigrationTemplate(migrationName, timestamp, options || {});

  if (!_fs.default.existsSync(_path.default.dirname(migrationFile))) {
    _fs.default.mkdirSync(_path.default.dirname(migrationFile), {
      recursive: true
    });
  }

  _fs.default.writeFileSync(migrationFile, template, "utf-8");

  (0, _Logger.getDefaultLogger)().info(`Migration ${_chalk.default.blue(migrationFile)} has been generated successfully.`);
}