"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default Language configuration.
 */
const defaultLangConfig = {
  /**
   * The default value for the language of the application.
   */
  defaultLang: _Env.default.string("DEFAULT_LANG", "en"),

  /**
   * The default value for the fallback language, should the default one fail to work.
   */
  fallbackLang: _Env.default.string("DEFAULT_LANG", "en"),

  /**
   * The default values of the languages that are supported by the app.
   */
  supportedLanguages: _Env.default.string("SUPPORTED_LANGS", "en,ro").split(","),

  /**
   * The default languages that will be preloaded.
   */
  preload: _Env.default.string("SUPPORTED_LANGS", "en,ro").split(","),

  /**
   * The default value of the cookie.
   */
  cookie: _Env.default.string("LANG_COOKIE", "onebe:lang")
};
var _default = defaultLangConfig;
exports.default = _default;