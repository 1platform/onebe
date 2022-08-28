import { LoggingOptions } from "../../DB/TypeORM";
import { DataSource } from "typeorm";
/**
 * Database connection initialization utility to be used in the
 * CLI commands.
 *
 * @param [configuration] The name of the configuration object to be used.
 * @param [logging] Database logging configuration.
 */
export default function initConnection(configuration?: string, logging?: boolean | LoggingOptions[]): Promise<DataSource | null>;
