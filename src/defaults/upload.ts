import type { IConfig } from "../System";
import { Env } from "../System";

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

  /**
   * Since security is very important for us (and you), the upload middleware will need a
   * secret word to easily sign the upload and download links that can be later used by the users
   * of your application to work with files.
   *
   * @default "test"
   */
  secret: Env.string("UPLOAD_SECRET", "test"),
};

export default defaultUploadConfig;
