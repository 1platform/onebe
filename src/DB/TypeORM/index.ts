import { DatabaseType, DataSource } from "typeorm";
import Config from "../../System/Config";
import { getDefaultLogger } from "../../System/Logger";
import { DataSourceOptions } from "typeorm/data-source/DataSourceOptions";

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
  public async init(): Promise<void> {
    const configurationObject = Config.object(`db.${ Config.string("db.configuration") }`);
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
      synchronize: false,
      bigNumberStrings: dbConfig.bigNumberStrings ?? false,
      timezone: dbConfig.timezone || "Z",
      entities: Config.array("db.entities", [ "./src/models/**/*.ts" ]),
      migrationsTableName: Config.string("db.migrations.table", "_migrations"),
      migrations: Config.array("db.migrations.files", [ "./src/migrations/*.js" ]),
      cli: {
        migrationsDir: Config.string("db.migrations.dir", "./src/migrations"),
      },
    } as DataSourceOptions;

    const dataSource = new DataSource(config);

    return dataSource
      .initialize()
      .then((connection) => {
        getDefaultLogger().info("TypeORM database connected.");
        return connection;
      })
      .catch((error) => {
        getDefaultLogger().error(`TypeORM connection error: ${ error }`);
        return error;
      });
  }
}
