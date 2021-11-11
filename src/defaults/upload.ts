import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for Upload services.
 */
const defaultUploadConfig: IConfig = {

  /**
   * The default value of the temporary storage.
   */
  temp: Env.string("UPLOAD_TEMP", "./tmp"),

  /**
   * The default value of the storage.
   */
  storage: Env.string("UPLOAD_DESTINATION", "./storage"),

  /**
   * The default value of the secret.
   */
  secret: Env.string("UPLOAD_SECRET", "test"),
};

export default defaultUploadConfig;
