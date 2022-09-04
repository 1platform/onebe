import { Arguments, Argv, CommandModule, exit } from "yargs";
import createProject from "./Utils/createProject";

/**
 * CLI Command to create a new project.
 */
export default class ProjectCreateCommand implements CommandModule {
  command = "project:create [projectName]";
  describe = "Creates a new project.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args.positional("projectName", {
      describe: "The name of the project to be created",
      demandOption: false,
    });
  }

  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public async handler(args: Arguments<any>) {
    try {
      await createProject(args.projectName || "");
    } catch (err) {
      process.exit(1);
    }
  }
}
