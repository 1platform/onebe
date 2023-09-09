import { getEnv } from "@/System/Environment";
import type IConfig from "@/System/IConfig";
import { getVersion } from "@/version";

/**
 * The Application configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * application.
 */
const defaultAppConfig: IConfig = {
  /**
   * Flag used to indicate whether the application will run in debug mode.
   *
   * @default false
   */
  debug: getEnv().flag("APP_DEBUG"),

  /**
   * The name of the application you are developing.
   *
   * @default "One Backend by Spark"
   */
  name: getEnv().string("APP_NAME", "One Backend by Spark"),

  /**
   * The version of the application you are developing.
   *
   * @default "1.0.0"
   */
  version: getEnv().string("APP_VERSION", getVersion()),

  /**
   * A short text that describes the application you are developing.
   *
   * @default ""
   */
  description: getEnv().string("APP_DESCRIPTION", ""),

  /**
   * A list with folders used by the framework to store various sources
   * of the application.
   */
  folders: {
    /**
     * Location of the Routes files.
     *
     * @default "./src/routes"
     */
    routes: "./src/routes",

    /**
     * Location of the Task Scheduler files.
     *
     * @default "./src/jobs"
     */
    jobs: "./src/jobs",

    /**
     * Location of the Service files.
     *
     * @default "./src/services"
     */
    services: "./src/services",
  },
};

export default defaultAppConfig;
