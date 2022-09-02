import path from "path";
import fs from "fs";
import chalk from "chalk";
import createMigrationFile from "./migrationFile";
import { getDefaultLogger, Config } from "../../System";

/**
 * Gets contents of the entity file.
 *
 * @param name The name of the entity.
 * @param flags Flag used to enable/disable various functionalities in the generated entity.
 */
function getEntityTemplate(name: string, flags: Record<string, boolean> = {}): string {
  const { audit, softDelete, uuid } = flags;

  const imports = [ "Model", "PrimaryGeneratedColumn" ];
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

  return `import { ${ imports.join(", ") } } from "onebe/DB/TypeORM/Decorators";

/**
 * Model ${ name }
 *
 * Generated: ${ new Date().toISOString() }
 */
@Model({ name: "${ name }" })
export default class ${ name } {
  ${ primaryKeyOptions }
  ${ auditInfo }${ softDeleteInfo }
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
function getMigrationUpTemplate(entityName: string, flags: Record<string, boolean> = {}): string {
  const { audit, softDelete, uuid } = flags;

  const fields = [];

  if (uuid) {
    fields.push({
      name: "id",
      type: "varchar",
      isPrimary: true,
      isGenerated: true,
      generationStrategy: "uuid",
    });
  } else {
    fields.push({
      name: "id",
      type: "bigint",
      unsigned: true,
      isPrimary: true,
      isGenerated: true,
      generationStrategy: "increment",
    });
  }

  if (audit) {
    fields.push(
      {
        name: "createdAt",
        type: "timestamp",
        default: "NOW()",
      },
      {
        name: "updatedAt",
        type: "timestamp",
        default: "NOW()",
        onUpdate: "NOW()",
      }
    );
  }

  if (softDelete) {
    fields.push({
      name: "deletedAt",
      type: "timestamp",
      default: null,
      isNullable: true,
    });
  }

  return `await queryRunner.createTable(
      new Table({
        name: "${ entityName }",
        columns: ${ JSON.stringify(fields, null, 2) },
      }),
      true
    );`;
}

/**
 * Template used to delete the entity from the database.
 *
 * @param entityName The name of the entity.
 */
function getMigrationDownTemplate(entityName: string): string {
  return `await queryRunner.dropTable("${ entityName }");`;
}

/**
 * Function used to create the entity and the migration attached to the entity.
 *
 * @param entityName The name of the entity.
 * @param [flags] Flag used to enable/disable various functionalities in the generated entity.
 */
export default function createEntityFile(entityName: string, flags?: Record<string, boolean>): void {
  const entityFile = path.resolve(Config.get("db.entities.folder", "./"), `${ entityName }.ts`);

  if (!fs.existsSync(path.dirname(entityFile))) {
    fs.mkdirSync(path.dirname(entityFile), { recursive: true });
  }

  if (fs.existsSync(entityFile) && !flags.override) {
    getDefaultLogger().error(`Entity ${ chalk.blue(entityFile) } already exists. Use the ${ chalk.blue("--override") } flag to replace the file.`);
    return;
  }

  const template = getEntityTemplate(entityName, flags || {});
  fs.writeFileSync(entityFile, template, "utf-8");
  getDefaultLogger().info(`Entity ${ chalk.blue(entityFile) } has been generated successfully.`);

  if (flags.migration) {
    createMigrationFile(`create${ entityName }`, {
      imports: [ "Table" ],
      up: getMigrationUpTemplate(entityName, flags),
      down: getMigrationDownTemplate(entityName),
    });
  }
}
