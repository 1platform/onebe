"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = decode;
exports.extractToken = extractToken;
exports.shortLiveToken = shortLiveToken;
exports.sign = sign;
exports.verify = verify;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _passportJwt = require("passport-jwt");

var _auth_header = require("passport-jwt/lib/auth_header");

var _Config = _interopRequireDefault(require("../System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Signs in a user with the given payload.
 *
 * @param payload The payload to authenticate.
 * @param rememberMe Should the token be remembered for a longer period.
 */
function sign(payload, rememberMe = false) {
  return _jsonwebtoken.default.sign( // eslint-disable-next-line @typescript-eslint/ban-types
  payload, _Config.default.string("auth.jwt.secret"), {
    expiresIn: rememberMe ? _Config.default.string("auth.jwt.rememberMeTime", "1d") : _Config.default.string("auth.jwt.expireTime", "1d"),
    issuer: _Config.default.string("auth.jwt.issuer", "onebe.sprk.dev"),
    audience: _Config.default.string("auth.jwt.audience", "onebe.sprk.dev")
  });
}
/**
 * Signs in an application with the given payload.
 *
 * @param payload The payload to authenticate.
 */


function shortLiveToken(payload) {
  return _jsonwebtoken.default.sign( // eslint-disable-next-line @typescript-eslint/ban-types
  payload, _Config.default.string("auth.jwt.secret"), {
    expiresIn: "1m",
    issuer: _Config.default.string("auth.jwt.issuer", "onebe.sprk.dev"),
    audience: _Config.default.string("auth.jwt.audience", "onebe.sprk.dev")
  });
}
/**
 * Verifies if the given token is valid or not.
 *
 * @param token The token to be verified.
 */


function verify(token) {
  return token !== "" && !!_jsonwebtoken.default.verify(token, _Config.default.string("auth.jwt.secret"), {
    issuer: _Config.default.string("auth.jwt.issuer", "onebe.sprk.dev"),
    audience: _Config.default.string("auth.jwt.audience", "onebe.sprk.dev")
  });
}
/**
 * Decodes the given token.
 *
 * @param token The token to be token.
 */


function decode(token) {
  return _jsonwebtoken.default.decode(token);
}

function extractToken(req) {
  let authParams = (0, _auth_header.parse)(req.headers.authorization);

  if (authParams && authParams.scheme.toLowerCase() === "bearer") {
    return authParams.value;
  }

  authParams = _passportJwt.ExtractJwt.fromUrlQueryParameter("bearer")(req);
  return authParams || "";
}