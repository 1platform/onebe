import { RouteDecorator } from "./RouteTypes";
/**
 * Decorator used to define a GET endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function get<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a POST endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function post<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PUT endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function put<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PATCH endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function patch<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a DELETE endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function del<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a GET endpoint. This is an alias for the `get` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function GET<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a POST endpoint. This is an alias for the `post` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function POST<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PUT endpoint. This is an alias for the `put` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function PUT<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PATCH endpoint. This is an alias for the `patch` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function PATCH<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a DELETE endpoint. This is an alias for the `delete` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export declare function DELETE<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
