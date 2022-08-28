"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

var _LogLevel = _interopRequireDefault(require("../System/LogLevel"));

var _LoggerType = _interopRequireDefault(require("../System/LoggerType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The logging configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * logging of the application.
 */
const defaultLogsConfig = {
  /**
   * Flag used to enable or disable the application logging functionality.
   * We recommend setting this flag to true since debugging and seeing
   * what happens, when an error occurs, is better than not seeing anything.
   *
   * @default false
   */
  enabled: _Env.default.flag("LOGS_ENABLED"),

  /**
   * The type of logger used in the application. At the moment the framework support
   * only 4 types: console, file, json, json_file. You can find these types
   * in the `LoggerType` Enum.
   *
   * @see LoggerType
   * @default LoggerType.CONSOLE
   */
  type: _Env.default.string("LOGGER_TYPE", _LoggerType.default.CONSOLE),

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
  level: _Env.default.string("LOG_LEVEL", _LogLevel.default.INFO),

  /**
   * The file used to store the log messages. Fill a value to this
   * configuration parameter only if you want to store the logs in a file.
   *
   * @default "app.log"
   */
  file: _Env.default.string("LOG_FILE", "app.log"),

  /**
   * The location where you want to store the log files when using the
   * file logger. Set this to a value outside of your application.
   *
   * @default "./storage/logs"
   */
  folder: _Env.default.string("LOG_FOLDER", "./storage/logs")
};
var _default = defaultLogsConfig;
exports.default = _default;