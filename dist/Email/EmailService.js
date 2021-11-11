"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceBase = _interopRequireDefault(require("../Services/ServiceBase"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _SMTPTransport = _interopRequireDefault(require("./Transports/SMTPTransport"));

var _TestTransport = _interopRequireDefault(require("./Transports/TestTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class exposing the Email sending functionality.
 */
class EmailService extends _ServiceBase.default {
  /**
   * Is the service enabled?
   */

  /**
   * The used email transport.
   */

  /**
   * Email Service constructor.
   */
  constructor() {
    super();

    _defineProperty(this, "_enableService", void 0);

    _defineProperty(this, "_transport", void 0);

    this._enableService = _Config.default.boolean("email.enabled");

    if (this._enableService) {
      switch (_Config.default.string("email.transport")) {
        case "smtp":
          this._transport = new _SMTPTransport.default();
          break;

        case "test":
          this._transport = new _TestTransport.default();
          break;
      }
    }
  }
  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */


  send(options) {
    if (this._enableService && this._transport) {
      return this._transport.send(options);
    }
  }

}

exports.default = EmailService;