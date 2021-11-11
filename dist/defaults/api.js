"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for Api
 */
const defaultAPIConfig = {
  /**
   * The base path value, a prefix for all the paths in the app.
   */
  path: _Env.default.string("API_PATH", "/api")
};
var _default = defaultAPIConfig;
exports.default = _default;