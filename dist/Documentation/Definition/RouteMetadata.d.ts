import HTTPVerb from "../../HTTP/HTTPVerb";
import { HTTPMiddleware } from "../../HTTP/HTTPTypes";
import { AppMethod, ResponseValue } from "../../Router/RouteTypes";
import HTTPStatus from "../../HTTP/HTTPStatus";
import { BodyParameterType, QueryParameterType } from "./DataTypes";
export interface IEndpointOptions {
    path: string;
    verb: HTTPVerb;
    methodName: string;
    descriptor: PropertyDescriptor;
    passRequest: boolean;
    description?: string;
    summary?: string;
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
export interface IEndpointResponse<Response = any> {
    statusCode: HTTPStatus;
    description?: string;
    schema: string;
    isArray?: boolean;
}
export interface IEndpointParameter {
    name: string;
    isNumeric: boolean;
    description?: string;
}
export interface IEndpointQuery {
    name: string;
    type: QueryParameterType;
    description?: string;
}
export interface IEndpointBody {
    entity: string;
    description?: string;
    isArray?: boolean;
}
export interface IEndpointBodyParameter {
    name: string;
    type: BodyParameterType;
    isArray?: boolean;
    entity?: string;
    description?: string;
}
export interface IEndpointMetadata<Request = any, Response = any> {
    path: string;
    verb: HTTPVerb;
    methodName: string;
    description?: string;
    summary?: string;
    passRequest: boolean;
    isAuthenticated: boolean;
    authenticationMethod?: string;
    middlewares: Array<HTTPMiddleware>;
    callback: AppMethod<Request, Response>;
    throws: Record<HTTPStatus, IEndpointThrowResponse>;
    statuses: Record<HTTPStatus, string>;
    responses: Record<HTTPStatus, IEndpointResponse>;
    parameters: Record<string, IEndpointParameter>;
    query: Record<string, IEndpointQuery>;
    bodyParameters?: Record<string, IEndpointBodyParameter>;
    body?: IEndpointBody;
}
export interface IEndpointDocumentation {
    description?: string;
    summary?: string;
    throws?: Array<IEndpointThrowResponse>;
    query?: Array<IEndpointQuery>;
    parameters?: Array<IEndpointParameter>;
    body?: IEndpointBody;
    bodyParameters?: Array<IEndpointBodyParameter>;
}
