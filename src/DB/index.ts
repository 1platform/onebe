import Config from "../System/Config";
import Mongo from "./Mongo";

/**
 * Initializes the database engine we will use in the application.
 */
export default function (): Promise<void> {
  switch (Config.string("db.engine", "mongo")) {
    case "mongo":
      return new Mongo().init();
  }
}
