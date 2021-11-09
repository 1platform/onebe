"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Config = _interopRequireDefault(require("../System/Config"));

var _version = _interopRequireDefault(require("../version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "_elements", []);

    _defineProperty(this, "_appInfo", {
      name: "@sparkdev/onebe",
      version: (0, _version.default)(),
      appName: _Config.default.string("app.appName"),
      appVersion: _Config.default.string("app.appVersion"),
      appDescription: _Config.default.string("http.url"),
      appURL: _Config.default.string("app.appDescription")
    });
  }

  get app() {
    return this._appInfo;
  }

  set app(appInfo) {
    if (typeof appInfo !== "object") {
      return;
    }

    this._appInfo = Object.assign({
      appName: "onebe by Spark",
      appVersion: this._appInfo.version,
      appDescription: "An application",
      appURL: _Config.default.string("http.url")
    }, _objectSpread(_objectSpread({}, appInfo), {}, {
      name: this._appInfo.name,
      version: this._appInfo.version
    }));
  }

  use(ElementInstance) {
    const element = new ElementInstance();
    this._elements[element.constructor.name] = element;
    Object.defineProperty(this, element.constructor.name, {
      get: () => this._elements[element.constructor.name],
      configurable: true
    });
  }

  hook(fn) {
    this._elements[fn.name] = fn;
    Object.defineProperty(this, fn.name, {
      get: () => this._elements[fn.name],
      configurable: true
    });
  }

}

exports.default = App;