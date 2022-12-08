import fs from "fs";
import path from "path";
import { Arguments, Argv, CommandModule } from "yargs";
import { DataSource } from "typeorm";
import chalk from "chalk";
import DatabaseSeeder from "@/DB/TypeORM/DatabaseSeeder";
import { getDefaultLogger } from "@/System/Logger";
import Config from "@/System/Config";
import { camelCase } from "@/Utils";
import initConnection from "@/Commands/Utils/initConnection";

/**
 * CLI Command to load data into a specific entity.
 */
export default class EntityLoadCommand implements CommandModule {
  command = "entity:load";
  describe = "Load data into the database for a specified entity.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args
      .option("inputFile", {
        alias: "i",
        describe: "The file used as input.",
        type: "string",
        demandOption: true,
      })
      .option("entity", {
        alias: "e",
        describe: "The name of the model to be used for import.",
        type: "string",
        demandOption: true,
      })
      .option("path", {
        alias: "p",
        describe: "Custom path used as the path to the entity to be imported.",
        default: "",
        type: "string",
      })
      .option("configuration", {
        alias: "c",
        type: "string",
        describe: "The name of the configuration to be used",
      })
      .option("clear", {
        describe: "Flag to clear the existing data.",
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
    const entityName = camelCase(args.entity, true);
    const inputFile = path.resolve(args.inputFile);
    if (!fs.existsSync(inputFile)) {
      getDefaultLogger().info(`Input file ${ chalk.blue(inputFile) } does not exists.`);
      return;
    }

    let connection: DataSource;
    try {
      const importPath = path.resolve(Config.get("db.entities.folder"), args.path || "", entityName);
      const supportedFiles = [ `${ importPath }.ts`, `${ importPath }.js` ];
      const entityFile = supportedFiles.find((fileName) => fs.existsSync(fileName));
      if (!entityFile) {
        getDefaultLogger().info(`Entity ${ chalk.blue(entityName) } does not exists.`);
        return;
      }

      connection = await initConnection(args.configuration, false);
      if (!connection) {
        getDefaultLogger().error("You need to have a valid Database configuration, or one that isn't using Mongoose as the engine!");
        return;
      }

      if (!connection.isInitialized) {
        getDefaultLogger().error("Database connection not initialized!");
        return;
      }

      const entityContent = await import(entityFile);
      const data = JSON.parse(fs.readFileSync(inputFile, "utf-8"));
      const Entity = entityContent.default;
      const result = await DatabaseSeeder<typeof Entity>(Entity, data, args.clear ?? false);
      await connection.destroy();

      getDefaultLogger().info(
        `Entity ${ chalk.blue(entityName) } has been populated successfully. Created: ${ result.created }. Deleted: ${ result.deleted }.`
      );
    } catch (err) {
      getDefaultLogger().error(`Entity ${ chalk.blue(entityName) } failed population. Error: ${ err.message }`);
      getDefaultLogger().debug(err.stack);
      if (connection && connection.destroy) {
        await connection.destroy();
      }
    }
  }
}
