"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultLangConfig = {
  defaultLang: _Env.default.string("DEFAULT_LANG", "en"),
  fallbackLang: _Env.default.string("DEFAULT_LANG", "en"),
  supportedLanguages: _Env.default.string("SUPPORTED_LANGS", "en,ro").split(","),
  preload: _Env.default.string("SUPPORTED_LANGS", "en,ro").split(","),
  cookie: _Env.default.string("LANG_COOKIE", "onebe:lang")
};
var _default = defaultLangConfig;
exports.default = _default;