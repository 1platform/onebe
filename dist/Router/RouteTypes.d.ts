import HTTPStatus from "../HTTP/HTTPStatus";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import Route from "./Route";
import { IResponse, IRouteHookParameter } from "./RouteInterfaces";
import { Constructor } from "../Documentation/MetadataTypes";
import AuthContextAPI from "./AuthContextAPI";
import ContextAPI from "./ContextAPI";
/**
 * Type used to define a Route Decorator function.
 *
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property on which we apply the decorator.
 * @param descriptor The property descriptor of the property we want to apply the decorator on.
 */
export declare type RouteDecorator<T = Route> = (target: T, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Type used to define a Controller Decorator function.
 *
 * @param Class The target on which we apply the decorator.
 */
export declare type ControllerDecoratorFunction<T extends Constructor> = (Class: T) => T;
/**
 * Type used to define a Controller Decorator return value.
 */
export declare type ControllerDecorator<T extends Constructor> = T;
/**
 * Type used to define the response returned by an endpoint to the user.
 */
export declare type ResponseValue<TResponse> = string | number | boolean | Array<any> | Record<string, unknown> | IResponse<TResponse> | HTTPStatus;
/**
 * Type used to define the method/function used to define an endpoint.
 *
 * @param context The request contact of the application. It can contain the request and response object that are used by express.
 * @param authContext The authentication context, used by the application, that contains the authentication information (user, isAuthenticated etc.)
 */
export declare type AppMethod<TRequest = any, TResponse = any> = (context: ContextAPI<TRequest>, authContext?: AuthContextAPI) => ResponseValue<TResponse>;
/**
 * Type used to define a method/function used to fetch information from the header.
 *
 * @param header The header element from which we want information.
 */
export declare type HeaderMethod = (header: string) => string | undefined;
/**
 * Type used to define the callback extractor parameter.
 */
export declare type CallbackExtractorParameter<Request = any, Response = any> = Array<HTTPMiddleware | AppMethod<Request, Response>> | HTTPMiddleware | AppMethod<Request, Response>;
/**
 * A function used to define a route callback.
 */
export declare type RouteCallback = (basePath: string, groupName: string) => void;
/**
 * Array of Route Callback
 */
export declare type RouteCallbacks = Array<RouteCallback>;
/**
 * Array of Route Hook Callbacks.
 */
export declare type RouteHooksCallbacks = Array<(props: IRouteHookParameter) => void>;
