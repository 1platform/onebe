"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var AuthenticationMethod;

(function (AuthenticationMethod) {
  AuthenticationMethod["BASIC"] = "BasicAuth";
  AuthenticationMethod["BEARER"] = "BearerAuth";
})(AuthenticationMethod || (AuthenticationMethod = {}));

var _default = AuthenticationMethod;
exports.default = _default;