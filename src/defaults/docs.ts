import Env from "../System/Env";
import IConfig from "../System/IConfig";

const defaultDocsConfig: IConfig = {
  expose: Env.flag("EXPOSE_DOCS"),
};

export default defaultDocsConfig;
