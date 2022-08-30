import { Arguments, Argv, CommandModule } from "yargs";
import { camelCase } from "../Utils";
import createServiceFile from "./Utils/serviceFile";
import { getDefaultLogger } from "../System/Logger";

/**
 * CLI Command to create a new service.
 */
export default class ServiceCreateCommand implements CommandModule {
  command = "service:create <serviceName>";
  describe = "Creates a new service file.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args
      .positional("serviceName", {
        describe: "The name of the service to be created",
      })
      .option("validator", {
        describe: "Flag to add data validation support for the service.",
        type: "boolean",
      })
      .option("repository", {
        alias: "r",
        describe: "Flag to add Database support for the service.",
        type: "string",
      })
      .option("type", {
        describe: "The type of repository service to be used. Valid only with --repository option.",
        choices: [ "basic", "read-only", "full" ],
        default: "basic",
        type: "string",
      })
      .option("override", {
        alias: "o",
        describe: "Flag to override the existing entity.",
        default: false,
        type: "boolean",
      });
  }

  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public async handler(args: Arguments<any>) {
    if (args.repository && args.repository.length === 0) {
      getDefaultLogger().error("You need to specify the entity for which the repository is needed!");
      return;
    }
    createServiceFile(camelCase(args.serviceName, true), {
      validator: args.validator || false,
      repository: args.repository ? camelCase(args.repository, true) : "",
      type: args.type || "basic",
      override: args.override || false,
    });
  }
}
