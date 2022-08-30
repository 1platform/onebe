import { Arguments, Argv, CommandModule } from "yargs";
/**
 * CLI Command to create a new job.
 */
export default class JobCreateCommand implements CommandModule {
    command: string;
    describe: string;
    /**
     * Method used to define the options and parameters that the CLI command
     * can receive.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    builder(args: Argv): Argv<{
        jobName: unknown;
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
