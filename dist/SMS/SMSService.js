"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceBase = _interopRequireDefault(require("../Services/ServiceBase"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _TwilioTransport = _interopRequireDefault(require("./Transports/TwilioTransport"));

var _VonageTransport = _interopRequireDefault(require("./Transports/VonageTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class exposing the SMS sending functionality.
 */
class SMSService extends _ServiceBase.default {
  /**
   * If the service is enabled or not.
   */

  /**
   * The SMS Transport used by the application.
   */

  /**
   * SMSService Constructor
   */
  constructor() {
    super();

    _defineProperty(this, "_enableService", void 0);

    _defineProperty(this, "_transport", void 0);

    this._enableService = _Config.default.boolean("sms.enabled");

    if (this._enableService) {
      switch (_Config.default.string("sms.provider")) {
        case "vonage":
          this._transport = new _VonageTransport.default();
          break;

        case "twilio":
          this._transport = new _TwilioTransport.default();
          break;
      }
    }
  }
  /**
   * Method used to send SMS messages
   *
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   */


  send(to, text, from) {
    if (this._enableService && this._transport) {
      return this._transport.send(to, text, from);
    }
  }

}

exports.default = SMSService;