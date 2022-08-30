import { Arguments, Argv, CommandModule } from "yargs";
/**
 * CLI Command to create a new service.
 */
export default class ServiceCreateCommand implements CommandModule {
    command: string;
    describe: string;
    /**
     * Method used to define the options and parameters that the CLI command
     * can receive.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    builder(args: Argv): Argv<{
        serviceName: unknown;
    } & {
        validator: boolean;
    } & {
        repository: string;
    } & {
        type: string;
    } & {
        override: boolean;
    }>;
    /**
     * Method used to run the command.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    handler(args: Arguments<any>): Promise<void>;
}
