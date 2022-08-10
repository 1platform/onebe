import Route from "../Router/Route";
/**
 * Decorator to enable Bearer Authentication for an endpoint.
 *
 * Attaches to the property of the target the following metadata:
 * - route:auth
 * - route:auth:bearer
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export declare const Bearer: (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Decorator to enable Basic Authentication for an endpoint.
 *
 * Attaches to the property of the target the following metadata:
 * - route:auth
 * - route:auth:basic
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export declare const Basic: (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Middleware used to extract the user from the request when using Bearer Authentication
 * on a mixed route (Public and Protected).
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export declare const extractUser: import("../Router/RouteTypes").RouteDecorator<Route>;
