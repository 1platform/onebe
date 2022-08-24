"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A list with the supported HTTP Status codes that can be used
 * in the application.
 *
 * Statuses starting with 2 (200, 201, 202, 204 etc.) are usually
 * sent when you want to show a successful response.
 *
 * Statuses starting with 4 (400, 401, 403 etc.) are usually sent
 * when you want to show that the response has failed, based on the
 * input received from the user.
 *
 * Statuses starting with 5 (500, 501, 503 etc.) are usually sent
 * when you or the server want to show that something failed.
 *
 *  @enum
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