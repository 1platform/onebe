import Env from "../System/Env";
import IConfig from "../System/IConfig";
import { getVersion } from "../version";

/**
 * The Application configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * application.
 */
const defaultAppConfig: IConfig = {
  /**
   * Flag used to indicate whether the application will run in debug mode.
   *
   * @default false
   */
  debug: Env.flag("APP_DEBUG"),

  /**
   * The name of the application you are developing.
   *
   * @default "One Backend by Spark"
   */
  appName: Env.string("APP_NAME", "One Backend by Spark"),

  /**
   * The version of the application you are developing.
   *
   * @default "1.0.0"
   */
  appVersion: Env.string("APP_VERSION", getVersion()),

  /**
   * A short text that describes the application you are developing.
   *
   * @default ""
   */
  appDescription: Env.string("APP_DESCRIPTION", ""),
};

export default defaultAppConfig;
