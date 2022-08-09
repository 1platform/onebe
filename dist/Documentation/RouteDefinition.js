"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPVerb = _interopRequireDefault(require("../HTTP/HTTPVerb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RouteDefinition {
  constructor() {
    _defineProperty(this, "_routes", {});
  }

  get list() {
    return Object.values(this._routes);
  }

  add(controller, basePath, description) {
    this._routes[controller] = {
      controller,
      description: description || "",
      basePath: [basePath || ""],
      endpoints: {}
    };
    return this;
  }

  update(controller, basePath, description) {
    if (!this._routes[controller]) {
      this.add(controller, basePath, description);
    } else {
      this._routes[controller].basePath.push(basePath || "");

      this._routes[controller].description = description || "";
    }

    return this._routes[controller];
  }

  setName(controller, name) {
    const route = this.route(controller);
    route.name = name;
    return route;
  }

  route(controller) {
    if (!this._routes[controller]) {
      this.add(controller, "");
    }

    return this._routes[controller];
  }

  markAsAPI(controller, basePath) {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.isAPI = true;
    return this;
  }

  markAsCustom(controller, basePath) {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.customPath = basePath;
    return this;
  }

  group(controller, groupName) {
    const route = this.route(controller);
    route.group = groupName.split("/");
    return this;
  }

  endpoint(controller, options) {
    const {
      callback,
      middlewares
    } = this.callbackExtractor(options.descriptor.value);
    const route = this.route(controller);
    let endpoint = route.endpoints[options.methodName];

    if (!endpoint) {
      endpoint = this.getEndpoint(controller, options.methodName, options);
    }

    endpoint.path = options.path;
    endpoint.verb = options.verb;
    endpoint.callback = callback;
    endpoint.middlewares = middlewares;
    endpoint.passRequest = options.passRequest ?? false;
    return endpoint;
  }

  endpointAuth(controller, methodName, method) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.isAuthenticated = true;
    endpoint.authenticationMethod = method;
  }

  endpointThrows(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.throws[options.statusCode] = options;
  }

  getEndpoint(controller, methodName, options) {
    if (!this.route(controller).endpoints[methodName]) {
      this.route(controller).endpoints[methodName] = {
        path: options?.path || "",
        verb: options?.verb || _HTTPVerb.default.GET,
        methodName: methodName,
        callback: null,
        middlewares: [],
        passRequest: options?.passRequest ?? false,
        isAuthenticated: false,
        authenticationMethod: "",
        throws: {}
      };
    }

    return this.route(controller).endpoints[methodName];
  }
  /**
   * Function used to extract the Route callback from the middlewares list.
   *
   * @param fn The middlewares lists.
   */


  callbackExtractor(fn) {
    let callback;
    let middlewares = [];

    if (Array.isArray(fn)) {
      middlewares = [...fn.slice(0, fn.length - 1)];
      callback = fn.pop();
    } else {
      callback = fn;
    }

    return {
      callback,
      middlewares
    };
  }

}

exports.default = RouteDefinition;