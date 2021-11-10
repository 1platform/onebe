import Env from "../System/Env";
import IConfig from "../System/IConfig";
import LogLevel from "../System/LogLevel";

/**
 * Default values for Logs config in Env
 */

const defaultLogsConfig: IConfig = {
  level: Env.string("LOG_LEVEL", LogLevel.INFO),
  file: Env.string("LOG_FILE", "app.log"),
  folder: Env.string("LOG_FOLDER", "./storage/logs"),
};

export default defaultLogsConfig;
