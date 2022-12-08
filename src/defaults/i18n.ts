import Env from "@/System/Env";
import type IConfig from "@/System/IConfig";

/**
 * The Internationalisation (i18n) configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * translation of the application.
 */
const defaultLangConfig: IConfig = {
  /**
   * Debug the i18n configuration.
   *
   * @default false
   */
  debug: Env.boolean("DEBUG_I18N"),

  /**
   * The default language used for the translation of the application.
   *
   * @default "en"
   */
  defaultLang: Env.string("DEFAULT_LANG", "en"),

  /**
   * The fallback language for the case when a translation item does not
   * exist in the desired language.
   *
   * @default "en"
   */
  fallbackLang: Env.string("DEFAULT_LANG", "en"),

  /**
   * A list of supported languages for translation that can be used in the
   * application.
   *
   * @default ["en", "ro"]
   */
  supportedLanguages: Env.array("SUPPORTED_LANGS", ",", "en,ro"),

  /**
   * A list of supported languages for translation that will be preloaded
   * in the application.
   *
   * @default ["en", "ro"]
   */
  preload: Env.array("SUPPORTED_LANGS", ",", "en,ro"),

  /**
   * The name of the cookie used to identify the desired language for
   * sending the messages to the customer.
   *
   * @default "onebe:lang"
   */
  cookie: Env.string("LANG_COOKIE", "onebe:lang"),
};

export default defaultLangConfig;
