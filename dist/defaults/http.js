"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultHTTPConfig = {
  listen: _Env.default.string("HTTP_LISTEN", "127.0.0.1"),
  port: _Env.default.int("HTTP_PORT", 7200),
  url: _Env.default.string("HTTP_URL", "http://localhost:7200").replace(/(https?:\/\/)|(\/)+/g, "$1$2"),
  cookie: {
    domain: _Env.default.string("COOKIE_DOMAIN", "localhost"),
    secure: _Env.default.flag("COOKIE_SECURE")
  }
};
var _default = defaultHTTPConfig;
exports.default = _default;