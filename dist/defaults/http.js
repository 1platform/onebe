"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The HTTP server configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * HTTP server.
 */
const defaultHTTPConfig = {
  /**
   * The IP address on which we want to listen for connections. If you intend
   * to use a Proxy server in front of the application we recommend to use
   * the default value: "127.0.0.1". Otherwise, set it to "0.0.0.0" or a
   * specific ip.
   *
   * @default "127.0.0.1"
   */
  listen: _Env.default.string("HTTP_LISTEN", "127.0.0.1"),

  /**
   * The PORT on which we listen for connections. Customize the value for
   * this parameter as needed.
   *
   * @default 7200
   */
  port: _Env.default.int("HTTP_PORT", 7200),

  /**
   * The URL that can be used to access the application. This URL is used
   * in various APIs that need to sign/display data about the application.
   * For example, the Documentation API that exposes the route metadata will
   * use this `http.url` parameter to generate valid URL calls.
   *
   * @default "http://HTTP_LISTEN:HTTP_PORT"
   */
  url: _Env.default.url("HTTP_URL", `http://${_Env.default.string("HTTP_LISTEN", "127.0.0.1")}:${_Env.default.int("HTTP_PORT", 7200)}`),

  /**
   * Cookie configuration object.
   *
   * Through these parameters we can limit the scope of our cookies and who
   * can access the data exposed by them. We recommend that you use SECURE
   * cookies when deploy in production.
   */
  cookie: {
    /**
     * The domain on which the application expose the cookies.
     *
     * If your users try to use cookies outside your domain, this parameter
     * will block them from using. We do not recommend the usage of cookies
     * for storing important data.
     *
     * @default "localhost"
     */
    domain: _Env.default.string("COOKIE_DOMAIN", "localhost"),

    /**
     * Flag to mark if a cookie is secure or not.
     *
     * When using HTTPS you should ALWAYS mark the cookies as secure,
     * even when you are using a Proxy in front.
     *
     * @default false
     */
    secure: _Env.default.flag("COOKIE_SECURE")
  },

  /**
   * Cross-Origin Request Sharing Configuration Object.
   *
   * Through this object we configure the CORS functionality of the
   * HTTP server. Through CORS we can enable or disable access to various
   * methods, headers etc. Also, we can limit the access to our application
   * only for certain IPs.
   */
  cors: {
    /**
     * The list of IPs for which we enable the access to our application.
     * If you want to enable access to everyone set the value to "*" or
     * leave it as it is.
     *
     * @default "*"
     */
    origin: _Env.default.string("CORS_ORIGIN", "*"),

    /**
     * The HTTP Verbs/Methods for which we want to enable CORS.
     *
     * @default "GET,HEAD,PUT,PATCH,POST,DELETE"
     */
    methods: _Env.default.string("CORS_METHODS", "GET,HEAD,PUT,PATCH,POST,DELETE"),

    /**
     * The allowed headers in any request protected by CORS. If you
     * want to allow all headers, do not set any value to this parameter.
     *
     * @default undefined
     */
    allowedHeaders: _Env.default.string("CORS_ALLOWED_HEADERS") || undefined,

    /**
     * The exposed headers in any request protected by CORS. If you
     * want to expose all headers, do not set any value to this parameter.
     *
     * @default undefined
     */
    exposedHeaders: _Env.default.string("CORS_EXPOSES_HEADERS") || undefined,

    /**
     * The allowed credentials in any request protected by CORS.
     *
     * @default undefined
     */
    credentials: _Env.default.boolean("CORS_CREDENTIALS") ?? undefined,

    /**
     * Sets the maximum age of any CORS request.
     *
     * @default undefined
     */
    maxAge: _Env.default.int("CORS_MAX_AGE") || undefined,

    /**
     * Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.
     *
     * @default 204
     */
    optionsSuccessStatus: _Env.default.int("CORS_OPTIONS_SUCCESS", 204) || undefined,

    /**
     * Pass the CORS preflight response to the next handler.
     *
     * @default undefined
     */
    preflightContinue: _Env.default.boolean("CORS_PREFLIGHT") ?? undefined
  }
};
var _default = defaultHTTPConfig;
exports.default = _default;