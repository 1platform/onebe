"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A list with the supported logging levels.
 *
 * @enum
 */
var LogLevel;

(function (LogLevel) {
  LogLevel["ERROR"] = "error";
  LogLevel["WARN"] = "warn";
  LogLevel["INFO"] = "info";
  LogLevel["HTTP"] = "http";
  LogLevel["VERBOSE"] = "verbose";
  LogLevel["DEBUG"] = "debug";
  LogLevel["SILLY"] = "silly";
})(LogLevel || (LogLevel = {}));

var _default = LogLevel;
exports.default = _default;