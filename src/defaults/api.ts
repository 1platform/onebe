import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for Api
 */
const defaultAPIConfig: IConfig = {
  /**
   * The base path value, a prefix for all the paths in the app.
   */
  path: Env.string("API_PATH", "/api"),
};

export default defaultAPIConfig;
