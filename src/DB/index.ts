import Config from "../System/Config";
import Mongo from "./Mongo";


/**
 * Returns initialized Mongo object
 * */
export default function (): Promise<void> {
  switch (Config.string("db.engine", "mongo")) {
    case "mongo":
      return new Mongo().init();
  }
}
