"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utils = require("../Utils");

var _jobFile = _interopRequireDefault(require("./Utils/jobFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CLI Command to create a new job.
 */
class JobCreateCommand {
  constructor() {
    _defineProperty(this, "command", "job:create <jobName>");

    _defineProperty(this, "describe", "Creates a new job file.");
  }

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  builder(args) {
    return args.positional("jobName", {
      describe: "The name of the job to be created"
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
    (0, _jobFile.default)((0, _Utils.camelCase)(args.jobName, true), {
      override: args.override || false
    });
  }

}

exports.default = JobCreateCommand;