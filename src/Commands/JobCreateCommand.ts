import { Arguments, Argv, CommandModule } from "yargs";

import createJobFile from "@/Commands/Utils/jobFile";
import { camelCase } from "@/Utils";

/**
 * CLI Command to create a new job.
 */
export default class JobCreateCommand implements CommandModule {
  command = "job:create <jobName>";
  describe = "Creates a new job file.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args
      .positional("jobName", {
        describe: "The name of the job to be created",
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
    createJobFile(camelCase(args.jobName, true), {
      override: args.override || false,
    });
  }
}
