import Env from "../System/Env";
import IConfig from "../System/IConfig";
import getVersion from "../version";

/**
 * Default configuration for App
 */
const defaultAppConfig: IConfig = {
  /**
   * The default flag that indicates whether the application will run in debug mode.
   */
  debug: Env.flag("APP_DEBUG"),

  /**
   * The default application name.
   */
  appName: Env.string("APP_NAME", "onebe by Spark"),

  /**
   * The default version of the application. Usually 1.0.0 for a new application.
   */
  appVersion: Env.string("APP_VERSION", getVersion()),

  /**
   * The default description of the application. A short text meant to give insight about the app.
   */
  appDescription: Env.string("APP_DESCRIPTION", ""),
};

export default defaultAppConfig;
