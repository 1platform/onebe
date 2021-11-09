import Env from "../System/Env";
import IConfig from "../System/IConfig";

const defaultAPIConfig: IConfig = {
  path: Env.string("API_PATH", "/api"),
};

export default defaultAPIConfig;
