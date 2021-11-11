"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for the Documentation.
 */
const defaultDocsConfig = {
  /**
   * The default flag for documentation exposure to the user.
   */
  expose: _Env.default.flag("EXPOSE_DOCS")
};
var _default = defaultDocsConfig;
exports.default = _default;