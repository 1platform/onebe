import { ConnectionOptions, createConnection, DatabaseType } from "typeorm";
import { Connection } from "typeorm/connection/Connection";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";

/**
 * TypeORM database handler class.
 */
export default class TypeORM {
  protected static _connection: Connection = null;

  /**
   * Default connection handler.
   */
  public static get connection(): Connection {
    return TypeORM._connection;
  }

  protected static _instance: TypeORM = null;

  /**
   * TypeORM instance getter.
   */
  public static get instance(): TypeORM {
    return TypeORM._instance;
  }

  /**
   * Calls the Database initialization method.
   */
  public async init(): Promise<void> {
    const engine = Config.string("db.engine", "mysql") as DatabaseType;
    TypeORM._connection = await this.connect(engine);
    TypeORM._instance = this;
  }

  public connect(configurationName: string): Promise<Connection> {
    const dbConfig = Config.object(`db.${ configurationName }`);
    const config: ConnectionOptions = {
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
      entities: Config.array("db.entities", [ "./src/models/**/*.ts" ]),
      migrationsTableName: Config.string("db.migrations.table", "_migrations"),
      migrations: Config.array("db.migrations.files", [
        "./src/migrations/*.js",
      ]),
      cli: {
        migrationsDir: Config.string("db.migrations.dir", "./src/migrations"),
      },
    } as ConnectionOptions;

    return createConnection(config)
      .then((connection) => {
        DefaultLogger.info("TypeORM database connected.");
        return connection;
      })
      .catch((error) => {
        DefaultLogger.error(`TypeORM connection error: ${ error }`);
        return error;
      });
  }
}
