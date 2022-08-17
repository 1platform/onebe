"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The API routing configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * REST API endpoints.
 */
const defaultAPIConfig = {
  /**
   * The base path used to expose the REST API endpoints.
   *
   * @default /api
   */
  path: _Env.default.string("API_PATH", "/api")
};
var _default = defaultAPIConfig;
exports.default = _default;