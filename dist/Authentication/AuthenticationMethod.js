"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A list with the supported authentication methods that can be used in your application.
 */
var AuthenticationMethod;

(function (AuthenticationMethod) {
  AuthenticationMethod["BASIC"] = "BasicAuth";
  AuthenticationMethod["BEARER"] = "BearerAuth";
})(AuthenticationMethod || (AuthenticationMethod = {}));

var _default = AuthenticationMethod;
exports.default = _default;