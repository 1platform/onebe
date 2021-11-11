"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * HTTP Status Codes enums
 *
 * @enum
 */
var HTTPStatus;

(function (HTTPStatus) {
  HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
  HTTPStatus[HTTPStatus["CREATED"] = 201] = "CREATED";
  HTTPStatus[HTTPStatus["ACCEPTED"] = 202] = "ACCEPTED";
  HTTPStatus[HTTPStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
  HTTPStatus[HTTPStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HTTPStatus[HTTPStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HTTPStatus[HTTPStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
  HTTPStatus[HTTPStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
  HTTPStatus[HTTPStatus["GONE"] = 410] = "GONE";
  HTTPStatus[HTTPStatus["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(HTTPStatus || (HTTPStatus = {}));

var _default = HTTPStatus;
exports.default = _default;