"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for the Email services.
 */
const defaultEmailConfig = {
  /**
   * The default value indicating whether the services are enabled or not.
   */
  enabled: _Env.default.flag("EMAIL_ENABLED"),

  /**
   * The default value for email transport.
   */
  transport: _Env.default.string("EMAIL_TRANSPORT", "test"),

  /**
   * The default sender address.
   */
  from: _Env.default.string("EMAIL_FROM", "onebe@sprk.dev"),

  /**
   * The default configuration for the email service.
   */
  config: {
    /**
     * The default value of the email address which will be used to send emails.
     */
    address: _Env.default.string("EMAIL_ADDRESS", "onebe@sprk.dev"),

    /**
     * The default value for the password associated with the email address used.
     */
    password: _Env.default.string("EMAIL_PASSWORD", ""),

    /**
     * The default value for the used server.
     */
    server: _Env.default.string("EMAIL_SERVER", "localhost"),

    /**
     * The default value for the used port.
     */
    port: _Env.default.string("EMAIL_PORT", "25"),

    /**
     * The default flag that indicates whether the email services are secure.
     */
    secure: _Env.default.flag("EMAIL_SECURE")
  }
};
var _default = defaultEmailConfig;
exports.default = _default;