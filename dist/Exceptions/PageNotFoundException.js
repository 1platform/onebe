"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _HTTPError = _interopRequireDefault(require("./HTTPError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exception thrown when an endpoint is not found or there is no data for
 * the given parameters.
 */
class PageNotFoundException extends _HTTPError.default {
  /**
   * Constructor of the PageNotFoundException.
   */
  constructor() {
    super("onebe.errors.page-not-found", _HTTPStatus.default.NOT_FOUND);
  }

}

exports.default = PageNotFoundException;