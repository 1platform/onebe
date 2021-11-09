import "reflect-metadata";
import HTTPStatus from "../HTTP/HTTPStatus";
import Route from "../Router/Route";
import { Constructor, ControllerDecoratorFunction, ResponseValue, RouteDecorator } from "../Router/RouteTypes";
export declare type ClassDocs = Record<string, string>;
export declare type RouteDocs = Record<MethodMetadataType, Record<string, ResponseValue<any>>>;
export declare function getElementDocs<Type = Record<string, unknown>>(target: Route, propertyKey?: string): Type;
export declare enum MethodMetadataType {
    ROUTE = "route",
    PARAMETER = "parameter",
    QUERY = "query",
    BODY = "body",
    BODY_REQUEST = "body_request",
    RESPONSE = "response",
    THROW = "throw"
}
export declare const controller: {
    description: <T extends Constructor>(description: string) => ControllerDecoratorFunction<T>;
    name: <T_1 extends Constructor>(description: string) => ControllerDecoratorFunction<T_1>;
};
export declare const method: {
    description: (description: string) => RouteDecorator;
    throws: <TResponse>(errorCode: HTTPStatus, description: string, response?: ResponseValue<TResponse>) => RouteDecorator;
    responseStatus: (statusCode: HTTPStatus, description?: string) => RouteDecorator;
    body: (parameter: string, type: string, description?: string) => RouteDecorator;
    request: (type: string, description?: string) => RouteDecorator;
};
