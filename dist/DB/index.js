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
 * Function used to get the default connection object when using
 * a TypeORM database connection object.
 */
function defaultConnection() {
  const configurationObject = _Config.default.object(`db.${_Config.default.string("db.configuration")}`);

  if (configurationObject.engine === "mongoose") {
    return null;
  }

  return _TypeORM.default.connection;
}
/**
 * Function used to initialise the database engine your application is going
 * to use. There are 2 engine options available for usage:
 *  - mongoose
 *  - typeorm (mongodb, mysql, mariadb, postgres)
 *
 * If you do not specify any database engine or an invalid one, then no database
 * connection will be made.
 */


function _default() {
  const configurationObject = _Config.default.object(`db.${_Config.default.string("db.configuration")}`);

  if (!configurationObject) {
    return;
  }

  switch (configurationObject.engine) {
    case "mongoose":
      return new _Mongo.default().init();

    case "mongodb":
    case "mysql":
    case "mariadb":
    case "postgres":
      return new _TypeORM.default().init();
  }
}