"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineMiddleware = defineMiddleware;

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