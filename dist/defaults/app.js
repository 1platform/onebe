"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

var _version = _interopRequireDefault(require("../version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultAppConfig = {
  debug: _Env.default.flag("APP_DEBUG"),
  appName: _Env.default.string("APP_NAME", "onebe by Spark"),
  appVersion: _Env.default.string("APP_VERSION", (0, _version.default)()),
  appDescription: _Env.default.string("APP_DESCRIPTION", "")
};
var _default = defaultAppConfig;
exports.default = _default;