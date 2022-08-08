import { DataSource } from "typeorm";
/**
 * TypeORM database handler class.
 */
export default class TypeORM {
    protected static _connection: DataSource;
    /**
     * Default connection handler.
     */
    static get connection(): DataSource;
    protected static _instance: TypeORM;
    /**
     * TypeORM instance getter.
     */
    static get instance(): TypeORM;
    /**
     * Calls the Database initialization method.
     */
    init(): Promise<void>;
    connect(configurationName: string): Promise<DataSource>;
}
