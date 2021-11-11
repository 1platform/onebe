import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import Route from "./Route";
import { RouteCallbacks, RouteDecorator, RouteHooksCallbacks } from "./RouteTypes";
/**
 * Returns a list with Route Callbacks applied to a route.
 *
 * @param target The target on which we apply the callbacks.
 */
export declare function getRouteCallbacks(target: Route): RouteCallbacks;
/**
 * Returns a list with Route Hook Callbacks applied before a route definition is ran.
 *
 * @param target The target on which we apply the callbacks.
 * @param property The property for which we apply the callback.
 */
export declare function getBeforeHooksCallbacks(target: Route, property: string): RouteHooksCallbacks;
/**
 * Returns a list with Route Hook Callbacks applied after a route definition is ran.
 *
 * @param target The target on which we apply the callbacks.
 * @param property The property for which we apply the callback.
 */
export declare function getAfterHooksCallbacks(target: Route, property: string): RouteHooksCallbacks;
/**
 * Returns a list with Route Hook Callbacks applied before all route definitions are ran.
 *
 * @param target The target on which we apply the callbacks.
 */
export declare function getBeforeAllHooksCallbacks(target: Route): RouteHooksCallbacks;
/**
 * Returns a list with Route Hook Callbacks applied after all route definitions are ran.
 *
 * @param target The target on which we apply the callbacks.
 */
export declare function getAfterAllHooksCallbacks(target: Route): RouteHooksCallbacks;
/**
 * Function used to define a middleware decorator.
 *
 * @param middlewares A list of middlewares you want to apply on the route.
 */
export declare function defineMiddleware(...middlewares: Array<HTTPMiddleware>): RouteDecorator;
