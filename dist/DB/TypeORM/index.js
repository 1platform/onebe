"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = _interopRequireDefault(require("../../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TypeORM database handler class.
 */
class TypeORM {
  /**
   * Default connection handler.
   */
  static get connection() {
    return TypeORM._connection;
  }

  /**
   * TypeORM instance getter.
   */
  static get instance() {
    return TypeORM._instance;
  }
  /**
   * Calls the Database initialization method.
   */


  async init() {
    const engine = _Config.default.string("db.engine", "mysql");

    TypeORM._connection = await this.connect(engine);
    TypeORM._instance = this;
  }

  connect(configurationName) {
    const dbConfig = _Config.default.object(`db.${configurationName}`);

    const config = {
      name: configurationName,
      type: dbConfig.engine,
      host: dbConfig.hostname,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      logging: dbConfig.logging ?? false,
      synchronize: false,
      bigNumberStrings: dbConfig.bigNumberStrings ?? false,
      entities: _Config.default.array("db.entities", ["./src/models/**/*.ts"]),
      migrationsTableName: _Config.default.string("db.migrations.table", "_migrations"),
      migrations: _Config.default.array("db.migrations.files", ["./src/migrations/*.js"]),
      cli: {
        migrationsDir: _Config.default.string("db.migrations.dir", "./src/migrations")
      }
    };
    return (0, _typeorm.createConnection)(config).then(connection => {
      _Logger.default.info("TypeORM database connected.");

      return connection;
    }).catch(error => {
      _Logger.default.error(`TypeORM connection error: ${error}`);

      return error;
    });
  }

}

exports.default = TypeORM;

_defineProperty(TypeORM, "_connection", null);

_defineProperty(TypeORM, "_instance", null);