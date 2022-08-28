"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initConnection;

var _Config = _interopRequireDefault(require("../../System/Config"));

var _TypeORM = _interopRequireDefault(require("../../DB/TypeORM"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Database connection initialization utility to be used in the
 * CLI commands.
 *
 * @param [configuration] The name of the configuration object to be used.
 * @param [logging] Database logging configuration.
 */
async function initConnection(configuration, logging) {
  let configurationObject = _Config.default.object(`db.${_Config.default.string("db.configuration")}`);

  if (configuration) {
    configurationObject = _Config.default.object(`db.${configuration}`);
  }

  if (!configurationObject || configurationObject.engine === "mongoose") {
    return null;
  }

  await new _TypeORM.default().init(configuration);

  if (!_TypeORM.default.connection || !_TypeORM.default.connection.isInitialized) {
    (0, _Logger.getDefaultLogger)().error("Database connection not initialized!");
    return null;
  }

  _TypeORM.default.connection.setOptions({
    subscribers: [],
    synchronize: false,
    migrationsRun: false,
    dropSchema: false,
    logging: logging ?? false
  });

  return _TypeORM.default.connection;
}