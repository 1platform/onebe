"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default values for SMS config in Env
 */
const defaultSMSConfig = {
  enabled: _Env.default.flag("SMS_ENABLED"),
  provider: _Env.default.string("SMS_PROVIDER", ""),
  config: {
    phone: _Env.default.string("SMS_PHONE_NUMBER"),
    account: _Env.default.string("SMS_ACCOUNT"),
    password: _Env.default.string("SMS_PASSWORD")
  }
};
var _default = defaultSMSConfig;
exports.default = _default;