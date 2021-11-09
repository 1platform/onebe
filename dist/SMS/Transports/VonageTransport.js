"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _serverSdk = _interopRequireDefault(require("@vonage/server-sdk"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = _interopRequireDefault(require("../../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class VonageTransport {
  constructor() {
    _defineProperty(this, "_vonage", void 0);

    _defineProperty(this, "_defaultPhone", _Config.default.string("sms.config.phone"));

    this._vonage = new _serverSdk.default({
      apiKey: _Config.default.string("sms.config.account"),
      apiSecret: _Config.default.string("sms.config.password")
    });
  }

  send(to, text, from) {
    return new Promise((resolve, reject) => {
      this._vonage.message.sendSms(from || this._defaultPhone, to, text, {}, (err, responseData) => {
        if (err) {
          _Logger.default.error(err);

          return;
        }

        if (responseData.messages[0]["status"] === "0") {
          _Logger.default.info("Message sent successfully!");
        } else {
          _Logger.default.error(`Message failed with error: ${responseData.messages[0]["error-text"]}`);
        }
      });
    });
  }

}

exports.default = VonageTransport;