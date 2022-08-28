"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Internationalisation (i18n) configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * translation of the application.
 */
const defaultLangConfig = {
  /**
   * The default language used for the translation of the application.
   *
   * @default "en"
   */
  defaultLang: _Env.default.string("DEFAULT_LANG", "en"),

  /**
   * The fallback language for the case when a translation item does not
   * exist in the desired language.
   *
   * @default "en"
   */
  fallbackLang: _Env.default.string("DEFAULT_LANG", "en"),

  /**
   * A list of supported languages for translation that can be used in the
   * application.
   *
   * @default ["en", "ro"]
   */
  supportedLanguages: _Env.default.array("SUPPORTED_LANGS", ",", "en,ro"),

  /**
   * A list of supported languages for translation that will be preloaded
   * in the application.
   *
   * @default ["en", "ro"]
   */
  preload: _Env.default.array("SUPPORTED_LANGS", ",", "en,ro"),

  /**
   * The name of the cookie used to identify the desired language for
   * sending the messages to the customer.
   *
   * @default "onebe:lang"
   */
  cookie: _Env.default.string("LANG_COOKIE", "onebe:lang")
};
var _default = defaultLangConfig;
exports.default = _default;