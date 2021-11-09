"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _http = require("http");

var _App = _interopRequireDefault(require("../App"));

var _ErrorHandlerMiddleware = _interopRequireDefault(require("../Middlewares/ErrorHandlerMiddleware"));

var _Router = _interopRequireDefault(require("../Router"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _Logger = _interopRequireDefault(require("../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HTTP {
  constructor() {
    _defineProperty(this, "_middlewares", []);

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

  get app() {
    return this._app;
  }

  get http() {
    return this._http;
  }

  get port() {
    return _Config.default.number("http.port", 7200);
  }

  get host() {
    return _Config.default.string("http.listen", "127.0.0.1");
  }
  /* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */


  setLocal(variable, value) {
    this._app.locals[variable] = value;
  }

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
      _Logger.default.info(`Application started: http://${host}:${port}`);
    });
  }

  use(middleware) {
    if (!Array.isArray(middleware)) {
      middleware = [middleware];
    }

    this._middlewares.push(...middleware);
  }

}

exports.default = HTTP;