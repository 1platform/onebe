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

  /**
   * CORS configuration.
   */
  cors: {
    /**
     * The allowed request origin.
     */
    origin: Env.string("CORS_ORIGIN", "*"),
    /**
     * Configures the Access-Control-Allow-Methods CORS header.
     */
    methods: Env.string("CORS_METHODS", "GET,HEAD,PUT,PATCH,POST,DELETE"),
    /**
     * Configures the Access-Control-Allow-Headers CORS header.
     */
    allowedHeaders: Env.string("CORS_ALLOWED_HEADERS") || undefined,
    /**
     * Configures the Access-Control-Expose-Headers CORS header.
     */
    exposedHeaders: Env.string("CORS_EXPOSES_HEADERS") || undefined,
    /**
     * Configures the Access-Control-Allow-Credentials CORS header.
     */
    credentials: Env.boolean("CORS_CREDENTIALS") ?? undefined,
    /**
     * Configures the Access-Control-Max-Age CORS header.
     */
    maxAge: Env.int("CORS_MAX_AGE") || undefined,
    /**
     * Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.
     */
    optionsSuccessStatus: Env.int("CORS_OPTIONS_SUCCESS", 204) || undefined,
    /**
     * Pass the CORS preflight response to the next handler.
     */
    preflightContinue: Env.boolean("CORS_PREFLIGHT") ?? undefined,
  },
};

export default defaultHTTPConfig;
