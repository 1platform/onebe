import { Request, Response } from "express";
import * as QueryString from "qs";
import IUser from "../Authentication/IUser";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import HTTPVerb from "../HTTP/HTTPVerb";
import Route from "./Route";
import { AppMethod, CallbackExtractorParameter, HeaderMethod } from "./RouteTypes";

/**
 * The request context parameter definition.
 */
export interface IContext<TRequest = any> {
  /**
   * A map with all the route parameters.
   */
  params: Record<string, string>;
  /**
   * A list with all the query parameters.
   */
  query?: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
  /**
   * Get the router parameter as a string.
   *
   * @param key The key we need from the query string.
   */
  getParam?: (key: string, defaultValue?: string) => string;
  /**
   * Get the route parameter as a number.
   *
   * @param key The key we need from the query string.
   */
  getParamNumber?: (key: string, defaultValue?: number) => number;
  /**
   * Get the query parameter as a string.
   *
   * @param key The key we need from the query string.
   */
  getQuery?: (key: string, defaultValue?: string) => string;
  /**
   * Get the query parameter as a number.
   *
   * @param key The key we need from the query string.
   */
  getQueryNumber?: (key: string, defaultValue?: number) => number;
  /**
   * Get the query parameter as a boolean.
   *
   * @param key The key we need from the query string.
   */
  getQueryBoolean?: (key: string) => boolean;
  /**
   * Get the query parameter as an array.
   *
   * @param key The key we need from the query string.
   */
  getQueryArray?: (key: string, defaultValue?: string[]) => string[];
  /**
   * Get the query parameter as an array.
   *
   * @param key The key we need from the query string.
   */
  getBody?: () => TRequest;
  /**
   * The header data extractor function.
   */
  header: HeaderMethod;
  /**
   * The body of the request.
   */
  body?: Record<string, unknown> | TRequest;
  /**
   * The request object.
   */
  request?: Request;
  /**
   * The response object.
   */
  response?: Response;
  /**
   * The file request object.
   */
  file?: Express.Multer.File;
  /**
   * A list with uploaded files from the request.
   */
  files?: Array<Express.Multer.File> | Record<string, Array<Express.Multer.File>>;
}

/**
 * The authentication context parameter.
 */
export interface IAuthContext {
  /**
   * The user object.
   */
  user?: IUser;
  /**
   * The token received from the bearer authorization header.
   */
  token?: string;
  /**
   * Method to check if the user is authenticated or not.
   */
  isAuthenticated?: () => boolean;
  /**
   * Logs a user out of the application.
   */
  logout?: () => void;

  /**
   * Indexer for any other authentication context option.
   */
  [key: string]: any;
}

/**
 * The response object that can be returned from an endpoint method.
 */
export interface IResponse<TResponse> {
  /**
   * Status code of the response.
   */
  statusCode?: number;
  /**
   * The response body.
   */
  body?: TResponse;
  /**
   * The file a user can download.
   */
  file?: boolean;
  /**
   * The content type of the response.
   */
  contentType?: string;
}

/**
 * The parameter used for the definition of a Route Hook.
 */
export interface IRouteHookParameter {
  /**
   * The HTTP Verb used for the route endpoint.
   */
  method: HTTPVerb;
  /**
   * The base path of the route endpoint.
   */
  basePath: string;
  /**
   * The path of the route endpoint.
   */
  path: string;
  /**
   * The name of the controller.
   */
  groupName: string;
}

/**
 * The return object contents of the callback extractor function.
 */
export interface ICallbackExtracted<Request = any, Response = any> {
  /**
   * The route endpoint callback.
   */
  callback: AppMethod<Request, Response>;
  /**
   * A list of middlewares applied to the route endpoint.
   */
  middlewares?: Array<HTTPMiddleware>;
}

/**
 * The VerbAction parameter contents.
 */
export interface IVerbAction<Request = any, Response = any> {
  /**
   * The HTTP Verb used for the route endpoint.
   */
  method: HTTPVerb;
  /**
   * The base path of the route endpoint.
   */
  basePath: string;
  /**
   * The path of the route endpoint.
   */
  path: string;
  /**
   * The name of the controller.
   */
  groupName: string;
  /**
   * The action callback list for the given route.
   */
  actionCallback: CallbackExtractorParameter<Request, Response>;
  /**
   * Pass the request and response objects.
   */
  passRequest: boolean;
  /**
   * The target Controller.
   */
  target: Route;
  /**
   * The name of the route endpoint function.
   */
  propertyKey: string;
}

/**
 * The VerbDecorators parameter contents.
 */
export interface IVerbDecorators<Request = any, Response = any> {
  /**
   * The HTTP Verb used for the route endpoint.
   */
  verb: HTTPVerb;
  /**
   * The path of the route endpoint.
   */
  path: string;
  /**
   * The target Controller.
   */
  target: Route;
  /**
   * The name of the route endpoint function.
   */
  propertyKey: string;
  /**
   * The property descriptor of the route endpoint function.
   */
  descriptor: PropertyDescriptor;
  /**
   * Pass the request and response objects.
   */
  passRequest: boolean;
}
