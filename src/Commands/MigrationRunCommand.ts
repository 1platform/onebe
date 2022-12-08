import { Arguments, Argv, CommandModule } from "yargs";
import { DataSource } from "typeorm";
import initConnection from "@/Commands/Utils/initConnection";
import { getDefaultLogger } from "@/System/Logger";

/**
 * CLI Command to apply all pending migrations onto the database.
 */
export default class MigrationRunCommand implements CommandModule {
  command = "migration:run";
  describe = "Applies all pending migrations onto the database";

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

      const migrationsRan = await connection.runMigrations({ transaction: "all" });
      if (migrationsRan && migrationsRan.length > 0) {
        getDefaultLogger().info("Migrations ran:");
        migrationsRan.map((migration) => {
          getDefaultLogger().info(`  - ${ migration.name }`);
        });
      } else {
        getDefaultLogger().info("No migration needed to be applied.");
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
