import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for the Documentation.
 */
const defaultDocsConfig: IConfig = {
  /**
   * The default flag for documentation exposure to the user.
   */
  expose: Env.flag("EXPOSE_DOCS"),
};

export default defaultDocsConfig;
