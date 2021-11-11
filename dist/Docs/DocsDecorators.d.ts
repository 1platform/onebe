import "reflect-metadata";
import HTTPStatus from "../HTTP/HTTPStatus";
import Route from "../Router/Route";
import { Constructor, ControllerDecoratorFunction, ResponseValue, RouteDecorator } from "../Router/RouteTypes";
/**
 * Type used to define a Class Documentation
 */
export declare type ClassDocs = Record<string, string>;
/**
 * Type used to define a Route Documentation
 */
export declare type RouteDocs = Record<MethodMetadataType, Record<string, ResponseValue<any>>>;
/**
 * A method that retrieves the element Documentation
 *
 * @param target The target route
 * @param propertyKey The property key
 */
export declare function getElementDocs<Type = Record<string, unknown>>(target: Route, propertyKey?: string): Type;
/**
 * Enum representing the Metadata Type
 *
 * @enum
 */
export declare enum MethodMetadataType {
    ROUTE = "route",
    PARAMETER = "parameter",
    QUERY = "query",
    BODY = "body",
    BODY_REQUEST = "body_request",
    RESPONSE = "response",
    THROW = "throw"
}
/**
 * A list of decorators to define properties of a controller.
 */
export declare const controller: {
    /**
     * Decorator to add a description to a controller.
     *
     * @decorator
     * @param description Controller Description
     */
    description: <T extends Constructor>(description: string) => ControllerDecoratorFunction<T>;
    /**
     * Decorator to add a name to a controller.
     *
     * @decorator
     * @param description Controller Name
     */
    name: <T_1 extends Constructor>(description: string) => ControllerDecoratorFunction<T_1>;
};
/**
 * A list of decorators to define properties of a method.
 */
export declare const method: {
    /**
     * Decorator to add a description to a method.
     *
     * @decorator
     * @param description Method Description
     */
    description: (description: string) => RouteDecorator;
    /**
     * Decorator to add a throws property to a method.
     *
     * @decorator
     * @param errorCode The error code
     * @param description The description
     * @param response The response value
     */
    throws: <TResponse>(errorCode: HTTPStatus, description: string, response?: ResponseValue<TResponse>) => RouteDecorator;
    /**
     * Decorator to add a response status to a method.
     *
     * @decorator
     * @param statusCode An http status code
     * @param description The description of the response
     */
    responseStatus: (statusCode: HTTPStatus, description?: string) => RouteDecorator;
    /**
     * Decorator to add a body to a method.
     *
     * @decorator
     * @param parameter The body parameter
     * @param type The type of the parameter
     * @param description The description of the parameter
     */
    body: (parameter: string, type: string, description?: string) => RouteDecorator;
    /**
     * Decorator to add a request to a method.
     *
     * @decorator
     * @param type The type of the request
     * @param description The description of the request
     */
    request: (type: string, description?: string) => RouteDecorator;
};
