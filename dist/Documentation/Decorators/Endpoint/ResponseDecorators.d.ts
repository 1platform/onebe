import HTTPStatus from "../../../HTTP/HTTPStatus";
import { ResponseValue, RouteDecorator } from "../../../Router/RouteTypes";
/**
 * Decorator used to describe what does an endpoint response. This decorator
 * should be used only for primitive return values: `string`, `number`, `boolean`,
 * `null`, `undefined`.
 *
 * @decorator
 * @param type The data type of the response value.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */
export declare function Return(type: string, statusCode?: HTTPStatus, description?: string): RouteDecorator;
/**
 * Decorator used to describe an entity based response for an endpoint. If you
 * want to reuse a response, we recommend to use this decorator and define an entity.
 *
 * @decorator
 * @param type The name of the entity used to describe the response.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */
export declare function Schema(type: string, statusCode?: HTTPStatus, description?: string): RouteDecorator;
/**
 * Decorator used to describe what does an array endpoint response. This decorator
 * should be used only for primitive return values: `string`, `number`, `boolean`,
 * `null`, `undefined`.
 *
 * @decorator
 * @param type The data type of the response value.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */
export declare function Array(type: string, statusCode?: HTTPStatus, description?: string): RouteDecorator;
/**
 * Decorator used to describe an entity based array response for an endpoint. If you
 * want to reuse a response, we recommend to use this decorator and define an entity.
 *
 * @decorator
 * @param type The name of the entity used to describe the response.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */
export declare function ArraySchema(type: string, statusCode?: HTTPStatus, description?: string): RouteDecorator;
/**
 * Decorator used to describe an error thrown by your endpoint. The
 * thrown error should always have an HTTP Status code attached to it.
 *
 * @decorator
 * @param errorCode The HTTP Status error code used for the response.
 * @param [description] A short description of the returned error.
 * @param [response] A sample message sent to the user with the error.
 */
export declare function Throws<Response = any>(errorCode: HTTPStatus, description?: string, response?: ResponseValue<Response>): RouteDecorator;
/**
 * Decorator used to describe the status code that can be returned by the
 * endpoint.
 *
 * This decorator only describes the status code without a body attached
 * to the status.
 *
 * @decorator
 * @param statusCode The HTTP Status error code used for the response.
 * @param [description] A short description of the returned error.
 */
export declare function Status(statusCode: HTTPStatus, description?: string): RouteDecorator;
