"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringStripHtml = require("string-strip-html");

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = require("../../System/Logger");

var _HTTPError = _interopRequireDefault(require("../../Exceptions/HTTPError"));

var _HTTPStatus = _interopRequireDefault(require("../../HTTP/HTTPStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Base class that can be used to create a new Email Transport Service.
 *
 * You need to extend this class and attach a transporter service
 * that supports email sending.
 */
class BaseTransport {
  /**
   * The message transporter that we use for sending an email.
   */

  /**
   * Constructor that initialises the transporter service.
   */
  constructor(transporter) {
    _defineProperty(this, "_transporter", void 0);

    this._transporter = transporter ?? null;
  }
  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */


  async send(options) {
    if (!this._transporter) {
      throw new _HTTPError.default("onebe.errors.email.no-transport", _HTTPStatus.default.SERVER_ERROR);
    }

    const emailOptions = {
      from: options.from || _Config.default.string("email.from"),
      to: options.to && Array.isArray(options.to) ? options.to.join(", ") : options.to,
      cc: options.cc && Array.isArray(options.cc) ? options.cc.join(", ") : options.cc,
      bcc: options.bcc && Array.isArray(options.bcc) ? options.bcc.join(", ") : options.bcc,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text || (0, _stringStripHtml.stripHtml)(options.html).result || "",
      html: options.html
    };
    (0, _Logger.getDefaultLogger)().debug(`Email Parameters: ${JSON.stringify(emailOptions)}`);
    const info = await this._transporter.sendMail(emailOptions);
    (0, _Logger.getDefaultLogger)().info(`Email Message sent: ${info.messageId}`);
    return info;
  }

}

exports.default = BaseTransport;