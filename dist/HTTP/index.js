"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _http = require("http");

var _App = _interopRequireDefault(require("../App"));

var _Middlewares = _interopRequireDefault(require("../Middlewares"));

var _ErrorHandlerMiddleware = _interopRequireDefault(require("../Middlewares/ErrorHandlerMiddleware"));

var _Router = _interopRequireDefault(require("../Router"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _Logger = require("../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The HTTP server handler class.
 */
class HTTP {
  /**
   * A list of middlewares that we load in our application.
   */

  /**
   * The Express application instance.
   */

  /**
   * The Node.js HTTP Server instance.
   */

  /**
   * HTTP Class constructor.
   */
  constructor() {
    _defineProperty(this, "_middlewares", [..._Middlewares.default]);

    _defineProperty(this, "_app", void 0);

    _defineProperty(this, "_http", void 0);

    this._app = (0, _express.default)();
    this._http = new _http.Server(this._app);

    this._app.enable("trust proxy");

    this._app.set("be_version", _App.default.app.version);

    this.setLocal("be_version", _App.default.app.version);

    this._app.set("be_engine", _App.default.app.name);

    this.setLocal("be_engine", _App.default.app.name);

    this._app.set("title", _App.default.app.appName);

    this.setLocal("appTitle", _App.default.app.appName);

    this._app.set("version", _App.default.app.appVersion);

    this.setLocal("version", _App.default.app.appVersion);
    this.setLocal("description", _App.default.app.appDescription);
    this.setLocal("appURL", _App.default.app.appURL);

    this._app.use((0, _helmet.default)({
      contentSecurityPolicy: false
    }));
  }
  /**
   * Express application getter.
   */


  get app() {
    return this._app;
  }
  /**
   * HTTP Server instance getter.
   */


  get http() {
    return this._http;
  }
  /**
   * The port on which we listen on for http requests.
   */


  get port() {
    return _Config.default.number("http.port", 7200);
  }
  /**
   * The ip on which we listen on for http requests.
   */


  get host() {
    return _Config.default.string("http.listen", "127.0.0.1");
  }
  /**
   * Set a local variable on the express application.
   *
   * @param variable The variable name.
   * @param value The value of the variable.
   */

  /* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */


  setLocal(variable, value) {
    this._app.locals[variable] = value;
  }
  /**
   * Start the HTTP server.
   */


  start() {
    for (const middleware of this._middlewares) {
      middleware.use(this._app);
    }

    this._app.use(_Router.default.router);

    new _ErrorHandlerMiddleware.default().use(this._app);
    const {
      host,
      port
    } = this;

    this._http.listen(port, host, () => {
      (0, _Logger.getDefaultLogger)().info(`Application started: http://${host}:${port}`);
    });
  }
  /**
   * Attach a middleware to the express application.
   *
   * @param middleware The middleware we want to attach.
   */


  use(middleware) {
    if (!Array.isArray(middleware)) {
      middleware = [middleware];
    }

    this._middlewares.push(...middleware);
  }

}

exports.default = HTTP;