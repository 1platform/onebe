"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var SMSProvider;

(function (SMSProvider) {
  SMSProvider["VONAGE"] = "vonage";
  SMSProvider["TWILIO"] = "twilio";
})(SMSProvider || (SMSProvider = {}));

var _default = SMSProvider;
exports.default = _default;