import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for the Database
 */
const defaultDBConfig: IConfig = {
  /**
   * The default value for the database engine which will be used in the application.
   */
  engine: Env.string("DATABASE_ENGINE", "mongodb"),

  /**
   * The default mongo configuration
   */
  mongo: {
    /**
     * The default value of the url used to connect to the mongo database.
     */
    url: Env.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe"),
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
    hostname: Env.string("DATABASE_MYSQL_HOSTNAME", "localhost"),
    /**
     * The port on which we connect to the server.
     */
    port: Env.int("DATABASE_MYSQL_PORT", 3306),
    /**
     * The user used to connect to the server.
     */
    username: Env.string("DATABASE_MYSQL_USERNAME", "root"),
    /**
     * The password used to connect to the server.
     */
    password: Env.string("DATABASE_MYSQL_PASSWORD", ""),
    /**
     * The database used to connect to the server.
     */
    database: Env.string("DATABASE_MYSQL_DATABASE", "onebe"),
  },

  /**
   * All the locations where we can have entities defined. This setting applies
   * only to connections made using TypeORM (engine !== "mongoose")
   */
  entities: [ Env.string("DATABASE_ENTITIES", "./src/models/**/*.ts") ],
};

export default defaultDBConfig;
