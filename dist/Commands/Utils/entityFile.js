"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEntityFile;

var _path = _interopRequireDefault(require("path"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _migrationFile = _interopRequireDefault(require("./migrationFile"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets contents of the entity file.
 *
 * @param name The name of the entity.
 * @param flags Flag used to enable/disable various functionalities in the generated entity.
 */
function getEntityTemplate(name, flags = {}) {
  const {
    audit,
    softDelete,
    uuid
  } = flags;
  const imports = ["Model", "PrimaryGeneratedColumn"];
  let auditInfo = "";

  if (audit) {
    imports.push("CreateDateColumn", "UpdateDateColumn");
    auditInfo = `
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updatedAt: Date;
`;
  }

  let softDeleteInfo = "";

  if (softDelete) {
    imports.push("DeleteDateColumn");
    softDeleteInfo = `
  @DeleteDateColumn({
    type: "timestamp",
    default: null,
    nullable: true
  })
  public deletedAt: Date;
`;
  }

  let primaryKeyOptions = `@PrimaryGeneratedColumn("increment", {
    type: "bigint",
    unsigned: true,
  })
  public id: number;`;

  if (uuid) {
    primaryKeyOptions = `@PrimaryGeneratedColumn("uuid", {})
  public id: string;`;
  }

  return `import { ${imports.join(", ")} } from "onebe/DB/TypeORM/Decorators";

/**
 * Model ${name}
 *
 * Generated: ${new Date().toISOString()}
 */
@Model({ name: "${name}" })
export default class ${name} {
  ${primaryKeyOptions}
  ${auditInfo}${softDeleteInfo}
  /**
   * Add your model definition here.
   */
}
`;
}
/**
 * Template used to create the entity in the database using a migration.
 *
 * @param entityName The name of the entity.
 * @param [flags] Flag used to enable/disable various functionalities in the generated entity.
 */


function getMigrationUpTemplate(entityName, flags = {}) {
  const {
    audit,
    softDelete,
    uuid
  } = flags;
  const fields = [];

  if (uuid) {
    fields.push({
      name: "id",
      type: "varchar",
      isPrimary: true,
      isGenerated: true,
      generationStrategy: "uuid"
    });
  } else {
    fields.push({
      name: "id",
      type: "bigint",
      unsigned: true,
      isPrimary: true,
      isGenerated: true,
      generationStrategy: "increment"
    });
  }

  if (audit) {
    fields.push({
      name: "createdAt",
      type: "timestamp",
      default: "NOW()"
    }, {
      name: "updatedAt",
      type: "timestamp",
      default: "NOW()",
      onUpdate: "NOW()"
    });
  }

  if (softDelete) {
    fields.push({
      name: "deletedAt",
      type: "timestamp",
      default: null,
      isNullable: true
    });
  }

  return `await queryRunner.createTable(
      new Table({
        name: "${entityName}",
        columns: ${JSON.stringify(fields, null, 2)},
      }),
      true
    );`;
}
/**
 * Template used to delete the entity from the database.
 *
 * @param entityName The name of the entity.
 */


function getMigrationDownTemplate(entityName) {
  return `await queryRunner.dropTable("${entityName}");`;
}
/**
 * Function used to create the entity and the migration attached to the entity.
 *
 * @param entityName The name of the entity.
 * @param [flags] Flag used to enable/disable various functionalities in the generated entity.
 */


function createEntityFile(entityName, flags) {
  const entityFile = _path.default.resolve(_Config.default.get("db.entities.folder", "./"), `${entityName}.ts`);

  if (!_fs.default.existsSync(_path.default.dirname(entityFile))) {
    _fs.default.mkdirSync(_path.default.dirname(entityFile), {
      recursive: true
    });
  }

  if (_fs.default.existsSync(entityFile) && !flags.override) {
    (0, _Logger.getDefaultLogger)().error(`Entity ${_chalk.default.blue(entityFile)} already exists. Use the ${_chalk.default.blue("--override")} flag to replace the file.`);
    return;
  }

  const template = getEntityTemplate(entityName, flags || {});

  _fs.default.writeFileSync(entityFile, template, "utf-8");

  (0, _Logger.getDefaultLogger)().info(`Entity ${_chalk.default.blue(entityFile)} has been generated successfully.`);

  if (flags.migration) {
    (0, _migrationFile.default)(`create${entityName}`, {
      imports: ["Table"],
      up: getMigrationUpTemplate(entityName, flags),
      down: getMigrationDownTemplate(entityName)
    });
  }
}