import HTTPStatus from "../HTTP/HTTPStatus";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import Route from "./Route";
import { IAuthContext, IContext, IResponse } from "./RouteInterfaces";

export type RouteDecorator<T = Route> = (
  target: T,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => void;

export type Constructor = { new (...args: any[]): any };
export type ControllerDecoratorFunction<T extends Constructor> = (
  Class: T
) => T;
export type ControllerDecorator<T extends Constructor> = T;

export type ResponseValue<TResponse> =
  | string
  | number
  | boolean
  | Array<any>
  | Record<string, unknown>
  | IResponse<TResponse>
  | HTTPStatus;

export type AppMethod<TRequest = any, TResponse = any> = (
  context: IContext<TRequest>,
  authContext?: IAuthContext
) => ResponseValue<TResponse>;
export type HeaderMethod = (header: string) => string | undefined;

export type CallbackExtractorParameter<Request = any, Response = any> =
  | Array<HTTPMiddleware | AppMethod<Request, Response>>
  | HTTPMiddleware
  | AppMethod<Request, Response>;
