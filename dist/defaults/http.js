"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for HTTP.
 */
const defaultHTTPConfig = {
  /**
   * The default value for the host on which the application will listen.
   */
  listen: _Env.default.string("HTTP_LISTEN", "127.0.0.1"),

  /**
   * The default value of the port on which the application will listen.
   */
  port: _Env.default.int("HTTP_PORT", 7200),

  /**
   * The default value of the url on which the application will be running.
   */
  url: _Env.default.string("HTTP_URL", "http://localhost:7200").replace(/(https?:\/\/)|(\/)+/g, "$1$2"),

  /**
   * The default values for the cookie configuration.
   */
  cookie: {
    /**
     * The default value of the domain for the cookie.
     */
    domain: _Env.default.string("COOKIE_DOMAIN", "localhost"),

    /**
     * The default flag that indicates whether the cookie service is secure.
     */
    secure: _Env.default.flag("COOKIE_SECURE")
  },

  /**
   * CORS configuration.
   */
  cors: {
    /**
     * The allowed request origin.
     */
    origin: _Env.default.string("CORS_ORIGIN", "*"),

    /**
     * Configures the Access-Control-Allow-Methods CORS header.
     */
    methods: _Env.default.string("CORS_METHODS", "GET,HEAD,PUT,PATCH,POST,DELETE"),

    /**
     * Configures the Access-Control-Allow-Headers CORS header.
     */
    allowedHeaders: _Env.default.string("CORS_ALLOWED_HEADERS") ?? undefined,

    /**
     * Configures the Access-Control-Expose-Headers CORS header.
     */
    exposedHeaders: _Env.default.string("CORS_EXPOSES_HEADERS") ?? undefined,

    /**
     * Configures the Access-Control-Allow-Credentials CORS header.
     */
    credentials: _Env.default.boolean("CORS_CREDENTIALS") ?? undefined,

    /**
     * Configures the Access-Control-Max-Age CORS header.
     */
    maxAge: _Env.default.int("CORS_MAX_AGE") ?? undefined,

    /**
     * Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.
     */
    optionsSuccessStatus: _Env.default.int("CORS_OPTIONS_SUCCESS") ?? undefined,

    /**
     * Pass the CORS preflight response to the next handler.
     */
    preflightContinue: _Env.default.boolean("CORS_PREFLIGHT") ?? undefined
  }
};
var _default = defaultHTTPConfig;
exports.default = _default;