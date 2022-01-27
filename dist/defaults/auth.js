"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for JsonWebToken
 */
const defaultAuthConfig = {
  jwt: {
    /**
     * The default value of the secret used in the encoding of the token.
     */
    secret: _Env.default.string("JWT_SECRET", "thisisasecret"),

    /**
     * The default value of the principal who issued the token.
     */
    issuer: _Env.default.string("JWT_ISSUER", "onebe.sprk.dev"),

    /**
     * The default value for the audience for which the token is intended.
     */
    audience: _Env.default.string("JWT_AUDIENCE", "onebe.sprk.dev"),

    /**
     * The default value for the expiration time of the generated token, after which it will no longer be accepted.
     */
    expireTime: _Env.default.string("JWT_EXPIRE_TIME", "1d"),

    /**
     * The default value of the expiration time in case the token is to be remembered.
     */
    rememberMeTime: _Env.default.string("JWT_REMEMBER_ME_TIME", "1y")
  },

  /**
   * The session configuration object.
   */
  session: {
    /**
     * Session secret.
     */
    secret: _Env.default.string("SESSION_SECRET", "s3creTDiscr3t")
  }
};
var _default = defaultAuthConfig;
exports.default = _default;