"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pathToRegexp = require("path-to-regexp");

var _Config = _interopRequireDefault(require("../System/Config"));

var _DocsInterfaces = require("./DocsInterfaces");

var _SwaggerBuilder = _interopRequireDefault(require("./SwaggerBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DocsStore {
  constructor() {// Do Nothing

    _defineProperty(this, "_routes", {});

    _defineProperty(this, "_interfaces", {});
  }

  static get instance() {
    if (!DocsStore._instance) {
      DocsStore._instance = new DocsStore();
    }

    return DocsStore._instance;
  }

  initGroup(name, basePath, description = "", isAPI = false) {
    this._routes[name] = {
      name,
      description,
      isAPI,
      path: basePath,
      routes: []
    };
  }

  setGroupItem(name, key, value) {
    switch (key) {
      case "description":
      case "name":
        this._routes[name][key] = value;
        break;
    }
  }

  addRoute(group, routeDefinition, docs) {
    if (!this._routes[group]) {
      this._routes[group] = {
        name: group,
        description: "",
        path: group,
        isAPI: false,
        routes: []
      };
    }

    const parameters = (0, _pathToRegexp.parse)(routeDefinition.path).filter(param => typeof param !== "string").reduce((accum, param) => {
      const name = param.name.toString();
      return _objectSpread(_objectSpread({}, accum), {}, {
        [name]: {
          name,
          type: _DocsInterfaces.ParameterType.STRING
        }
      });
    }, {});
    let path = routeDefinition.path;
    Object.keys(parameters).forEach(parameter => {
      path = path.replaceAll(`:${parameter}`, `{${parameter}}`);
    });

    if (docs.response) {
      routeDefinition.responseStatus = docs.response.statusCode;
    }

    if (docs.body && Object.keys(docs.body).length > 0) {
      routeDefinition.request = docs.body;
    }

    this._routes[group].routes.push(_objectSpread(_objectSpread({}, routeDefinition), {}, {
      path,
      parameters,
      errors: Object.values(docs.throw || {}).reduce((accum, value) => _objectSpread(_objectSpread({}, accum), {}, {
        [value.statusCode.toString()]: value.body
      }), {})
    }));
  }

  getRoutes() {
    if (!_Config.default.boolean("docs.expose")) {
      return {};
    }

    return this._routes;
  }

  getYaml() {
    if (!_Config.default.boolean("docs.expose")) {
      return "";
    }

    const builder = new _SwaggerBuilder.default(this._routes, this._interfaces);
    return builder.getYaml();
  }

  defineInterface(name, description) {
    this._interfaces[name] = {
      name,
      description,
      type: _DocsInterfaces.BodyParameterType.OBJECT,
      properties: []
    };
  }

  addInterfaceProperty(interfaceName, definition) {
    this._interfaces[interfaceName].properties.push(_objectSpread({
      required: true
    }, definition));
  }

}

exports.default = DocsStore;

_defineProperty(DocsStore, "_instance", void 0);