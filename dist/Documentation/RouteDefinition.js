"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPVerb = _interopRequireDefault(require("../HTTP/HTTPVerb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

  setDescription(controller, description) {
    const route = this.route(controller);
    route.description = description || "";
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

  markAsDocs(controller) {
    const route = this.route(controller);
    route.isDocs = true;
    return this;
  }

  isDocs(controller) {
    return this.route(controller).isDocs;
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

  endpointDescription(controller, methodName, description) {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];

    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.description = description;
    return endpoint;
  }

  endpointSummary(controller, methodName, summary) {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];

    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.summary = summary;
    return endpoint;
  }

  endpointAuth(controller, methodName, method) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.isAuthenticated = true;
    endpoint.authenticationMethod = method;
    return endpoint;
  }

  endpointThrows(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.throws[options.statusCode] = options;
    return endpoint;
  }

  endpointStatus(controller, methodName, statusCode, description) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.statuses[statusCode] = description;
    return endpoint;
  }

  endpointResponse(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.responses[options.statusCode] = options;
    return endpoint;
  }

  endpointParameter(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.parameters[options.name] = options;
  }

  endpointQuery(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.query[options.name] = options;
    return endpoint;
  }

  endpointBodyParameters(controller, methodName, parameters) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.body = undefined;
    endpoint.bodyParameters = _objectSpread(_objectSpread({}, endpoint.bodyParameters || {}), parameters.reduce((accum, parameter) => _objectSpread(_objectSpread({}, accum), {}, {
      [parameter.name]: parameter
    }), {}));
    return endpoint;
  }

  endpointBody(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.body = options;
    endpoint.bodyParameters = undefined;
    return endpoint;
  }

  endpointDocumentation(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);

    if (Object.keys(options).length === 0) {
      throw new Error("Please fill at least one item of the endpoint definition!");
    }

    if (options.body && options.bodyParameters) {
      throw new Error("Please define only one option: body or bodyParameters!");
    }

    if (options.summary) {
      endpoint.summary = options.summary;
    }

    if (options.description) {
      endpoint.description = options.description;
    }

    if (options.query) {
      options.query.forEach(queryItem => {
        endpoint.query[queryItem.name] = queryItem;
      });
    }

    if (options.parameters) {
      options.parameters.forEach(parameter => {
        endpoint.parameters[parameter.name] = parameter;
      });
    }

    if (options.body) {
      endpoint.body = options.body;
    }

    if (options.bodyParameters) {
      options.bodyParameters.forEach(parameter => {
        endpoint.bodyParameters[parameter.name] = parameter;
      });
    }

    if (options.throws) {
      options.throws.forEach(parameter => {
        endpoint.throws[parameter.statusCode] = parameter;
      });
    }
  }

  getEndpoint(controller, methodName, options) {
    if (!this.route(controller).endpoints[methodName]) {
      this.route(controller).endpoints[methodName] = {
        path: options?.path || "",
        verb: options?.verb || _HTTPVerb.default.GET,
        description: options?.description || "",
        summary: options?.summary || "",
        methodName: methodName,
        callback: null,
        middlewares: [],
        passRequest: options?.passRequest ?? false,
        isAuthenticated: false,
        authenticationMethod: "",
        throws: {},
        statuses: {},
        responses: {},
        parameters: {},
        query: {}
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