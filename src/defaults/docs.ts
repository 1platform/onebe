import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default value for Docs config in Env
 */
const defaultDocsConfig: IConfig = {
  expose: Env.flag("EXPOSE_DOCS"),
};

export default defaultDocsConfig;
