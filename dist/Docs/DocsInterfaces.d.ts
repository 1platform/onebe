import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPVerb from "../HTTP/HTTPVerb";
export interface IRouteDoc {
    verb: HTTPVerb;
    path: string;
    description?: string;
    methodName?: string;
    controllerName?: string;
    parameters?: Record<string, IParameterDoc>;
    request?: Record<string, IBodyDoc>;
    errors?: Record<string, string>;
    response?: string;
    responseStatus?: HTTPStatus;
    isAuthenticated: boolean;
    userSpecific: boolean;
    appSpecific: boolean;
    tag?: string;
}
export declare enum ParameterType {
    STRING = "string",
    NUMBER = "number"
}
export declare enum BodyParameterType {
    STRING = "string",
    NUMBER = "number",
    SCHEMA = "schema",
    BOOLEAN = "boolean",
    INTEGER = "integer",
    NULL = "null",
    OBJECT = "object",
    ARRAY = "array"
}
export interface IParameterDoc {
    name: string;
    description?: string;
    type?: ParameterType;
}
export interface IBodyDoc {
    name: string;
    description?: string;
    type?: BodyParameterType;
    schema?: string;
    default?: string;
    required?: boolean;
}
export interface IInterfaceDoc {
    name: string;
    description?: string;
    type?: BodyParameterType;
    properties: Array<IBodyDoc>;
}
export interface IRouteDefinition {
    name: string;
    description: string;
    path: string;
    isAPI: boolean;
    routes: Array<IRouteDoc>;
}
export declare type TRoutesList = Record<string, IRouteDefinition>;
export declare const DEFAULT_BODY_TAG = "__DEFAULT__";
