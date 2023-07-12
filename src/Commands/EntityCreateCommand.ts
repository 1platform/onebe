import { Arguments, Argv, CommandModule } from "yargs";

import createEntityFile from "@/Commands/Utils/entityFile";
import { camelCase } from "@/Utils";

/**
 * CLI Command to create a new entity.
 */
export default class EntityCreateCommand implements CommandModule {
  command = "entity:create <entityName>";
  describe = "Creates a new entity file.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args
      .positional("entityName", {
        describe: "The name of the entity to be created",
      })
      .option("migration", {
        alias: "m",
        describe: "Flag to enable the migration creation.",
        default: false,
        type: "boolean",
      })
      .option("audit", {
        alias: "a",
        describe: "Flag to enable the audit fields creation.",
        default: false,
        type: "boolean",
      })
      .option("softDelete", {
        alias: "d",
        describe: "Flag to enable the soft delete field creation.",
        default: false,
        type: "boolean",
      })
      .option("uuid", {
        alias: "u",
        describe: "Flag to enable UUID ID field creation.",
        default: false,
        type: "boolean",
      })
      .option("override", {
        alias: "o",
        describe: "Flag to override the existing entity.",
        default: false,
        type: "boolean",
      });
  }

  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public async handler(args: Arguments<any>) {
    createEntityFile(camelCase(args.entityName, true), {
      migration: args.migration || false,
      audit: args.audit || false,
      softDelete: args.softDelete || false,
      uuid: args.uuid || false,
      override: args.override || false,
    });
  }
}
