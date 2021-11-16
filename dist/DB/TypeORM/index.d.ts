import { Connection } from "typeorm/connection/Connection";
/**
 * Class representing a TypeORM handler
 */
export default class TypeORM {
    protected static _connection: Connection;
    static get connection(): Connection;
    /**
     * Calls the respective init method
     */
    init(): Promise<void>;
    connect(configurationName: string): Promise<Connection>;
}
