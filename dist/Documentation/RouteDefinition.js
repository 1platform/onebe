"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTP = require("../HTTP");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Route Definition Metadata store.
 *
 * In this class the framework store information about all the routes exposed
 * by your application, like: the base path, the name of the route, the
 * endpoints that are exposed by the route etc.
 */
class RouteDefinition {
  constructor() {
    _defineProperty(this, "_routes", {});
  }

  /**
   * Getter for the list of routes available in the application.
   */
  get list() {
    return Object.values(this._routes);
  }
  /**
   * Method used to add a new Route into the Route Metadata store.
   *
   * @param controller The controller we want to add.
   * @param [basePath] The basePath of the controller.
   * @param [description] A short description of the controller.
   */


  add(controller, basePath, description) {
    this._routes[controller] = {
      controller,
      description: description || "",
      basePath: [basePath || ""],
      endpoints: {}
    };
    return this;
  }
  /**
   * Method used to update Route information.
   *
   * @param controller The controller we want to update.
   * @param [basePath] The basePath of the controller.
   * @param [description] A short description of the controller.
   */


  update(controller, basePath, description) {
    if (!this._routes[controller]) {
      this.add(controller, basePath, description);
    } else {
      this._routes[controller].basePath.push(basePath || "");

      this._routes[controller].description = description || "";
    }

    return this._routes[controller];
  }
  /**
   * Method used to set the name of a route.
   *
   * @param controller The controller we want to update.
   * @param name The name of the route.
   */


  setName(controller, name) {
    const route = this.route(controller);
    route.name = name;
    return route;
  }
  /**
   * Method used to set the description of a route.
   *
   * @param controller The controller we want to update.
   * @param [description] A short description of the controller.
   */


  setDescription(controller, description) {
    const route = this.route(controller);
    route.description = description || "";
    return route;
  }
  /**
   * Method used to get (and create if it doesn't exist yet) a route from
   * the metadata store.
   *
   * @param controller The controller we want to update.
   */


  route(controller) {
    if (!this._routes[controller]) {
      this.add(controller, "");
    }

    return this._routes[controller];
  }
  /**
   * Method used to mark a route as an API route.
   *
   * @param controller The controller we want to update.
   * @param basePath The base path we want to prepend to the controller base path.
   */


  markAsAPI(controller, basePath) {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.isAPI = true;
    return this;
  }
  /**
   * Method used to mark a route as a Custom route.
   *
   * @param controller The controller we want to update.
   * @param basePath The base path we want to prepend to the controller base path.
   */


  markAsCustom(controller, basePath) {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.customPath = basePath;
    return this;
  }
  /**
   * Method used to mark a route as a Documentation route.
   *
   * @param controller The controller we want to update.
   */


  markAsDocs(controller) {
    const route = this.route(controller);
    route.isDocs = true;
    return this;
  }
  /**
   * Checks if a route is a Documentation one.
   *
   * @param controller The controller we want to update.
   */


  isDocs(controller) {
    return this.route(controller).isDocs;
  }
  /**
   * Defines the group the route is a member of.
   *
   * @param controller The controller we want to update.
   * @param groupName A list of groups the route is member of.
   */


  group(controller, groupName) {
    const route = this.route(controller);
    route.group = groupName.split("/");
    return this;
  }
  /**
   * Method used to create (or update) an endpoint of a route.
   *
   * @param controller The controller we want to update.
   * @param options Options used to define an endpoint.
   */


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
  /**
   * Method used to set a description to an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [description] Detailed information about what the endpoint does.
   */


  endpointDescription(controller, methodName, description) {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];

    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.description = description;
    return endpoint;
  }
  /**
   * Method used to set a summary to an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [summary] A short description of the endpoint
   */


  endpointSummary(controller, methodName, summary) {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];

    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.summary = summary;
    return endpoint;
  }
  /**
   * Method used to set the authentication method to an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param authenticationMethod The authentication method used on the endpoint.
   */


  endpointAuth(controller, methodName, authenticationMethod) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.isAuthenticated = true;
    endpoint.authenticationMethod = authenticationMethod;
    return endpoint;
  }
  /**
   * Method used to set information about an error thrown by an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options A list with options related to the error thrown.
   */


  endpointThrows(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.throws[options.statusCode] = options;
    return endpoint;
  }
  /**
   * Method used to set information about a status of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param statusCode The status code returned by the endpoint.
   * @param [description] A short description of the returned status code.
   */


  endpointStatus(controller, methodName, statusCode, description) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.statuses[statusCode] = description;
    return endpoint;
  }
  /**
   * Method used to set information about a response of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the response object returned by the endpoint.
   */


  endpointResponse(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.responses[options.statusCode] = options;
    return endpoint;
  }
  /**
   * Method used to set information about a URL parameter of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the parameter received by the endpoint.
   */


  endpointParameter(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.parameters[options.name] = options;
  }
  /**
   * Method used to set information about a Query parameter of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the parameter received by the endpoint.
   */


  endpointQuery(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.query[options.name] = options;
    return endpoint;
  }
  /**
   * Method used to set details about the request body of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param parameters A list with parameters found in the request body.
   */


  endpointBodyParameters(controller, methodName, parameters) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.body = undefined;
    endpoint.bodyParameters = _objectSpread(_objectSpread({}, endpoint.bodyParameters || {}), parameters.reduce((accum, parameter) => _objectSpread(_objectSpread({}, accum), {}, {
      [parameter.name]: parameter
    }), {}));
    return endpoint;
  }
  /**
   * Method used to set details about the request body of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the used entity as the body request of the endpoint.
   */


  endpointBody(controller, methodName, options) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.body = options;
    endpoint.bodyParameters = undefined;
    return endpoint;
  }
  /**
   * Method used to set all the documentation details of the endpoint.
   *
   * @param controller The controller we want to update.sn
   * @param methodName The name of the method on which we want to add information.
   * @param options A list of options used for documenting the endpoint directly, without using multiple decorators.
   */


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

    if (options.responses) {
      options.responses.forEach(parameter => {
        endpoint.responses[parameter.statusCode] = parameter;
      });
    }

    if (options.statuses) {
      Object.keys(options.statuses).forEach(parameter => {
        endpoint.statuses[parameter] = options.statuses[parameter];
      });
    }
  }
  /**
   * Method used to mark an endpoint as one that accepts files for upload.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [isMultiFile] The endpoint supports single or multiple file upload.
   */


  isUpload(controller, methodName, isMultiFile = false) {
    this.route(controller).endpoints[methodName].upload = isMultiFile ? "single" : "multiple";
  }
  /**
   * Method used to mark an endpoint as protected by a Signed URL.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   */


  isSigned(controller, methodName) {
    this.route(controller).endpoints[methodName].signed = true;
  }
  /**
   * Method used to get metadata information about an endpoint. Using this method the
   * documentation system will check if the endpoint exists in the route. If it doesn't exist,
   * the endpoint is created with the given default values.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [options] A list of endpoint metadata information used as the base for creation when it doesn't exist.
   */


  getEndpoint(controller, methodName, options) {
    if (!this.route(controller).endpoints[methodName]) {
      this.route(controller).endpoints[methodName] = {
        path: options?.path || "",
        verb: options?.verb || _HTTP.HTTPVerb.GET,
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
   * Method used to extract the Route callback from the middlewares list of an endpoint.
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