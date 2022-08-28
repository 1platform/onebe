import { DataSource } from "typeorm";
export * from "typeorm";
/**
 * TypeORM Logging options.
 */
export declare type LoggingOptions = "schema" | "query" | "error" | "warn" | "info" | "log" | "migration";
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
    protected static _connection: DataSource;
    /**
     * Getter for the default database connection object.
     */
    static get connection(): DataSource;
    /**
     * The singleton instance for the TypeORM class.
     */
    protected static _instance: TypeORM;
    /**
     * Getter for the TypeORM instance object.
     */
    static get instance(): TypeORM;
    /**
     * Database initialisation method.
     *
     * Through this method, the framework connects your application to a database
     * server and stores that connection for later use.
     */
    init(configuration?: string): Promise<void>;
    /**
     * Method used to create a new database connection that can be used
     * by your application.
     *
     * If needed, at any moment, you can create a new database connection
     * to any other database that you might need.
     *
     * @param configurationName The name of the configuration object used to perform the connection.
     */
    connect(configurationName: string): Promise<DataSource>;
}
