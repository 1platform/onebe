import { Arguments, Argv, CommandModule } from "yargs";
/**
 * CLI Command used to create a new migration.
 */
export default class MigrationCreateCommand implements CommandModule {
    command: string;
    describe: string;
    /**
     * Method used to define the options and parameters that the CLI command
     * can receive.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    builder(args: Argv): Argv<{
        migrationName: unknown;
    }>;
    /**
     * Method used to run the command.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    handler(args: Arguments<{
        migrationName: string;
    }>): Promise<void>;
}
