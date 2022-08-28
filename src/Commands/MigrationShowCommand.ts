import { Arguments, Argv, CommandModule } from "yargs";
import initConnection from "./Utils/initConnection";
import { DataSource } from "typeorm";
import { getDefaultLogger } from "../System/Logger";

/**
 * CLI Command used to view all migrations and their status.
 */
export default class MigrationShowCommand implements CommandModule {
  command = "migration:show";
  describe = "Show all the migration statuses.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args.option("configuration", {
      alias: "c",
      type: "string",
      describe: "The name of the configuration to be used",
    });
  }

  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public async handler(args: Arguments<{ configuration?: string }>) {
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

      const pendingMigrations = await connection.showMigrations();
      if (pendingMigrations) {
        getDefaultLogger().info("There are pending migrations!");
      }
      await connection.destroy();
    } catch (err) {
      getDefaultLogger().error(err.message);

      if (connection && connection.destroy) {
        await connection.destroy();
      }

      process.exit(1);
    }
  }
}
