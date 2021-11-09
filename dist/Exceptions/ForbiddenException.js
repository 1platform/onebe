"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _HTTPError = _interopRequireDefault(require("./HTTPError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PageNotFoundException extends _HTTPError.default {
  constructor() {
    super("errors.default.forbidden", _HTTPStatus.default.FORBIDDEN);
  }

}

exports.default = PageNotFoundException;