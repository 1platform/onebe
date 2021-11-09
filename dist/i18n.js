"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = i18n;

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextFsBackend = _interopRequireDefault(require("i18next-fs-backend"));

var _i18nextHttpMiddleware = require("i18next-http-middleware");

var _path = _interopRequireDefault(require("path"));

var _Config = _interopRequireDefault(require("./System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function i18n(currentDir = __dirname) {
  return _i18next.default.use(_i18nextFsBackend.default).use(_i18nextHttpMiddleware.LanguageDetector).init({
    lng: _Config.default.string("i18n.defaultLang", "en"),
    fallbackLng: _Config.default.string("i18n.fallbackLang", "en"),
    supportedLngs: _Config.default.string("i18n.supportedLanguages", "en,ro").split(","),
    preload: _Config.default.string("i18n.preload", "en,ro").split(","),
    debug: _Config.default.boolean("app.debug"),
    backend: {
      loadPath: _path.default.resolve(currentDir, "./locales/{{lng}}.json"),
      addPath: _path.default.resolve(currentDir, "./locales/{{lng}}.missing.json")
    },
    detection: {
      // order and from where user language should be detected
      order: [
      /*"path", "session", */
      "querystring", "cookie", "header"],
      // keys or params to lookup language from
      lookupQuerystring: "lang",
      lookupCookie: _Config.default.string("i18n.cookie", "onebe:lang"),
      lookupHeader: "accept-language",
      lookupHeaderRegex: /(([a-z]{2})-?([A-Z]{2})?)\s*;?\s*(q=([0-9.]+))?/gi,
      lookupFromPathIndex: 0,
      // cache user language
      caches: ["cookie"],
      ignoreCase: true,
      // ignore case of detected language
      // optional expire and domain for set cookie
      cookieExpirationDate: new Date(),
      cookieDomain: _Config.default.string("http.cookie.domain", "localhost"),
      cookiePath: "/",
      cookieSecure: _Config.default.boolean("http.cookie.secure"),
      cookieSameSite: "strict" // "strict", "lax" or "none"

    }
  });
}