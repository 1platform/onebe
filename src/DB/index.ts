import Config from "../System/Config";
import Mongo from "./Mongo";

export default function (): Promise<void> {
  switch (Config.string("db.engine", "mongo")) {
    case "mongo":
      return new Mongo().init();
  }
}
