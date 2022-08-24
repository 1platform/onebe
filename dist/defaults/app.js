"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

var _version = require("../version");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Application configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * application.
 */
const defaultAppConfig = {
  /**
   * Flag used to indicate whether the application will run in debug mode.
   *
   * @default false
   */
  debug: _Env.default.flag("APP_DEBUG"),

  /**
   * The name of the application you are developing.
   *
   * @default "One Backend by Spark"
   */
  appName: _Env.default.string("APP_NAME", "One Backend by Spark"),

  /**
   * The version of the application you are developing.
   *
   * @default "1.0.0"
   */
  appVersion: _Env.default.string("APP_VERSION", (0, _version.getVersion)()),

  /**
   * A short text that describes the application you are developing.
   *
   * @default ""
   */
  appDescription: _Env.default.string("APP_DESCRIPTION", "")
};
var _default = defaultAppConfig;
exports.default = _default;