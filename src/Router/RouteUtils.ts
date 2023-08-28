import MetadataStore from "@/Documentation/MetadataStore";
import Route from "@/Router/Route";
import { RouteDecorator } from "@/Router/RouteTypes";
import { HTTPMiddleware } from "@/Server";

/**
 * Function used to create a middleware decorator.
 *
 * @param middlewares A list of middlewares you want to apply on the route.
 */
export function defineMiddleware(...middlewares: Array<HTTPMiddleware>): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    descriptor.value = [ ...middlewares, ...original ];
  };
}

/**
 * Function used to create a middleware decorator with additional documentation.
 *
 * @param information The additional information to be sent to the documentation engine.
 * @param middlewares A list of middlewares you want to apply on the route.
 */
export function defineMiddlewareWithInformation(information: string, ...middlewares: Array<HTTPMiddleware>): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    MetadataStore.instance.route.additionalInformation(target.constructor.name, propertyKey, information);

    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    descriptor.value = [ ...middlewares, ...original ];
  };
}

/**
 * Function used to get the full URL based on the given partial URL path elements.
 *
 * @param pathElements The list of path elements to be converted to a valid URL path.
 */
export function getPath(...pathElements: string[]): string {
  const newPath = pathElements
    .filter((path) => path.length)
    .join("/")
    .replace(/(https?:\/\/)|(\/)+/g, "$1$2");

  return newPath.lastIndexOf("/") === newPath.length - 1 && newPath !== "/" ? newPath.substring(0, newPath.length - 1) : newPath;
}
