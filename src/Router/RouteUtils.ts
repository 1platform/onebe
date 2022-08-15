import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import Route from "./Route";
import { RouteDecorator } from "./RouteTypes";

/**
 * Function used to define a middleware decorator.
 *
 * @param middlewares A list of middlewares you want to apply on the route.
 */
export function defineMiddleware(...middlewares: Array<HTTPMiddleware>): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    descriptor.value = [ ...middlewares, ...original ];
  };
}

export function getPath(...pathElements: string[]): string {
  const newPath = pathElements
    .filter((path) => path.length)
    .join("/")
    .replace(/(https?:\/\/)|(\/)+/g, "$1$2");

  return newPath.lastIndexOf("/") === newPath.length - 1 && newPath !== "/" ? newPath.substring(0, newPath.length - 1) : newPath;
}
