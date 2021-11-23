"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for the Database
 */
const defaultDBConfig = {
  /**
   * The default value for the database engine which will be used in the application.
   */
  engine: _Env.default.string("DATABASE_ENGINE", "mongodb"),

  /**
   * The default mongo configuration
   */
  mongo: {
    /**
     * The default value of the url used to connect to the mongo database.
     */
    url: _Env.default.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe")
  },

  /**
   * MySQL Configuration example.
   */
  mysql: {
    /**
     * The engine used for database connections.
     */
    engine: "mysql",

    /**
     * The hostname of the server.
     */
    hostname: _Env.default.string("DATABASE_MYSQL_HOSTNAME", "localhost"),

    /**
     * The port on which we connect to the server.
     */
    port: _Env.default.int("DATABASE_MYSQL_PORT", 3306),

    /**
     * The user used to connect to the server.
     */
    username: _Env.default.string("DATABASE_MYSQL_USERNAME", "root"),

    /**
     * The password used to connect to the server.
     */
    password: _Env.default.string("DATABASE_MYSQL_PASSWORD", ""),

    /**
     * The database used to connect to the server.
     */
    database: _Env.default.string("DATABASE_MYSQL_DATABASE", "onebe")
  },

  /**
   * All the locations where we can have entities defined. This setting applies
   * only to connections made using TypeORM (engine !== "mongoose")
   */
  entities: [_Env.default.string("DATABASE_ENTITIES", "./src/models/**/*.ts")],

  /**
   * The migrations configuration.
   */
  migrations: {
    /**
     * Where we store our migrations.
     */
    table: _Env.default.string("DATABASE_MIGRATIONS_TABLE", "_migrations"),

    /**
     * The location where we can find our migrations.
     */
    files: [_Env.default.string("DATABASE_MIGRATIONS", "./src/migrations/**/*.ts")],

    /**
     * The folder containing the migrations.
     */
    dir: _Env.default.string("DATABASE_MIGRATIONS_FOLDER", "./src/migrations/")
  }
};
var _default = defaultDBConfig;
exports.default = _default;