"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoLogger = exports.Logger = exports.JSONLogger = exports.FileLogger = exports.ConsoleLogger = void 0;
exports.getDefaultLogger = getDefaultLogger;
exports.setDefaultLogger = setDefaultLogger;

var _path = _interopRequireDefault(require("path"));

var _winston = _interopRequireDefault(require("winston"));

var _winstonTransport = _interopRequireDefault(require("winston-transport"));

var _Config = _interopRequireDefault(require("./Config"));

var _LogLevel = _interopRequireDefault(require("./LogLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The base logger class to be used in the application.
 *
 * This class is the base of the available loggers in the application. In order
 * to use this class you need a transport and the level of information you
 * want to log.
 */
class Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param transport The transport used for the winston logger.
   */
  constructor(logLevel, transport) {
    _defineProperty(this, "_log", void 0);

    this._log = _winston.default.createLogger({
      level: logLevel.toString() || _LogLevel.default.INFO,
      format: _winston.default.format.simple(),
      transports: [transport]
    });
  }
  /**
   * The logger object the application will use for logging.
   */


  /**
   * Getter for the logger object.
   */
  get log() {
    return this._log;
  }
  /**
   * Method to log an information message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */


  info(message, ...meta) {
    return this.log.info(message, ...meta);
  }
  /**
   * Method to log an error message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */


  error(message, ...meta) {
    return this.log.error(message, ...meta);
  }
  /**
   * Method to log a warning message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */


  warn(message, ...meta) {
    return this.log.warn(message, ...meta);
  }
  /**
   * Method to log a debug message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */


  debug(message, ...meta) {
    return this.log.debug(message, ...meta);
  }
  /**
   * Method to log a verbose message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */


  verbose(message, ...meta) {
    return this.log.verbose(message, ...meta);
  }
  /**
   * Method to log a silly message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */


  silly(message, ...meta) {
    return this.log.silly(message, ...meta);
  }

}
/**
 * The console logger that can be used in your application.
 */


exports.Logger = Logger;

class ConsoleLogger extends Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param format The message formatter.
   */
  constructor(logLevel, format) {
    super(logLevel, new _winston.default.transports.Console({
      format
    }));
  }

}
/**
 * The file logger that can be used in your application.
 */


exports.ConsoleLogger = ConsoleLogger;

class FileLogger extends Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param options The options passed to the file logger transport.
   */
  constructor(logLevel, options) {
    super(logLevel, new _winston.default.transports.File(_objectSpread({
      filename: _Config.default.string("logs.filename", "app.log"),
      dirname: _Config.default.string("logs.folder", _path.default.join(process.cwd(), "storage", "logs"))
    }, options || {})));
  }

}
/**
 * No Logger transport for the NoLogger logger class.
 */


exports.FileLogger = FileLogger;

class NoLoggerTransport extends _winstonTransport.default {
  /**
   * NoLoggerTransport constructor
   */
  constructor() {
    super();
  }
  /**
   * Log the message.
   */


  log() {// NOP
  }

}
/**
 * The NoLogger logger that can be used in your application.
 *
 * Use this logger if you want to disable the logging possibility.
 */


class NoLogger extends Logger {
  /**
   * The constructor of the logger class.
   */
  constructor() {
    super(_LogLevel.default.VERBOSE, new NoLoggerTransport());
  }

}
/**
 * Logger that can be used to log information in JSON objects. This
 * logger can be used when logging information into AWS, Elastic Search.
 */


exports.NoLogger = NoLogger;

class JSONLogger extends Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param isFile If the logger should log the messages in a file.
   * @param options The options passed to the file logger transport.
   */
  constructor(logLevel, isFile = false, options) {
    super(logLevel, new NoLoggerTransport());
    let transport;

    if (options) {
      transport = new _winston.default.transports.File(_objectSpread({
        filename: _Config.default.string("logs.filename", "app.log"),
        dirname: _Config.default.string("logs.folder", _path.default.join(process.cwd(), "storage", "logs"))
      }, options || {}));
    } else {
      transport = new _winston.default.transports.Console({
        format: _winston.default.format.json()
      });
    }

    this._log = _winston.default.createLogger({
      level: logLevel.toString() || _LogLevel.default.INFO,
      format: _winston.default.format.json(),
      transports: [transport]
    });
  }

}
/**
 * The default logger of the application.
 */


exports.JSONLogger = JSONLogger;
let DefaultLogger = new ConsoleLogger(_LogLevel.default[_Config.default.string("logs.level", _LogLevel.default.INFO).toUpperCase()]);
/**
 * Function used to change the default logger of the application.
 *
 * @param newLogger The new logger instance.
 */

function setDefaultLogger(newLogger) {
  DefaultLogger = newLogger;
}
/**
 * Function used to get the default logger of the application.
 */


function getDefaultLogger() {
  return DefaultLogger;
}