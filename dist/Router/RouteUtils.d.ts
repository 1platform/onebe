import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import { RouteDecorator } from "./RouteTypes";
/**
 * Function used to define a middleware decorator.
 *
 * @param middlewares A list of middlewares you want to apply on the route.
 */
export declare function defineMiddleware(...middlewares: Array<HTTPMiddleware>): RouteDecorator;
export declare function getPath(...pathElements: string[]): string;
