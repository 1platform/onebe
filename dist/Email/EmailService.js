"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceBase = _interopRequireDefault(require("../Services/ServiceBase"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _SMTPTransport = _interopRequireDefault(require("./Transports/SMTPTransport"));

var _TestTransport = _interopRequireDefault(require("./Transports/TestTransport"));

var _EmailTransport = _interopRequireDefault(require("./EmailTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Service used to handle Email communications from the application.
 */
class EmailService extends _ServiceBase.default {
  /**
   * Flag used to enable or disable the Email Service.
   */

  /**
   * The transport used for handling the emailing part.
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
        case _EmailTransport.default.SMTP:
          this._transport = new _SMTPTransport.default();
          break;

        case _EmailTransport.default.TEST:
          this._transport = new _TestTransport.default();
          break;
      }
    }
  }
  /**
   * Method used to send emails.
   *
   * @param options The parameters you have to use when sending an email.
   */


  send(options) {
    if (this._enableService && this._transport) {
      return this._transport.send(options);
    }
  }

}

exports.default = EmailService;