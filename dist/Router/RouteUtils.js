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

function getRouteCallbacks(target) {
  let callbacks = Reflect.getMetadata("route:path:callbacks", target);

  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:path:callbacks", callbacks, target);
  }

  return callbacks;
}

function getBeforeHooksCallbacks(target, property) {
  let callbacks = Reflect.getMetadata("route:before:callbacks", target, property);

  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:before:callbacks", callbacks, target, property);
  }

  return callbacks;
}

function getAfterHooksCallbacks(target, property) {
  let callbacks = Reflect.getMetadata("route:after:callbacks", target, property);

  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:after:callbacks", callbacks, target, property);
  }

  return callbacks;
}

function getBeforeAllHooksCallbacks(target) {
  let callbacks = Reflect.getMetadata("route:before:callbacks", target);

  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:before:callbacks", callbacks, target);
  }

  return callbacks;
}

function getAfterAllHooksCallbacks(target) {
  let callbacks = Reflect.getMetadata("route:after:callbacks", target);

  if (!callbacks) {
    callbacks = [];
    Reflect.defineMetadata("route:after:callbacks", callbacks, target);
  }

  return callbacks;
}

function defineMiddleware(...middlewares) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
    descriptor.value = [...middlewares, ...original];
  };
}