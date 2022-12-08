import { Arguments, Argv, CommandModule } from "yargs";
import { camelCase } from "@/Utils";
import createRouteFile from "@/Commands/Utils/routeFile";

/**
 * CLI Command to create a new route.
 */
export default class RouteCreateCommand implements CommandModule {
  command = "route:create <routeName>";
  aliases = [ "controller:create" ];
  describe = "Creates a new route file.";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args
      .positional("routeName", {
        describe: "The name of the route to be created",
      })
      .option("api", {
        alias: "a",
        describe: "Flag to mark the route as API.",
        default: false,
        type: "boolean",
      })
      .option("docs", {
        alias: "d",
        describe: "Flag to mark the route as Documentation one.",
        default: false,
        type: "boolean",
      })
      .option("custom", {
        alias: "c",
        describe: "Option to set the a Custom base path for the route.",
        type: "string",
      })
      .option("path", {
        alias: "p",
        describe: "Custom path to set for the route. By default it will be the lowercase version of the route name.",
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
    createRouteFile(camelCase(args.routeName, true), {
      api: args.api || false,
      docs: args.docs || false,
      custom: args.custom || "",
      path: args.path || "",
      override: args.override || false,
    });
  }
}
