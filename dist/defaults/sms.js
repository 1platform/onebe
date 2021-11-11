"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for SMS services.
 */
const defaultSMSConfig = {
  /**
   * The default flag that indicates whether SMS services are enabled for the application.
   */
  enabled: _Env.default.flag("SMS_ENABLED"),

  /**
   * The default value for the SMS provider.
   */
  provider: _Env.default.string("SMS_PROVIDER", ""),

  /**
   * The default configuration used by the provider.
   */
  config: {
    /**
     * The default phone number that will be used to send messages from.
     */
    phone: _Env.default.string("SMS_PHONE_NUMBER"),

    /**
     * The default value of the account that will be used.
     */
    account: _Env.default.string("SMS_ACCOUNT"),

    /**
     * The default value of the password for the used account.
     */
    password: _Env.default.string("SMS_PASSWORD")
  }
};
var _default = defaultSMSConfig;
exports.default = _default;