"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A list with supported SMS Service providers.
 */
var SMSProvider;

(function (SMSProvider) {
  SMSProvider["VONAGE"] = "vonage";
  SMSProvider["TWILIO"] = "twilio";
})(SMSProvider || (SMSProvider = {}));

var _default = SMSProvider;
exports.default = _default;