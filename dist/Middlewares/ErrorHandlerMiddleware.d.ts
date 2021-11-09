/// <reference types="node" />
import { Application } from "express";
import http from "http";
import IMiddleware from "./IMiddleware";
declare type ErrorHandlerFunction = (error: any, req: http.IncomingMessage, res: http.ServerResponse, next: (error: any) => void) => void;
export default class ErrorHandlerMiddleware implements IMiddleware {
    protected static _beforeHandler: Array<ErrorHandlerFunction>;
    static addBeforeHandler(handler: ErrorHandlerFunction): void;
    use(app: Application): void;
}
export {};
