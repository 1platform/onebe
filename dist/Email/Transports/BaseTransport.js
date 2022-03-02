"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringStripHtml = _interopRequireDefault(require("string-strip-html"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class representing the Base Transport.
 */
class BaseTransport {
  constructor() {
    _defineProperty(this, "_transporter", void 0);
  }

  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */
  async send(options) {
    const info = await this._transporter.sendMail({
      from: options.from || _Config.default.string("email.from"),
      to: options.to && Array.isArray(options.to) ? options.to.join(", ") : options.to,
      cc: options.cc && Array.isArray(options.cc) ? options.cc.join(", ") : options.cc,
      bcc: options.bcc && Array.isArray(options.bcc) ? options.bcc.join(", ") : options.bcc,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text || _stringStripHtml.default.stripHtml(options.html).result || "",
      html: options.html
    });
    (0, _Logger.getDefaultLogger)().info(`Email Message sent: ${info.messageId}`);
    return info;
  }

}

exports.default = BaseTransport;