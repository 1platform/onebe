import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import Route from "./Route";
import { IRouteHookParameter } from "./RouteInterfaces";
import { RouteDecorator } from "./RouteTypes";

export type RouteCallbacks = Array<
(basePath: string, groupName: string) => void
>;
export type RouteHooksCallbacks = Array<(props: IRouteHookParameter) => void>;

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
