import HTTPVerb from "../HTTP/HTTPVerb";
import Route from "./Route";
import { RouteDecorator } from "./RouteTypes";
import MetadataStore from "../Documentation/MetadataStore";

/**
 * Decorator used to define a GET endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function get<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    MetadataStore.instance.route.endpoint<Request, Response>(
      target.constructor.name,
      {
        path,
        verb: HTTPVerb.GET,
        methodName: propertyKey,
        descriptor: descriptor,
        passRequest,
      }
    );
  };
}

/**
 * Decorator used to define a POST endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function post<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    MetadataStore.instance.route.endpoint<Request, Response>(
      target.constructor.name,
      {
        path,
        verb: HTTPVerb.POST,
        methodName: propertyKey,
        descriptor: descriptor,
        passRequest,
      }
    );
  };
}

/**
 * Decorator used to define a PUT endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function put<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    MetadataStore.instance.route.endpoint<Request, Response>(
      target.constructor.name,
      {
        path,
        verb: HTTPVerb.PUT,
        methodName: propertyKey,
        descriptor: descriptor,
        passRequest,
      }
    );
  };
}

/**
 * Decorator used to define a PATCH endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function patch<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    MetadataStore.instance.route.endpoint<Request, Response>(
      target.constructor.name,
      {
        path,
        verb: HTTPVerb.PATCH,
        methodName: propertyKey,
        descriptor: descriptor,
        passRequest,
      }
    );
  };
}

/**
 * Decorator used to define a DELETE endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function del<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    MetadataStore.instance.route.endpoint<Request, Response>(
      target.constructor.name,
      {
        path,
        verb: HTTPVerb.DELETE,
        methodName: propertyKey,
        descriptor: descriptor,
        passRequest,
      }
    );
  };
}

/**
 * Decorator used to define a GET endpoint. This is an alias for the `get` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function GET<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return get<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a POST endpoint. This is an alias for the `post` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function POST<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return post<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a PUT endpoint. This is an alias for the `put` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function PUT<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return put<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a PATCH endpoint. This is an alias for the `patch` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function PATCH<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return patch<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a DELETE endpoint. This is an alias for the `delete` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function DELETE<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return del<Request, Response>(path, passRequest);
}
