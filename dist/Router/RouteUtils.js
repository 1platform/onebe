"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineMiddleware = defineMiddleware;
exports.getAfterAllHooksCallbacks = getAfterAllHooksCallbacks;
exports.getAfterHooksCallbacks = getAfterHooksCallbacks;
exports.getBeforeAllHooksCallbacks = getBeforeAllHooksCallbacks;
exports.getBeforeHooksCallbacks = getBeforeHooksCallbacks;
exports.getRouteCallbacks = getRouteCallbacks;

/**
 * Returns a list with Route Callbacks applied to a route.
 *
 * @param target The target on which we apply the callbacks.
 */
function getRouteCallbacks(target) {
  let callbacks = Reflect.getMetadata("route:path:callbacks", target);

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


function getBeforeHooksCallbacks(target, property) {
  let callbacks = Reflect.getMetadata("route:before:callbacks", target, property);

  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:before:callbacks", callbacks, target, property);
  }

  return callbacks;
}
/**
 * Returns a list with Route Hook Callbacks applied after a route definition is ran.
 *
 * @param target The target on which we apply the callbacks.
 * @param property The property for which we apply the callback.
 */


function getAfterHooksCallbacks(target, property) {
  let callbacks = Reflect.getMetadata("route:after:callbacks", target, property);

  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:after:callbacks", callbacks, target, property);
  }

  return callbacks;
}
/**
 * Returns a list with Route Hook Callbacks applied before all route definitions are ran.
 *
 * @param target The target on which we apply the callbacks.
 */


function getBeforeAllHooksCallbacks(target) {
  let callbacks = Reflect.getMetadata("route:before:callbacks", target);

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


function getAfterAllHooksCallbacks(target) {
  let callbacks = Reflect.getMetadata("route:after:callbacks", target);

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


function defineMiddleware(...middlewares) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
    descriptor.value = [...middlewares, ...original];
  };
}