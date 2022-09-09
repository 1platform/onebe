import Env from "../System/Env";
import type IConfig from "../System/IConfig";

/**
 * Documentation system configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * documentation system.
 */
const defaultDocsConfig: IConfig = {
  /**
   * Flag used to let the Documentation SDK know if you want to expose the generated
   * documentation metadata or not.
   *
   * @default false
   */
  expose: Env.flag("EXPOSE_DOCS"),

  /**
   * Defines the base path for the documentation controller. Since we want to expose
   * the documentation metadata for the routes and entities, we want a path from
   * where the documentation should be served.
   *
   * @default "/docs"
   */
  path: Env.string("DOCUMENTATION_BASE_PATH", "/docs"),
};

export default defaultDocsConfig;
