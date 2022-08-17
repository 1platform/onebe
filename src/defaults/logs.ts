import Env from "../System/Env";
import IConfig from "../System/IConfig";
import LogLevel from "../System/LogLevel";
import LoggerType from "../System/LoggerType";

/**
 * The logging configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * logging of the application.
 */
const defaultLogsConfig: IConfig = {
  /**
   * Flag used to enable or disable the application logging functionality.
   * We recommend setting this flag to true since debugging and seeing
   * what happens, when an error occurs, is better than not seeing anything.
   *
   * @default false
   */
  enabled: Env.flag("LOG_ENABLED"),

  /**
   * The type of logger used in the application. At the moment the framework support
   * only 4 types: console, file, json, json_file. You can find these types
   * in the `LoggerType` Enum.
   *
   * @see LoggerType
   * @default LoggerType.CONSOLE
   */
  type: Env.string("LOGGER_TYPE", LoggerType.CONSOLE),

  /**
   * The level of detail you want to see in the logs of your application.
   * The levels supported by the framework are: `error`, `warn`, `info`, `http`,
   * `verbose`, `debug`, `silly`.
   * The `silly` level logs everything while `error` only the errors
   * that appear in the application.
   *
   * @see LogLevel
   * @default LogLevel.INFO
   */
  level: Env.string("LOG_LEVEL", LogLevel.INFO),

  /**
   * The file used to store the log messages. Fill a value to this
   * configuration parameter only if you want to store the logs in a file.
   *
   * @default "app.log"
   */
  file: Env.string("LOG_FILE", "app.log"),

  /**
   * The location where you want to store the log files when using the
   * file logger. Set this to a value outside of your application.
   *
   * @default "./storage/logs"
   */
  folder: Env.string("LOG_FOLDER", "./storage/logs"),
};

export default defaultLogsConfig;
