import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for HTTP.
 */
const defaultHTTPConfig: IConfig = {
  /**
   * The default value for the host on which the application will listen.
   */
  listen: Env.string("HTTP_LISTEN", "127.0.0.1"),

  /**
   * The default value of the port on which the application will listen.
   */
  port: Env.int("HTTP_PORT", 7200),

  /**
   * The default value of the url on which the application will be running.
   */
  url: Env.string("HTTP_URL", "http://localhost:7200").replace(
    /(https?:\/\/)|(\/)+/g,
    "$1$2"
  ),

  /**
   * The default values for the cookie configuration.
   */
  cookie: {

    /**
     * The default value of the domain for the cookie.
     */
    domain: Env.string("COOKIE_DOMAIN", "localhost"),

    /**
     * The default flag that indicates whether the cookie service is secure.
     */
    secure: Env.flag("COOKIE_SECURE"),
  },
};

export default defaultHTTPConfig;
