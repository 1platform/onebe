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
 * Creates a signed JWT Token that can be sent to the user and used
 * for the Bearer authentication method.
 *
 * @param payload The payload we want to sign.
 * @param rememberMe Should the token be valid for a longer period.
 */
function sign(payload, rememberMe = false) {
  return _jsonwebtoken.default.sign(payload, _Config.default.string("auth.jwt.secret"), {
    expiresIn: rememberMe ? _Config.default.string("auth.jwt.rememberMeTime", "1d") : _Config.default.string("auth.jwt.expireTime", "1d"),
    issuer: _Config.default.string("auth.jwt.issuer", "onebe.sprk.dev"),
    audience: _Config.default.string("auth.jwt.audience", "onebe.sprk.dev")
  });
}
/**
 * Creates a short timed signed JWT Token that can be sent to the user and used
 * for the Bearer authentication method.
 *
 * @param payload The payload we want to sign.
 */


function shortLiveToken(payload) {
  return _jsonwebtoken.default.sign(payload, _Config.default.string("auth.jwt.secret"), {
    expiresIn: "1m",
    issuer: _Config.default.string("auth.jwt.issuer", "onebe.sprk.dev"),
    audience: _Config.default.string("auth.jwt.audience", "onebe.sprk.dev")
  });
}
/**
 * Checks if the given token is valid or not.
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
 * @param token The token to be decoded.
 */


function decode(token) {
  return _jsonwebtoken.default.decode(token);
}
/**
 * Extracts the token from the request object.
 *
 * @param request The request object.
 */


function extractToken(request) {
  let authParams = (0, _auth_header.parse)(request.headers.authorization);

  if (authParams && authParams.scheme.toLowerCase() === "bearer") {
    return authParams.value;
  }

  authParams = _passportJwt.ExtractJwt.fromUrlQueryParameter("bearer")(request);
  return authParams || "";
}