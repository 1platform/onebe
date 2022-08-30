"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _DatabaseSeeder = _interopRequireDefault(require("../DB/TypeORM/DatabaseSeeder"));

var _fs = _interopRequireDefault(require("fs"));

var _Logger = require("../System/Logger");

var _chalk = _interopRequireDefault(require("chalk"));

var _Utils = require("../Utils");

var _initConnection = _interopRequireDefault(require("./Utils/initConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CLI Command to load data into a specific entity.
 */
class EntityLoadCommand {
  constructor() {
    _defineProperty(this, "command", "entity:load");

    _defineProperty(this, "describe", "Load data into the database for a specified entity.");
  }

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  builder(args) {
    return args.option("inputFile", {
      alias: "i",
      describe: "The file used as input.",
      type: "string",
      demandOption: true
    }).option("entity", {
      alias: "e",
      describe: "The name of the model to be used for import.",
      type: "string",
      demandOption: true
    }).option("path", {
      alias: "p",
      describe: "Custom path used as the path to the entity to be imported.",
      default: "",
      type: "string"
    }).option("configuration", {
      alias: "c",
      type: "string",
      describe: "The name of the configuration to be used"
    }).option("clear", {
      describe: "Flag to clear the existing data.",
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
    const entityName = (0, _Utils.camelCase)(args.entity, true);

    const inputFile = _path.default.resolve(args.inputFile);

    if (!_fs.default.existsSync(inputFile)) {
      (0, _Logger.getDefaultLogger)().info(`Input file ${_chalk.default.blue(inputFile)} does not exists.`);
      return;
    }

    let connection;

    try {
      const importPath = _path.default.resolve(`${_Config.default.get("db.entities.folder")}`, args.path || "", entityName);

      const supportedFiles = [`${importPath}.ts`, `${importPath}.js`];
      const entityFile = supportedFiles.find(fileName => _fs.default.existsSync(fileName));

      if (!entityFile) {
        (0, _Logger.getDefaultLogger)().info(`Entity ${_chalk.default.blue(entityName)} does not exists.`);
        return;
      }

      connection = await (0, _initConnection.default)(args.configuration, false);

      if (!connection) {
        (0, _Logger.getDefaultLogger)().error("You need to have a valid Database configuration, or one that isn't using Mongoose as the engine!");
        return;
      }

      if (!connection.isInitialized) {
        (0, _Logger.getDefaultLogger)().error("Database connection not initialized!");
        return;
      }

      const entityContent = await Promise.resolve(`${entityFile}`).then(s => _interopRequireWildcard(require(s)));
      const data = JSON.parse(_fs.default.readFileSync(inputFile, "utf-8"));
      const Entity = entityContent.default;
      const result = await (0, _DatabaseSeeder.default)(Entity, data, args.clear ?? false);
      await connection.destroy();
      (0, _Logger.getDefaultLogger)().info(`Entity ${_chalk.default.blue(entityName)} has been populated successfully. Created: ${result.created}. Deleted: ${result.deleted}.`);
    } catch (err) {
      (0, _Logger.getDefaultLogger)().error(`Entity ${_chalk.default.blue(entityName)} failed population. Error: ${err.message}`);
      (0, _Logger.getDefaultLogger)().debug(err.stack);

      if (connection && connection.destroy) {
        await connection.destroy();
      }
    }
  }

}

exports.default = EntityLoadCommand;