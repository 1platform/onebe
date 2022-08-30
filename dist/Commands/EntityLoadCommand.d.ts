import { Arguments, Argv, CommandModule } from "yargs";
/**
 * CLI Command to load data into a specific entity.
 */
export default class EntityLoadCommand implements CommandModule {
    command: string;
    describe: string;
    /**
     * Method used to define the options and parameters that the CLI command
     * can receive.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    builder(args: Argv): Argv<{
        inputFile: string;
    } & {
        entity: string;
    } & {
        path: string;
    } & {
        configuration: string;
    } & {
        clear: boolean;
    }>;
    /**
     * Method used to run the command.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    handler(args: Arguments<any>): Promise<void>;
}
