"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _helmet = _interopRequireDefault(require("helmet"));

var _Middlewares = _interopRequireDefault(require("../Middlewares"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _Router = _interopRequireDefault(require("../Router"));

var _ErrorHandlerMiddleware = _interopRequireDefault(require("../Middlewares/ErrorHandlerMiddleware"));

var _Logger = require("../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The HTTP service used to create the HTTP server.
 *
 * Through this service you can start an HTTP server using Express, secured with
 * Helmet and having some default Middlewares/Plugins loaded in the application.
 */
class HTTP {
  /**
   * A list of middlewares that are loaded in your application.
   */

  /**
   * Express instance that is used for the HTTP server.
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

    this._app.set("be_version", app.app.version);

    this.setLocal("be_version", app.app.version);

    this._app.set("be_engine", app.app.name);

    this.setLocal("be_engine", app.app.name);

    this._app.set("title", app.app.appName);

    this.setLocal("appTitle", app.app.appName);

    this._app.set("version", app.app.appVersion);

    this.setLocal("version", app.app.appVersion);
    this.setLocal("description", app.app.appDescription);
    this.setLocal("appURL", app.app.appURL);

    this._app.use((0, _helmet.default)({
      contentSecurityPolicy: false
    }));
  }
  /**
   * Getter for the Express instance.
   */


  get app() {
    return this._app;
  }
  /**
   * Getter for the HTTP server.
   */


  get http() {
    return this._http;
  }
  /**
   * Getter for the port used to serve the HTTP server.
   */


  get port() {
    return _Config.default.number("http.port", 7200);
  }
  /**
   * Getter for the Host IP used to serve the HTTP server.
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


  setLocal(variable, value) {
    this._app.locals[variable] = value;
  }
  /**
   * Method used to start the HTTP server created by the service.
   */


  start() {
    return new Promise(resolve => {
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
        resolve();
      });
    });
  }
  /**
   * Attach a middleware or a list of middlewares to the express application.
   *
   * @param middleware A middleware or a list of middlewares you want to attach.
   */


  use(middleware) {
    if (!Array.isArray(middleware)) {
      middleware = [middleware];
    }

    this._middlewares.push(...middleware);
  }

}

exports.default = HTTP;