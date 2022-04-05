import { Connection } from "typeorm";
/**
 * TypeORM database handler class.
 */
export default class TypeORM {
    protected static _connection: Connection;
    /**
     * Default connection handler.
     */
    static get connection(): Connection;
    protected static _instance: TypeORM;
    /**
     * TypeORM instance getter.
     */
    static get instance(): TypeORM;
    /**
     * Calls the Database initialization method.
     */
    init(): Promise<void>;
    connect(configurationName: string): Promise<Connection>;
}
