"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utils = require("../Utils");

var _routeFile = _interopRequireDefault(require("./Utils/routeFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CLI Command to create a new route.
 */
class RouteCreateCommand {
  constructor() {
    _defineProperty(this, "command", "route:create <routeName>");

    _defineProperty(this, "aliases", ["controller:create"]);

    _defineProperty(this, "describe", "Creates a new route file.");
  }

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  builder(args) {
    return args.positional("routeName", {
      describe: "The name of the route to be created"
    }).option("api", {
      alias: "a",
      describe: "Flag to mark the route as API.",
      default: false,
      type: "boolean"
    }).option("docs", {
      alias: "d",
      describe: "Flag to mark the route as Documentation one.",
      default: false,
      type: "boolean"
    }).option("custom", {
      alias: "c",
      describe: "Option to set the a Custom base path for the route.",
      type: "string"
    }).option("path", {
      alias: "p",
      describe: "Custom path to set for the route. By default it will be the lowercase version of the route name.",
      type: "string"
    }).option("override", {
      alias: "o",
      describe: "Flag to override the existing entity.",
      default: false,
      type: "boolean"
    });
  }
  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */


  async handler(args) {
    (0, _routeFile.default)((0, _Utils.camelCase)(args.routeName, true), {
      api: args.api || false,
      docs: args.docs || false,
      custom: args.custom || "",
      path: args.path || "",
      override: args.override || false
    });
  }

}

exports.default = RouteCreateCommand;