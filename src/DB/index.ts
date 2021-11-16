import { Connection } from "typeorm/connection/Connection";
import Config from "../System/Config";
import Mongo from "./Mongo";
import TypeORM from "./TypeORM";

/**
 * Returns the default connection to TypeORM database.
 */
export function defaultConnection(): Connection {
  if (Config.string("db.engine", "mongoose") === "mongoose") {
    return null;
  }

  return TypeORM.connection;
}

/**
 * Initializes the database engine we will use in the application.
 */
export default function (): Promise<void> {
  switch (Config.string("db.engine", "mongoose")) {
    case "mongoose":
      return new Mongo().init();
    case "mongodb":
    case "mysql":
    case "mariadb":
    case "postgres":
      return new TypeORM().init();
  }
}
