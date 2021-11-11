"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

var _LogLevel = _interopRequireDefault(require("../System/LogLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The default configuration for the application logging.
 */
const defaultLogsConfig = {
  /**
   * The default level of logging throughout the application.
   */
  level: _Env.default.string("LOG_LEVEL", _LogLevel.default.INFO),

  /**
   * The default value indicating the name of the log file.
   */
  file: _Env.default.string("LOG_FILE", "app.log"),

  /**
   * The default folder in which logs will be stored.
   */
  folder: _Env.default.string("LOG_FOLDER", "./storage/logs")
};
var _default = defaultLogsConfig;
exports.default = _default;