import { DataSource } from "typeorm";
import { Arguments, Argv, CommandModule } from "yargs";

import initConnection from "@/Commands/Utils/initConnection";
import FullDBSeed from "@/DB/TypeORM/FullDBSeed";
import { getDefaultLogger } from "@/System/Logger";

/**
 * CLI Command to load data into the database.
 */
export default class DatabaseSeedCommand implements CommandModule {
  command = "database:seed";
  aliases = [ "db:seed", "seed" ];
  describe = "Load data into the database using seed files.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args
      .option("configuration", {
        alias: "c",
        type: "string",
        describe: "The name of the configuration to be used",
      })
      .option("truncate", {
        alias: "t",
        describe: "Flag to clear the existing data from the database.",
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
    let connection: DataSource;
    try {
      connection = await initConnection(args.configuration, false);
      if (!connection) {
        getDefaultLogger().error("You need to have a valid Database configuration, or one that isn't using Mongoose as the engine!");
        return;
      }

      if (!connection.isInitialized) {
        getDefaultLogger().error("Database connection not initialized!");
        return;
      }

      await FullDBSeed(args.truncate || false);
      await connection.destroy();
    } catch (err) {
      getDefaultLogger().error(`Unable to seed the database. Error: ${ err.message }`);
      getDefaultLogger().debug(err.stack);
      if (connection && connection.destroy) {
        await connection.destroy();
      }
    }
  }
}
