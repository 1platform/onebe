"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default values for Email config in Env
 */
const defaultEmailConfig = {
  enabled: _Env.default.flag("EMAIL_ENABLED"),
  transport: _Env.default.string("EMAIL_TRANSPORT", "test"),
  from: _Env.default.string("EMAIL_FROM", "onebe@sprk.dev"),
  config: {
    address: _Env.default.string("EMAIL_ADDRESS", "onebe@sprk.dev"),
    password: _Env.default.string("EMAIL_PASSWORD", ""),
    server: _Env.default.string("EMAIL_SERVER", "localhost"),
    port: _Env.default.string("EMAIL_PORT", "25"),
    secure: _Env.default.flag("EMAIL_SECURE")
  }
};
var _default = defaultEmailConfig;
exports.default = _default;