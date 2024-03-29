import Env from "@/System/Env";
import type IConfig from "@/System/IConfig";

/**
 * The upload middleware configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * Upload Middleware functionality of the application.
 */
const defaultUploadConfig: IConfig = {
  /**
   * The temporary folder location. In this folder the framework will store the uploaded
   * files here before moving them to your destination folder. We recommend to move the
   * temporary folder outside the application folder.
   *
   * @default "./tmp"
   */
  temp: Env.string("UPLOAD_TEMP", "./tmp"),

  /**
   * The destination path for the uploaded files. In this folder the framework will store
   * the uploaded files after they are processed. We recommend to move the destination
   * folder outside the application folder.
   *
   * @default "./storage"
   */
  storage: Env.string("UPLOAD_DESTINATION", "./storage"),
};

export default defaultUploadConfig;
