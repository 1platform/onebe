import { RouteDecorator } from "./RouteTypes";
/**
 * Decorator used to define a GET endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function get<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a POST endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function post<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PUT endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function put<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PATCH endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function patch<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a DELETE endpoint.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function del<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a GET endpoint. This is an alias for the `get` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function GET<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a POST endpoint. This is an alias for the `post` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function POST<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PUT endpoint. This is an alias for the `put` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function PUT<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a PATCH endpoint. This is an alias for the `patch` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function PATCH<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
/**
 * Decorator used to define a DELETE endpoint. This is an alias for the `delete` decorator.
 *
 * If you need the request and response objects in your endpoint pass the `passRequest` flag. Also, if you want
 * to have type support for the `body` object pass the Request type parameter to the decorator. If you want to
 * validate the response, pass the Response type parameter to the decorator. If you do not need the body or the
 * response, pass `void` to both.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param [passRequest] Should we pass the request and response objects to the route method.
 */
export declare function DELETE<Request = any, Response = any>(path: string, passRequest?: boolean): RouteDecorator;
