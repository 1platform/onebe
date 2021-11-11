"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * The supported HTTP Verbs.
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