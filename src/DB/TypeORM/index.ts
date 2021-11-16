import { ConnectionOptions, createConnection, DatabaseType } from "typeorm";
import { Connection } from "typeorm/connection/Connection";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";

/**
 * Class representing a TypeORM handler
 */
export default class TypeORM {
  protected static _connection: Connection = null;

  public static get connection(): Connection {
    return TypeORM._connection;
  }

  /**
   * Calls the respective init method
   */
  public async init(): Promise<void> {
    const engine = Config.string("db.engine", "mysql") as DatabaseType;
    TypeORM._connection = await this.connect(engine);
  }

  public connect(configurationName: string): Promise<Connection> {
    const dbConfig = Config.object(`db.${ configurationName }`);
    const config: ConnectionOptions = {
      type: dbConfig.engine as DatabaseType,
      host: dbConfig.hostname,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: Config.array("db.entities", [ "./src/models/**/*.ts" ]),
      synchronize: true,
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
