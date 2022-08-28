import { Arguments, Argv, CommandModule } from "yargs";
/**
 * CLI command to undo the last applied migration.
 */
export default class MigrationUndoCommand implements CommandModule {
    command: string;
    describe: string;
    /**
     * Method used to define the options and parameters that the CLI command
     * can receive.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    builder(args: Argv): Argv<{
        configuration: string;
    }>;
    /**
     * Method used to run the command.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    handler(args: Arguments<{
        configuration?: string;
    }>): Promise<void>;
}
