"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class representing the Twilio Transport handler
 */
class TwilioTransport {
  /**
   * The Twilio service
   */

  /**
   * THe default phone config
   */

  /**
   * TwilioTransport constructor
   */
  constructor() {
    _defineProperty(this, "_twilio", void 0);

    _defineProperty(this, "_defaultPhone", _Config.default.string("sms.config.phone"));

    this._twilio = (0, _twilio.default)(_Config.default.string("sms.config.account"), _Config.default.string("sms.config.password"));
  }
  /**
   * Method used to send an SMS.
   *
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   */


  async send(to, text, from) {
    try {
      const response = await this._twilio.messages.create({
        body: text,
        from: from || this._defaultPhone,
        to
      });
      (0, _Logger.getDefaultLogger)().debug(response.sid);
      (0, _Logger.getDefaultLogger)().info("Message sent successfully!");
    } catch (err) {
      (0, _Logger.getDefaultLogger)().error(err);
      (0, _Logger.getDefaultLogger)().debug(err.stack);
    }
  }

}

exports.default = TwilioTransport;