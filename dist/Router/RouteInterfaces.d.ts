/// <reference types="multer" />
import { Request, Response } from "express";
import * as QueryString from "qs";
import { IUser } from "../Authentication/IUser";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import HTTPVerb from "../HTTP/HTTPVerb";
import Route from "./Route";
import { AppMethod, CallbackExtractorParameter, HeaderMethod } from "./RouteTypes";
export interface IContext<TRequest = any> {
    params: Record<string, string>;
    query?: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
    header: HeaderMethod;
    body?: Record<string, unknown> | TRequest;
    req?: Request;
    res?: Response;
    file?: Express.Multer.File;
    files?: Array<Express.Multer.File> | Record<string, Array<Express.Multer.File>>;
}
export interface IAuthContext {
    user?: IUser;
    isAuthenticated?: () => boolean;
}
export interface IResponse<TResponse> {
    statusCode?: number;
    body?: TResponse;
    file?: boolean;
    contentType?: string;
}
export interface IRouteHookParameter {
    method: HTTPVerb;
    basePath: string;
    path: string;
    groupName: string;
}
export interface ICallbackExtracted<Request = any, Response = any> {
    callback: AppMethod<Request, Response>;
    middlewares?: Array<HTTPMiddleware>;
}
export interface IVerbAction<Request = any, Response = any> {
    method: HTTPVerb;
    basePath: string;
    path: string;
    actionCallback: CallbackExtractorParameter<Request, Response>;
    passRequest: boolean;
    target: Route;
    propertyKey: string;
    groupName: string;
}
export interface IVerbDecorators<Request = any, Response = any> {
    method: HTTPVerb;
    path: string;
    target: Route;
    descriptor: PropertyDescriptor;
    passRequest: boolean;
    propertyKey: string;
}
