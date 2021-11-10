import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default value for API_PAth in Env
 */
const defaultAPIConfig: IConfig = {
  path: Env.string("API_PATH", "/api"),
};

export default defaultAPIConfig;
