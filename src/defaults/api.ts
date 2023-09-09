import { getEnv } from "@/System/Environment";
import type IConfig from "@/System/IConfig";

/**
 * The API routing configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * REST API endpoints.
 */
const defaultAPIConfig: IConfig = {
  /**
   * The base path used to expose the REST API endpoints.
   *
   * @default /api
   */
  path: getEnv().string("API_PATH", "/api"),
};

export default defaultAPIConfig;
