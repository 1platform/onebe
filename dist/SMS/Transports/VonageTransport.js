"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _serverSdk = _interopRequireDefault(require("@vonage/server-sdk"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * SMS Transport using the Vonage/Nexmo engine.
 */
class VonageTransport {
  /**
   * The Vonage transport handler.
   */

  /**
   * The default phone configuration.
   */

  /**
   * VonageTransport constructor
   */
  constructor() {
    _defineProperty(this, "_vonage", void 0);

    _defineProperty(this, "_defaultPhone", _Config.default.string("sms.config.phone"));

    this._vonage = new _serverSdk.default({
      apiKey: _Config.default.string("sms.config.account"),
      apiSecret: _Config.default.string("sms.config.password")
    });
  }
  /**
   * Method used to send an SMS.
   *
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   */


  send(to, text, from) {
    return new Promise((resolve, reject) => {
      this._vonage.message.sendSms(from || this._defaultPhone, to, text, {}, (err, responseData) => {
        if (err) {
          (0, _Logger.getDefaultLogger)().error(err);
          return;
        }

        if (responseData.messages[0]["status"] === "0") {
          (0, _Logger.getDefaultLogger)().info("Message sent successfully!");
        } else {
          (0, _Logger.getDefaultLogger)().error(`Message failed with error: ${responseData.messages[0]["error-text"]}`);
        }
      });
    });
  }

}

exports.default = VonageTransport;