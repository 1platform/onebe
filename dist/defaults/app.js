"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

var _version = _interopRequireDefault(require("../version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for App
 */
const defaultAppConfig = {
  /**
   * The default flag that indicates whether the application will run in debug mode.
   */
  debug: _Env.default.flag("APP_DEBUG"),

  /**
   * The default application name.
   */
  appName: _Env.default.string("APP_NAME", "onebe by Spark"),

  /**
   * The default version of the application. Usually 1.0.0 for a new application.
   */
  appVersion: _Env.default.string("APP_VERSION", (0, _version.default)()),

  /**
   * The default description of the application. A short text meant to give insight about the app.
   */
  appDescription: _Env.default.string("APP_DESCRIPTION", "")
};
var _default = defaultAppConfig;
exports.default = _default;