import HTTPStatus from "../HTTP/HTTPStatus";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import Route from "./Route";
import { IAuthContext, IContext, IResponse } from "./RouteInterfaces";
export declare type RouteDecorator<T = Route> = (target: T, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare type Constructor = {
    new (...args: any[]): any;
};
export declare type ControllerDecoratorFunction<T extends Constructor> = (Class: T) => T;
export declare type ControllerDecorator<T extends Constructor> = T;
export declare type ResponseValue<TResponse> = string | number | boolean | Array<any> | Record<string, unknown> | IResponse<TResponse> | HTTPStatus;
export declare type AppMethod<TRequest = any, TResponse = any> = (context: IContext<TRequest>, authContext?: IAuthContext) => ResponseValue<TResponse>;
export declare type HeaderMethod = (header: string) => string | undefined;
export declare type CallbackExtractorParameter<Request = any, Response = any> = Array<HTTPMiddleware | AppMethod<Request, Response>> | HTTPMiddleware | AppMethod<Request, Response>;
