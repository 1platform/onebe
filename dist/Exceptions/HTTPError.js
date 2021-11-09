"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HTTPError extends Error {
  constructor(message, status = _HTTPStatus.default.SERVER_ERROR, // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  parameters) {
    super(message);

    _defineProperty(this, "status", 500);

    _defineProperty(this, "parameters", null);

    this.status = status;
    this.parameters = parameters;
  }

}

exports.default = HTTPError;