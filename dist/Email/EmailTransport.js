"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A list with the email transports that can be used in the application.
 *
 * @enum
 */
var EmailTransport;

(function (EmailTransport) {
  EmailTransport["SMTP"] = "smtp";
  EmailTransport["TEST"] = "test";
})(EmailTransport || (EmailTransport = {}));

var _default = EmailTransport;
exports.default = _default;