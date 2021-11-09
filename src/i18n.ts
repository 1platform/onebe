import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { LanguageDetector } from "i18next-http-middleware";
import path from "path";
import Config from "./System/Config";

export default function i18n(currentDir = __dirname): Promise<any> {
  return i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
      lng: Config.string("i18n.defaultLang", "en"),
      fallbackLng: Config.string("i18n.fallbackLang", "en"),
      supportedLngs: Config.string("i18n.supportedLanguages", "en,ro").split(
        ","
      ),
      preload: Config.string("i18n.preload", "en,ro").split(","),
      debug: Config.boolean("app.debug"),
      backend: {
        loadPath: path.resolve(currentDir, "./locales/{{lng}}.json"),
        addPath: path.resolve(currentDir, "./locales/{{lng}}.missing.json"),
      },
      detection: {
        // order and from where user language should be detected
        order: [/*"path", "session", */ "querystring", "cookie", "header" ],

        // keys or params to lookup language from
        lookupQuerystring: "lang",
        lookupCookie: Config.string("i18n.cookie", "onebe:lang"),
        lookupHeader: "accept-language",
        lookupHeaderRegex: /(([a-z]{2})-?([A-Z]{2})?)\s*;?\s*(q=([0-9.]+))?/gi,
        lookupFromPathIndex: 0,

        // cache user language
        caches: [ "cookie" ],
        ignoreCase: true, // ignore case of detected language

        // optional expire and domain for set cookie
        cookieExpirationDate: new Date(),
        cookieDomain: Config.string("http.cookie.domain", "localhost"),
        cookiePath: "/",
        cookieSecure: Config.boolean("http.cookie.secure"),
        cookieSameSite: "strict", // "strict", "lax" or "none"
      },
    });
}
