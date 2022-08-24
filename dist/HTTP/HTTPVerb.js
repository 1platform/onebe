"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A list with the supported HTTP Verbs/Methods that can be
 * used to expose endpoints from the application.
 *
 * @enum
 */
var HTTPVerb;

(function (HTTPVerb) {
  HTTPVerb["GET"] = "get";
  HTTPVerb["POST"] = "post";
  HTTPVerb["PUT"] = "put";
  HTTPVerb["PATCH"] = "patch";
  HTTPVerb["DELETE"] = "delete";
})(HTTPVerb || (HTTPVerb = {}));

var _default = HTTPVerb;
exports.default = _default;