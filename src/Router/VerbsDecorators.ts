import MetadataStore from "@/Documentation/MetadataStore";
import Route from "@/Router/Route";
import { RouteDecorator } from "@/Router/RouteTypes";
import { HTTPVerb } from "@/Server";

/**
 * Decorator used to define a GET endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function get<Response = any>(path: string, passRequest = false): RouteDecorator {
  return function (target: Route, propertyKey: string, descriptor: PropertyDescriptor) {
    MetadataStore.instance.route.endpoint<void, Response>(target.constructor.name, {
      path,
      verb: HTTPVerb.GET,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest,
    });
  };
}

/**
 * Decorator used to define a POST endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function post<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return function (target: Route, propertyKey: string, descriptor: PropertyDescriptor) {
    MetadataStore.instance.route.endpoint<Request, Response>(target.constructor.name, {
      path,
      verb: HTTPVerb.POST,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest,
    });
  };
}

/**
 * Decorator used to define a PUT endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function put<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return function (target: Route, propertyKey: string, descriptor: PropertyDescriptor) {
    MetadataStore.instance.route.endpoint<Request, Response>(target.constructor.name, {
      path,
      verb: HTTPVerb.PUT,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest,
    });
  };
}

/**
 * Decorator used to define a PATCH endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function patch<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return function (target: Route, propertyKey: string, descriptor: PropertyDescriptor) {
    MetadataStore.instance.route.endpoint<Request, Response>(target.constructor.name, {
      path,
      verb: HTTPVerb.PATCH,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest,
    });
  };
}

/**
 * Decorator used to define a DELETE endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function del<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return function (target: Route, propertyKey: string, descriptor: PropertyDescriptor) {
    MetadataStore.instance.route.endpoint<Request, Response>(target.constructor.name, {
      path,
      verb: HTTPVerb.DELETE,
      methodName: propertyKey,
      descriptor: descriptor,
      passRequest,
    });
  };
}

/**
 * Decorator used to define a GET endpoint. This is an alias for the `get` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function GET<Response = any>(path: string, passRequest = false): RouteDecorator {
  return get<Response>(path, passRequest);
}

/**
 * Decorator used to define a POST endpoint. This is an alias for the `post` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function POST<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return post<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a PUT endpoint. This is an alias for the `put` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function PUT<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return put<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a PATCH endpoint. This is an alias for the `patch` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function PATCH<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return patch<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a DELETE endpoint. This is an alias for the `delete` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export function DELETE<Request = any, Response = any>(path: string, passRequest = false): RouteDecorator {
  return del<Request, Response>(path, passRequest);
}
