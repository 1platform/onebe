"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TypeORM connection handler class.
 *
 * Using this class you can connect and use any of the following database
 * engines in your application: MongoDB, MySQL, MariaDB, Postgres. By using
 * TypeORM you can easily define model classes that use all the features
 * of TypeScript. Also, when using TypeORM, the entity/model documentation
 * is done for you.
 */
class TypeORM {
  /**
   * The default database connection object.
   */

  /**
   * Getter for the default database connection object.
   */
  static get connection() {
    return TypeORM._connection;
  }
  /**
   * The singleton instance for the TypeORM class.
   */


  /**
   * Getter for the TypeORM instance object.
   */
  static get instance() {
    return TypeORM._instance;
  }
  /**
   * Database initialisation method.
   *
   * Through this method, the framework connects your application to a database
   * server and stores that connection for later use.
   */


  async init() {
    const configurationObject = _Config.default.object(`db.${_Config.default.string("db.configuration")}`);

    TypeORM._connection = await this.connect(configurationObject.engine);
    TypeORM._instance = this;
  }
  /**
   * Method used to create a new database connection that can be used
   * by your application.
   *
   * If needed, at any moment, you can create a new database connection
   * to any other database that you might need.
   *
   * @param configurationName The name of the configuration object used to perform the connection.
   */


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
      timezone: dbConfig.timezone || "Z",
      entities: _Config.default.array("db.entities", ["./src/models/**/*.ts"]),
      migrationsTableName: _Config.default.string("db.migrations.table", "_migrations"),
      migrations: _Config.default.array("db.migrations.files", ["./src/migrations/*.js"]),
      cli: {
        migrationsDir: _Config.default.string("db.migrations.dir", "./src/migrations")
      }
    };
    const dataSource = new _typeorm.DataSource(config);
    return dataSource.initialize().then(connection => {
      (0, _Logger.getDefaultLogger)().info("TypeORM database connected.");
      return connection;
    }).catch(error => {
      (0, _Logger.getDefaultLogger)().error(`TypeORM connection error: ${error}`);
      return error;
    });
  }

}

exports.default = TypeORM;

_defineProperty(TypeORM, "_connection", null);

_defineProperty(TypeORM, "_instance", null);