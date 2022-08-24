"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Documentation system configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * documentation system.
 */
const defaultDocsConfig = {
  /**
   * Flag used to let the Documentation SDK know if you want to expose the generated
   * documentation metadata or not.
   *
   * @default false
   */
  expose: _Env.default.flag("EXPOSE_DOCS"),

  /**
   * Defines the base path for the documentation controller. Since we want to expose
   * the documentation metadata for the routes and entities, we want a path from
   * where the documentation should be served.
   *
   * @default "/docs"
   */
  path: _Env.default.string("DOCUMENTATION_BASE_PATH", "/docs")
};
var _default = defaultDocsConfig;
exports.default = _default;