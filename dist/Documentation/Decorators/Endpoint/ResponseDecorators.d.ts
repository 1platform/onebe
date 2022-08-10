import HTTPStatus from "../../../HTTP/HTTPStatus";
import { ResponseValue, RouteDecorator } from "../../../Router/RouteTypes";
/**
 * Decorator to add a response to a method.
 *
 * @decorator
 * @param type The type of the response
 * @param statusCode The status code of the response
 * @param description The description of the response
 */
export declare function Response(type: string, statusCode?: HTTPStatus, description?: string): RouteDecorator;
export declare function ResponseArray(type: string, statusCode?: HTTPStatus, description?: string): RouteDecorator;
export declare function Throws<Response = any>(errorCode: HTTPStatus, description?: string, response?: ResponseValue<Response>): RouteDecorator;
export declare function Status(errorCode: HTTPStatus, description?: string): RouteDecorator;
