import { Connection } from "typeorm/connection/Connection";
/**
 * Returns the default connection to TypeORM database.
 */
export declare function defaultConnection(): Connection;
/**
 * Initializes the database engine we will use in the application.
 */
export default function (): Promise<void>;
