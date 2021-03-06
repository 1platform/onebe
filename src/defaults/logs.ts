import Env from "../System/Env";
import IConfig from "../System/IConfig";
import LogLevel from "../System/LogLevel";

/**
 * The default configuration for the application logging.
 */
const defaultLogsConfig: IConfig = {
  /**
   * Should the logger be enabled or not?
   */
  enabled: Env.flag("LOG_ENABLED"),

  /**
   * The default level of logging throughout the application.
   */
  type: Env.string("LOGGER_TYPE", "console"),

  /**
   * The default level of logging throughout the application.
   */
  level: Env.string("LOG_LEVEL", LogLevel.INFO),

  /**
   * The default value indicating the name of the log file.
   */
  file: Env.string("LOG_FILE", "app.log"),

  /**
   * The default folder in which logs will be stored.
   */
  folder: Env.string("LOG_FOLDER", "./storage/logs"),
};

export default defaultLogsConfig;
