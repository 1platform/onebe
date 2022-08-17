import { DataSource } from "typeorm";
/**
 * Function used to get the default connection object when using
 * a TypeORM database connection object.
 */
export declare function defaultConnection(): DataSource;
/**
 * Function used to initialise the database engine your application is going
 * to use. There are 2 engine options available for usage:
 *  - mongoose
 *  - typeorm (mongodb, mysql, mariadb, postgres)
 *
 * If you do not specify any database engine or an invalid one, then no database
 * connection will be made.
 */
export default function (): Promise<void>;
