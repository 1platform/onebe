import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPVerb from "../HTTP/HTTPVerb";
/**
 * Interface for Route doc
 */
export interface IRouteDoc {
    verb: HTTPVerb;
    path: string;
    description?: string;
    summary?: string;
    methodName?: string;
    controllerName?: string;
    parameters?: Record<string, IParameterDoc>;
    request?: Record<string, IBodyDoc>;
    errors?: Record<string, string>;
    response?: Record<string, IBodyDoc>;
    responseStatus?: HTTPStatus;
    isAuthenticated: boolean;
    bearerSpecific: boolean;
    basicSpecific: boolean;
    tag?: string;
}
/**
 * Enum representing a Parameter Type
 *
 * @enum
 */
export declare enum ParameterType {
    STRING = "string",
    NUMBER = "number"
}
/**
 * Enum representing a Body Parameter Type
 *
 * @enum
 */
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
/**
 * Interface representing a Parameter doc
 */
export interface IParameterDoc {
    name: string;
    description?: string;
    type?: ParameterType;
}
/**
 * Interface representing a Body doc
 */
export interface IBodyDoc {
    name: string;
    description?: string;
    type?: BodyParameterType;
    schema?: string;
    default?: string;
    required?: boolean;
}
/**
 * Interface representing an Interface doc
 */
export interface IInterfaceDoc {
    name: string;
    description?: string;
    type?: BodyParameterType;
    properties: Array<IBodyDoc>;
}
/**
 * Interface representing a Route definition
 */
export interface IRouteDefinition {
    name: string;
    description: string;
    path: string;
    isAPI: boolean;
    routes: Array<IRouteDoc>;
}
/**
 * Type used to define a Routes list
 */
export declare type TRoutesList = Record<string, IRouteDefinition>;
/**
 * The default identifier for a the Response body when using interfaces for responses.
 */
export declare const DEFAULT_BODY_TAG = "__DEFAULT__";
