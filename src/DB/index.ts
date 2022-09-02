import { DataSource } from "typeorm";
import { Config } from "../System";
import Mongo from "./Mongo";
import TypeORM from "./TypeORM";

/**
 * Function used to get the default connection object when using
 * a TypeORM database connection object.
 */
export function defaultConnection(): DataSource {
  const configurationObject = Config.object(`db.${ Config.string("db.configuration") }`);
  if (configurationObject.engine === "mongoose") {
    return null;
  }

  return TypeORM.connection;
}

/**
 * Function used to initialise the database engine your application is going
 * to use. There are 2 engine options available for usage:
 *  - mongoose
 *  - typeorm (mongodb, mysql, mariadb, postgres)
 *
 * If you do not specify any database engine or an invalid one, then no database
 * connection will be made.
 */
export default function (): Promise<void> {
  const configurationObject = Config.object(`db.${ Config.string("db.configuration") }`);
  if (!configurationObject) {
    return;
  }

  switch (configurationObject.engine) {
    case "mongoose":
      return new Mongo().init();
    case "mongodb":
    case "mysql":
    case "mariadb":
    case "postgres":
      return new TypeORM().init();
  }
}
