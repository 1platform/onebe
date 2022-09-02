import { Arguments, Argv, CommandModule } from "yargs";
import initConnection from "./Utils/initConnection";
import { DataSource, MigrationExecutor } from "typeorm";
import { getDefaultLogger } from "../System/Logger";

/**
 * CLI Command used to reset the database to the original state.
 */
export default class MigrationResetCommand implements CommandModule {
  command = "migration:reset";
  describe = "Undo all applied migration from the database";

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

      const migrationExecutor = new MigrationExecutor(connection, connection.createQueryRunner());
      const executedMigrations = await migrationExecutor.getExecutedMigrations();
      for (let iCounter = executedMigrations.length; iCounter > 0; iCounter--) {
        getDefaultLogger().info(`Reverted migration: ${ executedMigrations[iCounter - 1].name }`);
        await migrationExecutor.undoLastMigration();
      }
      await connection.destroy();
      getDefaultLogger().info("All migrations are reverted");
    } catch (err) {
      getDefaultLogger().error(err.message);

      if (connection && connection.destroy) {
        await connection.destroy();
      }

      process.exit(1);
    }
  }
}
