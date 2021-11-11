import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default values for Upload config in Env
 */
const defaultUploadConfig: IConfig = {
  temp: Env.string("UPLOAD_TEMP", "./tmp"),
  storage: Env.string("UPLOAD_DESTINATION", "./storage"),
  secret: Env.string("UPLOAD_SECRET", "test"),
};

export default defaultUploadConfig;
