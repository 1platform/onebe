"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utils = require("../Utils");

var _entityFile = _interopRequireDefault(require("./Utils/entityFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CLI Command to create a new entity.
 */
class EntityCreateCommand {
  constructor() {
    _defineProperty(this, "command", "entity:create <entityName>");

    _defineProperty(this, "describe", "Creates a new entity file.");
  }

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  builder(args) {
    return args.positional("entityName", {
      describe: "The name of the entity to be created"
    }).option("migration", {
      alias: "m",
      describe: "Flag to enable the migration creation.",
      default: false,
      type: "boolean"
    }).option("audit", {
      alias: "a",
      describe: "Flag to enable the audit fields creation.",
      default: false,
      type: "boolean"
    }).option("softDelete", {
      alias: "d",
      describe: "Flag to enable the soft delete field creation.",
      default: false,
      type: "boolean"
    }).option("uuid", {
      alias: "u",
      describe: "Flag to enable UUID ID field creation.",
      default: false,
      type: "boolean"
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
    (0, _entityFile.default)((0, _Utils.camelCase)(args.entityName, true), {
      migration: args.migration || false,
      audit: args.audit || false,
      softDelete: args.softDelete || false,
      uuid: args.uuid || false,
      override: args.override || false
    });
  }

}

exports.default = EntityCreateCommand;