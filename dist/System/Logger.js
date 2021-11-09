"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Logger = exports.FileLogger = exports.ConsoleLogger = void 0;
exports.setDefaultLogger = setDefaultLogger;

var _path = _interopRequireDefault(require("path"));

var _winston = _interopRequireDefault(require("winston"));

var _Config = _interopRequireDefault(require("./Config"));

var _LogLevel = _interopRequireDefault(require("./LogLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Logger {
  constructor(logLevel, transport) {
    _defineProperty(this, "_log", void 0);

    this._log = _winston.default.createLogger({
      level: logLevel.toString() || _LogLevel.default.INFO,
      format: _winston.default.format.simple(),
      transports: [transport]
    });
  }

  get log() {
    return this._log;
  }

  info(message, ...meta) {
    return this.log.info(message, ...meta);
  }

  error(message, ...meta) {
    return this.log.error(message, ...meta);
  }

  warn(message, ...meta) {
    return this.log.warn(message, ...meta);
  }

  debug(message, ...meta) {
    return this.log.debug(message, ...meta);
  }

  verbose(message, ...meta) {
    return this.log.verbose(message, ...meta);
  }

  silly(message, ...meta) {
    return this.log.silly(message, ...meta);
  }

}

exports.Logger = Logger;

class ConsoleLogger extends Logger {
  constructor(logLevel) {
    super(logLevel, new _winston.default.transports.Console());
  }

}

exports.ConsoleLogger = ConsoleLogger;

class FileLogger extends Logger {
  constructor(logLevel, options) {
    super(logLevel, new _winston.default.transports.File(_objectSpread({
      filename: _Config.default.string("logs.filename", "app.log"),
      dirname: _Config.default.string("logs.folder", _path.default.join(process.cwd(), "storage", "logs"))
    }, options || {})));
  }

}

exports.FileLogger = FileLogger;
let DefaultLogger = new ConsoleLogger(_LogLevel.default[_Config.default.string("logs.level", _LogLevel.default.INFO).toUpperCase()]);

function setDefaultLogger(newLogger) {
  DefaultLogger = newLogger;
}

var _default = DefaultLogger;
exports.default = _default;