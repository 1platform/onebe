import { DatabaseType, DataSource, Logger, QueryRunner } from "typeorm";
import Config from "../../System/Config";
import { getDefaultLogger } from "../../System/Logger";
import { DataSourceOptions } from "typeorm/data-source/DataSourceOptions";

export * from "typeorm";

/**
 * TypeORM Logging options.
 */
export type LoggingOptions = "schema" | "query" | "error" | "warn" | "info" | "log" | "migration";

/**
 * Custom Logger that can be used for logging database events.
 */
class CustomLogger implements Logger {
  /**
   * The selected logging level passed to the logger by the database configuration.
   */
  private readonly _loggingOptions: boolean | LoggingOptions[] = false;

  /**
   * CustomLogger constructor.
   *
   * @param [loggingOptions] The logging options.
   */
  public constructor(loggingOptions?: boolean | LoggingOptions[]) {
    this._loggingOptions = loggingOptions ?? false;
  }

  /**
   * Method used by TypeORM to log various events happening in the database.
   *
   * @param level The logging level.
   * @param message The message to be logged.
   * @param [queryRunner] The query runner used to perform the database event.
   */
  public log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner): any {
    if (!this._loggingOptions) {
      return;
    }
    if (level === "warn") {
      getDefaultLogger().warn(message);
      return;
    }

    getDefaultLogger().debug(message);
  }

  /**
   * Logs migration messages.
   *
   * @param message The message to be logged.
   * @param [queryRunner] The query runner used to perform the database event.
   */
  public logMigration(message: string, queryRunner?: QueryRunner): any {
    if (!this._loggingOptions) {
      return;
    }
    getDefaultLogger().debug(message);
  }

  /**
   * Logs a query execution.
   *
   * @param query The query that is running.
   * @param [parameters] A list with query parameters.
   * @param [queryRunner] The query runner used to perform the database event.
   */
  public logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    if (!this._loggingOptions) {
      return;
    }
    getDefaultLogger().debug(`Query: ${ query }\n\tParameters: ${ this.stringifyParams(parameters || []) }`);
  }

  /**
   * Logs an error message.
   *
   * @param error The error to be logged.
   * @param query The query that is running.
   * @param [parameters] A list with query parameters.
   * @param [queryRunner] The query runner used to perform the database event.
   */
  public logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    if (!this._loggingOptions) {
      return;
    }
    getDefaultLogger().debug(`Query: ${ query }\n\tParameters: ${ this.stringifyParams(parameters || []) }`);
    getDefaultLogger().error(error);
  }

  /**
   * Logs an error regarding a slow running query.
   *
   * @param time How long was the query running for.
   * @param query The query that is running.
   * @param [parameters] A list with query parameters.
   * @param [queryRunner] The query runner used to perform the database event.
   */
  public logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    if (!this._loggingOptions) {
      return;
    }
    getDefaultLogger().warn(`Query slow: ${ query }\n\tParameters: ${ this.stringifyParams(parameters || []) }`);
    getDefaultLogger().warn(`Execution Time: ${ time }`);
  }

  /**
   * Logs schema builder messages.
   *
   * @param message The message to be logged.
   * @param [queryRunner] The query runner used to perform the database event.
   */
  public logSchemaBuild(message: string, queryRunner?: QueryRunner): any {
    if (!this._loggingOptions) {
      return;
    }
    getDefaultLogger().debug(message);
  }

  /**
   * Stringify the parameters sent to the query.
   *
   * @param parameters A list with parameters.
   */
  protected stringifyParams(parameters: any): string {
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
export default class TypeORM {
  /**
   * The default database connection object.
   */
  protected static _connection: DataSource = null;

  /**
   * Getter for the default database connection object.
   */
  public static get connection(): DataSource {
    return TypeORM._connection;
  }

  /**
   * The singleton instance for the TypeORM class.
   */
  protected static _instance: TypeORM = null;

  /**
   * Getter for the TypeORM instance object.
   */
  public static get instance(): TypeORM {
    return TypeORM._instance;
  }

  /**
   * Database initialisation method.
   *
   * Through this method, the framework connects your application to a database
   * server and stores that connection for later use.
   */
  public async init(configuration?: string): Promise<void> {
    const configurationObject = Config.object(`db.${ configuration ?? Config.string("db.configuration") }`);
    TypeORM._connection = await this.connect(configurationObject.engine as DatabaseType);
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
  public connect(configurationName: string): Promise<DataSource> {
    const dbConfig = Config.object(`db.${ configurationName }`);
    const config: DataSourceOptions = {
      name: configurationName,
      type: dbConfig.engine as DatabaseType,
      host: dbConfig.hostname,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      logging: dbConfig.logging ?? false,
      logger: new CustomLogger((dbConfig.logging ?? false) as boolean | LoggingOptions[]),
      synchronize: false,
      bigNumberStrings: dbConfig.bigNumberStrings ?? false,
      timezone: dbConfig.timezone || "Z",
      entities: Config.array("db.entities.files", [ "./src/models/**/*.ts" ]),
      migrationsTableName: Config.string("db.migrations.table", "_migrations"),
      migrations: Config.array("db.migrations.files", [ "./src/migrations/*.js" ]),
      cli: {
        migrationsDir: Config.string("db.migrations.folder", "./src/migrations"),
      },
    } as DataSourceOptions;

    const dataSource = new DataSource(config);

    return dataSource
      .initialize()
      .then((connection) => {
        getDefaultLogger().info(`Database [${ dbConfig.database }] connected.`);
        return connection;
      })
      .catch((error) => {
        getDefaultLogger().error(`Connection error: ${ error }`);
        return error;
      });
  }
}
