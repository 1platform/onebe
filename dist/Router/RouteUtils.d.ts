import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import { RouteDecorator } from "./RouteTypes";
/**
 * Function used to create a middleware decorator.
 *
 * @param middlewares A list of middlewares you want to apply on the route.
 */
export declare function defineMiddleware(...middlewares: Array<HTTPMiddleware>): RouteDecorator;
/**
 * Function used to get the full URL based on the given partial URL path elements.
 *
 * @param pathElements The list of path elements to be converted to a valid URL path.
 */
export declare function getPath(...pathElements: string[]): string;
