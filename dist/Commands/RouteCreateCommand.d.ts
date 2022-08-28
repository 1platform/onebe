import { Arguments, Argv, CommandModule } from "yargs";
/**
 * CLI Command to create a new route.
 */
export default class RouteCreateCommand implements CommandModule {
    command: string;
    aliases: string[];
    describe: string;
    /**
     * Method used to define the options and parameters that the CLI command
     * can receive.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    builder(args: Argv): Argv<{
        routeName: unknown;
    } & {
        api: boolean;
    } & {
        docs: boolean;
    } & {
        custom: string;
    } & {
        path: string;
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
