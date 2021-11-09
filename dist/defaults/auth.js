"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultAuthConfig = {
  jwt: {
    secret: _Env.default.string("JWT_SECRET", "thisisasecret"),
    issuer: _Env.default.string("JWT_ISSUER", "onebe.sprk.dev"),
    audience: _Env.default.string("JWT_AUDIENCE", "onebe.sprk.dev"),
    expireTime: _Env.default.string("JWT_EXPIRE_TIME", "1d"),
    rememberMeTime: _Env.default.string("JWT_REMEMBER_ME_TIME", "1y")
  }
};
var _default = defaultAuthConfig;
exports.default = _default;