import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default Language configuration.
 */
const defaultLangConfig: IConfig = {

  /**
   * The default value for the language of the application.
   */
  defaultLang: Env.string("DEFAULT_LANG", "en"),

  /**
   * The default value for the fallback language, should the default one fail to work.
   */
  fallbackLang: Env.string("DEFAULT_LANG", "en"),

  /**
   * The default values of the languages that are supported by the app.
   */
  supportedLanguages: Env.string("SUPPORTED_LANGS", "en,ro").split(","),

  /**
   * The default languages that will be preloaded.
   */
  preload: Env.string("SUPPORTED_LANGS", "en,ro").split(","),

  /**
   * The default value of the cookie.
   */
  cookie: Env.string("LANG_COOKIE", "onebe:lang"),
};

export default defaultLangConfig;
