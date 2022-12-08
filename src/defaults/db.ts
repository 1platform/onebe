import Env from "@/System/Env";
import type IConfig from "@/System/IConfig";

/**
 * The database configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * database functionality of the application.
 */
const defaultDBConfig: IConfig = {
  /**
   * The default database configuration to be used in the application. The framework
   * can support multiple database configurations that can be accessed at runtime as
   * needed. If you don't want to use a database connection, set this value to empty.
   *
   * @default "mongoose"
   */
  configuration: Env.string("DATABASE_CONFIGURATION", "mongoose"),

  /**
   * One of the database connection types supported by the framework is `mongoose`. When
   * using the `mongoose` engine we don't have support for auto documentation of the entities.
   * Other database connection types are: `mysql`, `mariadb`, `postgres`, `mongodb`.
   */
  mongoose: {
    /**
     * The database engine to be used when connecting to a database server.
     *
     * @default "mongoose"
     */
    engine: "mongoose",

    /**
     * The URL used to connect to a MongoDB database.
     *
     * @default "mongodb://localhost:27017/onebe"
     */
    url: Env.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe"),
  },

  /**
   * For the other database connection types supported by the framework we can set the
   * database connection parameters like the object below.
   */
  mysql: {
    /**
     * The database engine you want to use to connect to a database server.
     *
     * @default "mysql"
     */
    engine: "mysql",

    /**
     * The address of the database server.
     *
     * @default "localhost"
     */
    hostname: Env.string("DATABASE_MYSQL_HOSTNAME", "localhost"),

    /**
     * The port on which the database server is exposed.
     *
     * @default 3306
     */
    port: Env.int("DATABASE_MYSQL_PORT", 3306),

    /**
     * The user used to connect to the database server.
     *
     * @default "root"
     */
    username: Env.string("DATABASE_MYSQL_USERNAME", "root"),

    /**
     * The password used to connect to the database server.
     *
     * @default ""
     */
    password: Env.string("DATABASE_MYSQL_PASSWORD", ""),

    /**
     * The name of the database you want to use for your application.
     *
     * @default "onebe"
     */
    database: Env.string("DATABASE_MYSQL_DATABASE", "onebe"),

    /**
     * When using the `mysql` engine, the bigint numbers are treated as integers by default.
     * If you don't want to expose these numbers as integers, set this flag to `true`.
     *
     * @default false
     */
    bigNumberStrings: Env.flag("DATABASE_MYSQL_BIG_NUMBERS") ?? false,

    /**
     * When working with timestamps and date columns, you might want to store the data in
     * the same timezone in the whole application. As a recommendation we suggest to
     * keep it in UTC (or Z).
     *
     * @default "Z"
     */
    timezone: Env.string("DATABASE_MYSQL_TIMEZONE", "Z"),
  },

  /**
   * Flag used to enable database logging. If you want to see what queries are performed on the
   * database set this flag to true.
   *
   * @default false
   */
  logging: Env.flag("DATABASE_LOGGING"),

  /**
   * When using the TypeORM engine we use entities/models to work with the database.
   */
  entities: {
    /**
     * A list with the locations where the TypeORM engine will look for entities to load into
     * the application. This configuration property will be used only when the engine
     * is set to a different value than `mongoose`.
     *
     * @default [".\/src\/entities\/**\/*.ts"]
     */
    files: [ Env.string("DATABASE_ENTITIES", "./src/entities/**/*.ts") ],
    /**
     * The folder where the entities files should be generated when using the CLI interface.
     *
     * @default "./src/entities/"
     */
    folder: [ Env.string("DATABASE_ENTITIES_FOLDER", "./src/entities/") ],
  },

  /**
   * When using the TypeORM engine we can use migration files to create the database and
   * fill it with data.
   */
  migrations: {
    /**
     * The table used to store the list of migration files that were loaded.
     *
     * @default "_migrations"
     */
    table: Env.string("DATABASE_MIGRATIONS_TABLE", "_migrations"),

    /**
     * A list with the locations where the TypeORM engine will look for migration files to
     * load into the application.
     *
     * @default [".\/src\/migrations\/**\/*.ts"]
     */
    files: [ Env.string("DATABASE_MIGRATIONS", "./src/migrations/**/*.ts") ],

    /**
     * The folder where the migrations files should be generated when using the CLI interface.
     *
     * @default "./src/migrations/"
     */
    folder: Env.string("DATABASE_MIGRATIONS_FOLDER", "./src/migrations/"),
  },

  /**
   * When using the TypeORM engine we can use seed files to populate the database.
   */
  seeds: {
    /**
     * The folder where the seed files should be generated when using the CLI interface.
     *
     * @default "./src/seeds/"
     */
    folder: Env.string("DATABASE_SEEDS_FOLDER", "./src/seeds/"),
  },
};

export default defaultDBConfig;
