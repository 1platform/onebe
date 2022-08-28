"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _migrationFile = _interopRequireDefault(require("./Utils/migrationFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CLI Command used to create a new migration.
 */
class MigrationCreateCommand {
  constructor() {
    _defineProperty(this, "command", "migration:create <migrationName>");

    _defineProperty(this, "describe", "Creates a new migration file.");
  }

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  builder(args) {
    return args.positional("migrationName", {
      describe: "The name of the migration to be created"
    });
  }
  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */


  async handler(args) {
    (0, _migrationFile.default)(args.migrationName);
  }

}

exports.default = MigrationCreateCommand;