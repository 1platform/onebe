"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

var _EmailTransport = _interopRequireDefault(require("../Email/EmailTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Email configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * Email Handling Service.
 */
const defaultEmailConfig = {
  /**
   * Flag used to enable or disable the email handling service.
   *
   * @default false
   */
  enabled: _Env.default.flag("EMAIL_ENABLED"),

  /**
   * The desired email handling transport to be used in the application.
   *
   * @see EmailTransport
   * @default EmailTransport.TEST
   */
  transport: _Env.default.string("EMAIL_TRANSPORT", _EmailTransport.default.TEST),

  /**
   * The email address used as the FROM address in the emails sent
   * through the application.
   *
   * @default "onebe@localhost"
   */
  from: _Env.default.string("EMAIL_FROM", "onebe@localhost"),

  /**
   * Configuration parameters used for connecting to the email sending service (mailgun, sendgrid, smtp).
   */
  config: {
    /**
     * The account or email address used to connect to the email sending server.
     *
     * @default "onebe@localhost"
     */
    address: _Env.default.string("EMAIL_ADDRESS", "onebe@localhost"),

    /**
     * The password for the account used to send an email.
     *
     * @default ""
     */
    password: _Env.default.string("EMAIL_PASSWORD", ""),

    /**
     * The URL or IP of the email sending server.
     *
     * @default "localhost"
     */
    server: _Env.default.string("EMAIL_SERVER", "localhost"),

    /**
     * The port used to connect to the email server.
     *
     * @default "25"
     */
    port: _Env.default.string("EMAIL_PORT", "25"),

    /**
     * A flag used to define if the server is using a secure connection or not.
     *
     * @default false
     */
    secure: _Env.default.flag("EMAIL_SECURE")
  }
};
var _default = defaultEmailConfig;
exports.default = _default;