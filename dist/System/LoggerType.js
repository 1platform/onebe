"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Logger type enumeration
 *
 * @enum
 */
var LoggerType;

(function (LoggerType) {
  LoggerType["CONSOLE"] = "console";
  LoggerType["FILE"] = "file";
  LoggerType["JSON"] = "json";
  LoggerType["JSON_FILE"] = "json_file";
})(LoggerType || (LoggerType = {}));

var _default = LoggerType;
exports.default = _default;