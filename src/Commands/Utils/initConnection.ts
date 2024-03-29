import { DataSource } from "typeorm";
import { LoggerOptions } from "typeorm/logger/LoggerOptions";

import TypeORM, { CustomLogger } from "@/DB/TypeORM";
import Config from "@/System/Config";
import { getDefaultLogger } from "@/System/Logger";

/**
 * Database connection initialization utility to be used in the
 * CLI commands.
 *
 * @param [configuration] The name of the configuration object to be used.
 * @param [logging] Database logging configuration.
 */
export default async function initConnection(configuration?: string, logging?: boolean | LoggerOptions): Promise<DataSource | null> {
  let configurationObject = Config.object(`db.${ Config.string("db.configuration") }`);
  if (configuration) {
    configurationObject = Config.object(`db.${ configuration }`);
  }

  if (!configurationObject || configurationObject.engine === "mongoose") {
    return null;
  }

  await new TypeORM().init(configuration);
  if (!TypeORM.connection || !TypeORM.connection.isInitialized) {
    getDefaultLogger().error("Database connection not initialized!");
    return null;
  }
  TypeORM.connection.setOptions({
    subscribers: [],
    synchronize: false,
    migrationsRun: false,
    dropSchema: false,
    logging: logging ?? false,
    logger: new CustomLogger(logging ?? false),
  });
  return TypeORM.connection;
}
