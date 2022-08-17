import Route from "../Router/Route";
/**
 * Decorator used to enable Bearer Authentication for an endpoint.
 *
 * Using this decorator you can restrict the access to an endpoint only to the users
 * that are authenticated. Also, by using this decorator we mark the endpoint as
 * authenticated in the generated documentation files.
 *
 * Using the bearer authentication method, the authentication engine requires that
 * the `Authorization` header be present in the request and have a valid value:
 * the token Bearer followed by a JSON Web Token (JWT).
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export declare const Bearer: (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Decorator used to enable Basic Authentication for an endpoint.
 *
 * Using this decorator you can restrict the access to an endpoint only to the users
 * that are authenticated. Also, by using this decorator we mark the endpoint as
 * authenticated in the generated documentation files.
 *
 * Using the basic authentication method, the authentication engine requires that
 * the user pass a valid username and password combination to it. The credentials
 * must be passed inside the `Authorization` header after the token `Basic` and
 * in a base64 encoded version.
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
 * Use this middleware when you have to provide an endpoint that based on the values
 * available in the header, return additional information.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export declare const extractUser: import("../Router/RouteTypes").RouteDecorator<Route>;
