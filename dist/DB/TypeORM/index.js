"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _typeorm = require("typeorm");

Object.keys(_typeorm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typeorm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typeorm[key];
    }
  });
});

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Custom Logger that can be used for logging database events.
 */
class CustomLogger {
  /**
   * The selected logging level passed to the logger by the database configuration.
   */

  /**
   * CustomLogger constructor.
   *
   * @param [loggingOptions] The logging options.
   */
  constructor(loggingOptions) {
    _defineProperty(this, "_loggingOptions", false);

    this._loggingOptions = loggingOptions ?? false;
  }
  /**
   * Method used by TypeORM to log various events happening in the database.
   *
   * @param level The logging level.
   * @param message The message to be logged.
   * @param [queryRunner] The query runner used to perform the database event.
   */


  log(level, message, queryRunner) {
    if (!this._loggingOptions) {
      return;
    }

    if (level === "warn") {
      (0, _Logger.getDefaultLogger)().warn(message);
      return;
    }

    (0, _Logger.getDefaultLogger)().debug(message);
  }
  /**
   * Logs migration messages.
   *
   * @param message The message to be logged.
   * @param [queryRunner] The query runner used to perform the database event.
   */


  logMigration(message, queryRunner) {
    if (!this._loggingOptions) {
      return;
    }

    (0, _Logger.getDefaultLogger)().debug(message);
  }
  /**
   * Logs a query execution.
   *
   * @param query The query that is running.
   * @param [parameters] A list with query parameters.
   * @param [queryRunner] The query runner used to perform the database event.
   */


  logQuery(query, parameters, queryRunner) {
    if (!this._loggingOptions) {
      return;
    }

    (0, _Logger.getDefaultLogger)().debug(`Query: ${query}\n\tParameters: ${this.stringifyParams(parameters || [])}`);
  }
  /**
   * Logs an error message.
   *
   * @param error The error to be logged.
   * @param query The query that is running.
   * @param [parameters] A list with query parameters.
   * @param [queryRunner] The query runner used to perform the database event.
   */


  logQueryError(error, query, parameters, queryRunner) {
    if (!this._loggingOptions) {
      return;
    }

    (0, _Logger.getDefaultLogger)().debug(`Query: ${query}\n\tParameters: ${this.stringifyParams(parameters || [])}`);
    (0, _Logger.getDefaultLogger)().error(error);
  }
  /**
   * Logs an error regarding a slow running query.
   *
   * @param time How long was the query running for.
   * @param query The query that is running.
   * @param [parameters] A list with query parameters.
   * @param [queryRunner] The query runner used to perform the database event.
   */


  logQuerySlow(time, query, parameters, queryRunner) {
    if (!this._loggingOptions) {
      return;
    }

    (0, _Logger.getDefaultLogger)().warn(`Query slow: ${query}\n\tParameters: ${this.stringifyParams(parameters || [])}`);
    (0, _Logger.getDefaultLogger)().warn(`Execution Time: ${time}`);
  }
  /**
   * Logs schema builder messages.
   *
   * @param message The message to be logged.
   * @param [queryRunner] The query runner used to perform the database event.
   */


  logSchemaBuild(message, queryRunner) {
    if (!this._loggingOptions) {
      return;
    }

    (0, _Logger.getDefaultLogger)().debug(message);
  }
  /**
   * Stringify the parameters sent to the query.
   *
   * @param parameters A list with parameters.
   */


  stringifyParams(parameters) {
    try {
      return JSON.stringify(parameters);
    } catch (error) {
      // most probably circular objects in parameters
      return parameters;
    }
  }

}
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


  async init(configuration) {
    TypeORM._connection = await this.connect(configuration ?? _Config.default.string("db.configuration"));
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
      logger: new CustomLogger(dbConfig.logging ?? false),
      synchronize: false,
      bigNumberStrings: dbConfig.bigNumberStrings ?? false,
      timezone: dbConfig.timezone || "Z",
      entities: _Config.default.array("db.entities.files", ["./src/entities/**/*.{ts,js}", "./src/models/**/*.{ts,js}"]),
      migrationsTableName: _Config.default.string("db.migrations.table", "_migrations"),
      migrations: _Config.default.array("db.migrations.files", ["./src/migrations/*.{ts,js}"]),
      cli: {
        migrationsDir: _Config.default.string("db.migrations.folder", "./src/migrations")
      }
    };
    const dataSource = new _typeorm.DataSource(config);
    return dataSource.initialize().then(connection => {
      (0, _Logger.getDefaultLogger)().info(`Database [${dbConfig.database}] connected.`);
      return connection;
    }).catch(error => {
      (0, _Logger.getDefaultLogger)().error(`Connection error: ${error}`);
      return error;
    });
  }

}

exports.default = TypeORM;

_defineProperty(TypeORM, "_connection", null);

_defineProperty(TypeORM, "_instance", null);