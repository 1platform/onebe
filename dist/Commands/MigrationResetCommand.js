"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _initConnection = _interopRequireDefault(require("./Utils/initConnection"));

var _typeorm = require("typeorm");

var _Logger = require("../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CLI Command used to reset the database to the original state.
 */
class MigrationResetCommand {
  constructor() {
    _defineProperty(this, "command", "migration:reset");

    _defineProperty(this, "describe", "Undo all applied migration from the database");
  }

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  builder(args) {
    return args.option("configuration", {
      alias: "c",
      type: "string",
      describe: "The name of the configuration to be used"
    });
  }
  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */


  async handler(args) {
    let connection;

    try {
      connection = await (0, _initConnection.default)(args.configuration, false);

      if (!connection) {
        (0, _Logger.getDefaultLogger)().error("You need to have a valid Database configuration, or one that isn't using Mongoose as the engine!");
        return;
      }

      if (!connection.isInitialized) {
        (0, _Logger.getDefaultLogger)().error("Database connection not initialized!");
        return;
      }

      const migrationExecutor = new _typeorm.MigrationExecutor(connection, connection.createQueryRunner());
      const executedMigrations = await migrationExecutor.getExecutedMigrations();

      for (let iCounter = executedMigrations.length; iCounter > 0; iCounter--) {
        (0, _Logger.getDefaultLogger)().info(`Reverted migration: ${executedMigrations[iCounter - 1].name}`);
        await migrationExecutor.undoLastMigration();
      }

      await connection.destroy();
      (0, _Logger.getDefaultLogger)().info("All migrations are reverted");
    } catch (err) {
      (0, _Logger.getDefaultLogger)().error(err.message);

      if (connection && connection.destroy) {
        await connection.destroy();
      }

      process.exit(1);
    }
  }

}

exports.default = MigrationResetCommand;