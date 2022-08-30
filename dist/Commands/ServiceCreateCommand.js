"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utils = require("../Utils");

var _serviceFile = _interopRequireDefault(require("./Utils/serviceFile"));

var _Logger = require("../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CLI Command to create a new service.
 */
class ServiceCreateCommand {
  constructor() {
    _defineProperty(this, "command", "service:create <serviceName>");

    _defineProperty(this, "describe", "Creates a new service file.");
  }

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  builder(args) {
    return args.positional("serviceName", {
      describe: "The name of the service to be created"
    }).option("validator", {
      describe: "Flag to add data validation support for the service.",
      type: "boolean"
    }).option("repository", {
      alias: "r",
      describe: "Flag to add Database support for the service.",
      type: "string"
    }).option("type", {
      describe: "The type of repository service to be used. Valid only with --repository option.",
      choices: ["basic", "read-only", "full"],
      default: "basic",
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
    if (args.repository && args.repository.length === 0) {
      (0, _Logger.getDefaultLogger)().error("You need to specify the entity for which the repository is needed!");
      return;
    }

    (0, _serviceFile.default)((0, _Utils.camelCase)(args.serviceName, true), {
      validator: args.validator || false,
      repository: args.repository ? (0, _Utils.camelCase)(args.repository, true) : "",
      type: args.type || "basic",
      override: args.override || false
    });
  }

}

exports.default = ServiceCreateCommand;