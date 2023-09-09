import { getEnv } from "@/System/Environment";
import type IConfig from "@/System/IConfig";

/**
 * The upload middleware configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * Upload Middleware functionality of the application.
 */
const defaultUploadConfig: IConfig = {
  /**
   * The temporary getModuleFolder location. In this getModuleFolder the framework will store the uploaded
   * files here before moving them to your destination getModuleFolder. We recommend to move the
   * temporary getModuleFolder outside the application getModuleFolder.
   *
   * @default "./tmp"
   */
  temp: getEnv().string("UPLOAD_TEMP", "./tmp"),

  /**
   * The destination path for the uploaded files. In this getModuleFolder the framework will store
   * the uploaded files after they are processed. We recommend to move the destination
   * getModuleFolder outside the application getModuleFolder.
   *
   * @default "./storage"
   */
  storage: getEnv().string("UPLOAD_DESTINATION", "./storage"),
};

export default defaultUploadConfig;
