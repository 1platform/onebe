import HTTPVerb from "../../HTTP/HTTPVerb";
import { HTTPMiddleware } from "../../HTTP/HTTPTypes";
import { AppMethod, ResponseValue } from "../../Router/RouteTypes";
import HTTPStatus from "../../HTTP/HTTPStatus";

export interface IEndpointOptions {
  path: string;
  verb: HTTPVerb;
  methodName: string;
  descriptor: PropertyDescriptor;
  passRequest: boolean;
}

export interface IRouteMetadata {
  name?: string;
  controller: string;
  group?: string[];
  description?: string;
  isAPI?: boolean;
  basePath: string[];
  customPath?: string;
  parent?: string;

  endpoints: Record<string, IEndpointMetadata>;
}

export interface IEndpointThrowResponse<Response = any> {
  statusCode: HTTPStatus;
  description?: string;
  response?: ResponseValue<Response>;
}

export interface IEndpointMetadata<Request = any, Response = any> {
  path: string;
  verb: HTTPVerb;
  methodName: string;
  passRequest: boolean;
  isAuthenticated: boolean;
  authenticationMethod?: string;

  middlewares: Array<HTTPMiddleware>;
  callback: AppMethod<Request, Response>;
  throws: Record<HTTPStatus, IEndpointThrowResponse>;
}
