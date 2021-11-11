"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _HTTPError = _interopRequireDefault(require("./HTTPError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exception thrown when an endpoint has restricted access.
 */
class ForbiddenException extends _HTTPError.default {
  /**
   * Constructor of the ForbiddenException.
   */
  constructor() {
    super("errors.default.forbidden", _HTTPStatus.default.FORBIDDEN);
  }

}

exports.default = ForbiddenException;