import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import Route from "./Route";
import {
  RouteCallbacks,
  RouteDecorator,
  RouteHooksCallbacks,
} from "./RouteTypes";

/**
 * Returns a list with Route Callbacks applied to a route.
 *
 * @param target The target on which we apply the callbacks.
 */
export function getRouteCallbacks(target: Route): RouteCallbacks {
  let callbacks: RouteCallbacks = Reflect.getMetadata(
    "route:path:callbacks",
    target
  );
  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:path:callbacks", callbacks, target);
  }

  return callbacks;
}

/**
 * Returns a list with Route Hook Callbacks applied before a route definition is ran.
 *
 * @param target The target on which we apply the callbacks.
 * @param property The property for which we apply the callback.
 */
export function getBeforeHooksCallbacks(
  target: Route,
  property: string
): RouteHooksCallbacks {
  let callbacks: RouteHooksCallbacks = Reflect.getMetadata(
    "route:before:callbacks",
    target,
    property
  );
  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata(
      "route:before:callbacks",
      callbacks,
      target,
      property
    );
  }

  return callbacks;
}

/**
 * Returns a list with Route Hook Callbacks applied after a route definition is ran.
 *
 * @param target The target on which we apply the callbacks.
 * @param property The property for which we apply the callback.
 */
export function getAfterHooksCallbacks(
  target: Route,
  property: string
): RouteHooksCallbacks {
  let callbacks: RouteHooksCallbacks = Reflect.getMetadata(
    "route:after:callbacks",
    target,
    property
  );
  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata(
      "route:after:callbacks",
      callbacks,
      target,
      property
    );
  }

  return callbacks;
}

/**
 * Returns a list with Route Hook Callbacks applied before all route definitions are ran.
 *
 * @param target The target on which we apply the callbacks.
 */
export function getBeforeAllHooksCallbacks(target: Route): RouteHooksCallbacks {
  let callbacks: RouteHooksCallbacks = Reflect.getMetadata(
    "route:before:callbacks",
    target
  );
  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:before:callbacks", callbacks, target);
  }

  return callbacks;
}

/**
 * Returns a list with Route Hook Callbacks applied after all route definitions are ran.
 *
 * @param target The target on which we apply the callbacks.
 */
export function getAfterAllHooksCallbacks(target: Route): RouteHooksCallbacks {
  let callbacks: RouteHooksCallbacks = Reflect.getMetadata(
    "route:after:callbacks",
    target
  );
  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:after:callbacks", callbacks, target);
  }

  return callbacks;
}

/**
 * Function used to define a middleware decorator.
 *
 * @param middlewares A list of middlewares you want to apply on the route.
 */
export function defineMiddleware(
  ...middlewares: Array<HTTPMiddleware>
): RouteDecorator {
  return (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const original = Array.isArray(descriptor.value)
      ? descriptor.value
      : [ descriptor.value ];
    descriptor.value = [ ...middlewares, ...original ];
  };
}
