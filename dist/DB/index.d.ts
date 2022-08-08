import { DataSource } from "typeorm";
/**
 * Returns the default connection to TypeORM database.
 */
export declare function defaultConnection(): DataSource;
/**
 * Initializes the database engine we will use in the application.
 */
export default function (): Promise<void>;
