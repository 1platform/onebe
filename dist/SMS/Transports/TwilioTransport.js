"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = _interopRequireDefault(require("../../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TwilioTransport {
  constructor() {
    _defineProperty(this, "_twilio", void 0);

    _defineProperty(this, "_defaultPhone", _Config.default.string("sms.config.phone"));

    this._twilio = (0, _twilio.default)(_Config.default.string("sms.config.account"), _Config.default.string("sms.config.password"));
  }

  async send(to, text, from) {
    try {
      const response = await this._twilio.messages.create({
        body: text,
        from: from || this._defaultPhone,
        to
      });

      _Logger.default.debug(response.sid);

      _Logger.default.info("Message sent successfully!");
    } catch (err) {
      _Logger.default.error(err);

      _Logger.default.debug(err.stack);
    }
  }

}

exports.default = TwilioTransport;