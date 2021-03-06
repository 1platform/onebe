"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE = DELETE;
exports.GET = GET;
exports.PATCH = PATCH;
exports.POST = POST;
exports.PUT = PUT;
exports.del = del;
exports.get = get;
exports.patch = patch;
exports.post = post;
exports.put = put;

var _DocsDecorators = require("../Docs/DocsDecorators");

var _DocsStore = _interopRequireDefault(require("../Docs/DocsStore"));

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _HTTPVerb = _interopRequireDefault(require("../HTTP/HTTPVerb"));

var _Logger = require("../System/Logger");

var _index = _interopRequireDefault(require("./index"));

var _RouteUtils = require("./RouteUtils");

var _JWT = require("../Authentication/JWT");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Function used to extract the Route callback from the middlewares list.
 *
 * @param fn The middlewares lists.
 */
function callbackExtractor(fn) {
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
/**
 * Wrapper function to get the query parameter as a string.
 *
 * @param req The request object.
 */


const getQuery = req => (key, defaultValue) => req.query[key] || defaultValue;
/**
 * Wrapper function to get the query parameter as a number.
 *
 * @param req The request object.
 */


const getQueryNumber = req => (key, defaultValue) => Number(req.query[key]) || defaultValue;
/**
 * Wrapper function to get the query parameter as a string.
 *
 * @param req The request object.
 */


const getParam = req => (key, defaultValue) => req.params[key] || defaultValue;
/**
 * Wrapper function to get the query parameter as a number.
 *
 * @param req The request object.
 */


const getParamNumber = req => (key, defaultValue) => Number(req.params[key]) || defaultValue;
/**
 * Wrapper function to get the query parameter as a boolean.
 *
 * @param req The request object.
 */


const getQueryBoolean = req => key => (req.query[key] ?? "false") !== "false";
/**
 * Wrapper function to get the query parameter as an array.
 *
 * @param req The request object.
 */


const getQueryArray = req => (key, defaultValue) => req.query[key] || defaultValue;
/**
 * Wrapper function to get the body content as the request type.
 *
 * @param req The request object.
 */


const getBody = req => () => req.body;
/**
 * A generic function that registers a HTTP Verb endpoint in the router.
 *
 * Attaches to the target the following metadata:
 * - route:auth
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @param props The properties used to define the endpoint.
 */


function verbAction(props) {
  const {
    callback,
    middlewares
  } = callbackExtractor(props.actionCallback);
  let path = `/${props.basePath}/${props.path}`.replace(/(https?:\/\/)|(\/)+/g, "$1$2");

  if (path.lastIndexOf("/") === path.length - 1 && path !== "/") {
    path = path.substring(0, path.length - 1);
  }

  _DocsStore.default.instance.addRoute(props.groupName, {
    path,
    verb: props.method,
    methodName: callback.name,
    controllerName: props.target.constructor.name,
    isAuthenticated: Reflect.getMetadata("route:auth", props.target, props.propertyKey) || false,
    basicSpecific: Reflect.getMetadata("route:auth:basic", props.target, props.propertyKey) || false,
    bearerSpecific: Reflect.getMetadata("route:auth:bearer", props.target, props.propertyKey) || false
  }, (0, _DocsDecorators.getElementDocs)(props.target, props.propertyKey) || {});

  (0, _Logger.getDefaultLogger)().debug(`[REGISTER] ${props.method.toUpperCase()}: ${path}`);

  _index.default.router[props.method](path, ...middlewares, async function (req, res, next) {
    try {
      const original = await callback({
        params: req.params,
        query: req.query,
        body: props.method !== _HTTPVerb.default.GET ? req.body : undefined,
        header: req.header,
        request: props.passRequest ? req : undefined,
        response: props.passRequest ? res : undefined,
        file: req.file || undefined,
        files: req.files || undefined,
        getParam: getParam(req),
        getParamNumber: getParamNumber(req),
        getQuery: getQuery(req),
        getQueryNumber: getQueryNumber(req),
        getQueryBoolean: getQueryBoolean(req),
        getQueryArray: getQueryArray(req),
        getBody: getBody(req)
      }, _objectSpread({
        user: req.user,
        token: (0, _JWT.extractToken)(req),
        isAuthenticated: req.isAuthenticated.bind(req),
        logout: req.logout ? req.logout.bind(req) : () => {
          /*NOPE*/
        }
      }, req.authContext || {}));
      let status = _HTTPStatus.default.OK;

      if (typeof original === "object" && "statusCode" in original) {
        status = original?.statusCode || _HTTPStatus.default.OK;
      } else if (Number.isInteger(original) && Object.values(_HTTPStatus.default).indexOf(original) >= 0) {
        status = original;
      }

      if (status === _HTTPStatus.default.NO_CONTENT || status === _HTTPStatus.default.ACCEPTED) {
        res.sendStatus(status);
        return;
      }

      if (typeof original === "object" && "file" in original) {
        res.contentType(original?.contentType || "text/plain");
        res.sendFile(original?.body);
        return;
      }

      if (typeof original === "object" && "contentType" in original) {
        res.contentType(original?.contentType || "text/plain");
        res.send(original?.body);
        return;
      }

      res.status(status).json(original);
    } catch (e) {
      next(e);
    }
  });
}
/**
 * A generic function that registers a HTTP Verb endpoint in a controller.
 *
 * @param props The properties used to define the endpoint.
 */


function verbDecorator(props) {
  const {
    method,
    path,
    target,
    descriptor,
    passRequest,
    propertyKey
  } = props;
  const routeCallbacks = (0, _RouteUtils.getRouteCallbacks)(target);
  const beforeHooksCallbacks = (0, _RouteUtils.getBeforeHooksCallbacks)(target, propertyKey);
  const afterHooksCallbacks = (0, _RouteUtils.getAfterHooksCallbacks)(target, propertyKey);
  routeCallbacks.push((basePath, groupName) => {
    beforeHooksCallbacks.forEach(hook => hook({
      method,
      basePath,
      path,
      groupName
    }));
    verbAction({
      method,
      basePath,
      path,
      actionCallback: descriptor.value,
      passRequest,
      target,
      propertyKey,
      groupName
    });
    afterHooksCallbacks.forEach(hook => hook({
      method,
      basePath,
      path,
      groupName
    }));
  });
}
/**
 * Decorator used to define a GET endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function get(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.GET,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}
/**
 * Decorator used to define a POST endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function post(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.POST,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}
/**
 * Decorator used to define a PUT endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function put(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.PUT,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}
/**
 * Decorator used to define a PATCH endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function patch(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.PATCH,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}
/**
 * Decorator used to define a DELETE endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function del(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.DELETE,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}
/**
 * Decorator used to define a GET endpoint. This is an alias for the `get` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function GET(path, passRequest = false) {
  return get(path, passRequest);
}
/**
 * Decorator used to define a POST endpoint. This is an alias for the `post` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function POST(path, passRequest = false) {
  return post(path, passRequest);
}
/**
 * Decorator used to define a PUT endpoint. This is an alias for the `put` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function PUT(path, passRequest = false) {
  return put(path, passRequest);
}
/**
 * Decorator used to define a PATCH endpoint. This is an alias for the `patch` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function PATCH(path, passRequest = false) {
  return patch(path, passRequest);
}
/**
 * Decorator used to define a DELETE endpoint. This is an alias for the `delete` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */


function DELETE(path, passRequest = false) {
  return del(path, passRequest);
}