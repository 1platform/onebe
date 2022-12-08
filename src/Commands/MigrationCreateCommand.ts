import { Arguments, Argv, CommandModule } from "yargs";
import createMigrationFile from "@/Commands/Utils/migrationFile";

/**
 * CLI Command used to create a new migration.
 */
export default class MigrationCreateCommand implements CommandModule {
  command = "migration:create <migrationName>";
  describe = "Creates a new migration file.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args.positional("migrationName", {
      describe: "The name of the migration to be created",
    });
  }

  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public async handler(args: Arguments<{ migrationName: string }>) {
    createMigrationFile(args.migrationName);
  }
}
