import { Arguments, Argv, CommandModule } from "yargs";
import { DataSource } from "typeorm";
import initConnection from "@/Commands/Utils/initConnection";
import { getDefaultLogger } from "@/System/Logger";

/**
 * CLI command to undo the last applied migration.
 */
export default class MigrationUndoCommand implements CommandModule {
  command = "migration:undo";
  describe = "Undo last applied migration from the database";

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

      await connection.undoLastMigration({ transaction: "all" });
      await connection.destroy();
      getDefaultLogger().info("Last migration undone.");
    } catch (err) {
      getDefaultLogger().error(err.message);

      if (connection && connection.destroy) {
        await connection.destroy();
      }

      process.exit(1);
    }
  }
}
