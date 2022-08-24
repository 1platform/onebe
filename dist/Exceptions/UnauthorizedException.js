"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _HTTPError = _interopRequireDefault(require("./HTTPError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exception thrown when a user isn't authorized to perform the action.
 */
class UnauthorizedException extends _HTTPError.default {
  /**
   * Constructor of the UnauthorizedException.
   */
  constructor() {
    super("onebe.errors.unauthorized", _HTTPStatus.default.UNAUTHORIZED);
  }

}

exports.default = UnauthorizedException;