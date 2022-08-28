import { Arguments, Argv, CommandModule } from "yargs";
/**
 * CLI Command to create a new entity.
 */
export default class EntityCreateCommand implements CommandModule {
    command: string;
    describe: string;
    /**
     * Method used to define the options and parameters that the CLI command
     * can receive.
     *
     * @param args A list with arguments and options sent by the user to the command.
     */
    builder(args: Argv): Argv<{
        entityName: unknown;
    } & {
        migration: boolean;
    } & {
        audit: boolean;
    } & {
        softDelete: boolean;
    } & {
        uuid: boolean;
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
