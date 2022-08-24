"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A list with supported loggers from the application.
 *
 * @enum
 */
var LoggerType;

(function (LoggerType) {
  LoggerType["CONSOLE"] = "console";
  LoggerType["FILE"] = "file";
  LoggerType["JSON"] = "json";
  LoggerType["JSON_FILE"] = "json_file";
  LoggerType["NO_LOGGER"] = "no_logger";
})(LoggerType || (LoggerType = {}));

var _default = LoggerType;
exports.default = _default;