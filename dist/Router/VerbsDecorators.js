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

var _HTTPVerb = _interopRequireDefault(require("../HTTP/HTTPVerb"));

var _MetadataStore = _interopRequireDefault(require("../Documentation/MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator used to define a GET endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
function get(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    _MetadataStore.default.instance.route.endpoint(target.constructor.name, {
      path,
      verb: _HTTPVerb.default.GET,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest
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
    _MetadataStore.default.instance.route.endpoint(target.constructor.name, {
      path,
      verb: _HTTPVerb.default.POST,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest
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
    _MetadataStore.default.instance.route.endpoint(target.constructor.name, {
      path,
      verb: _HTTPVerb.default.PUT,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest
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
    _MetadataStore.default.instance.route.endpoint(target.constructor.name, {
      path,
      verb: _HTTPVerb.default.PATCH,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest
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
    _MetadataStore.default.instance.route.endpoint(target.constructor.name, {
      path,
      verb: _HTTPVerb.default.DELETE,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest
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