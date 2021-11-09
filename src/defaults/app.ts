import Env from "../System/Env";
import IConfig from "../System/IConfig";
import getVersion from "../version";

const defaultAppConfig: IConfig = {
  debug: Env.flag("APP_DEBUG"),

  appName: Env.string("APP_NAME", "onebe by Spark"),
  appVersion: Env.string("APP_VERSION", getVersion()),
  appDescription: Env.string("APP_DESCRIPTION", ""),
};

export default defaultAppConfig;
