"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default value for API_PAth in Env
 */
const defaultAPIConfig = {
  path: _Env.default.string("API_PATH", "/api")
};
var _default = defaultAPIConfig;
exports.default = _default;