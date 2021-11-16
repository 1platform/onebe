"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.defaultConnection = defaultConnection;

var _Config = _interopRequireDefault(require("../System/Config"));

var _Mongo = _interopRequireDefault(require("./Mongo"));

var _TypeORM = _interopRequireDefault(require("./TypeORM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the default connection to TypeORM database.
 */
function defaultConnection() {
  if (_Config.default.string("db.engine", "mongoose") === "mongoose") {
    return null;
  }

  return _TypeORM.default.connection;
}
/**
 * Initializes the database engine we will use in the application.
 */


function _default() {
  switch (_Config.default.string("db.engine", "mongoose")) {
    case "mongoose":
      return new _Mongo.default().init();

    case "mongodb":
    case "mysql":
    case "mariadb":
    case "postgres":
      return new _TypeORM.default().init();
  }
}