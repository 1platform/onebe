/// <reference types="node" />
import { Application } from "express";
import { IncomingMessage, ServerResponse } from "http";
import IMiddleware from "./IMiddleware";
/**
 * The type of the error handler function.
 *
 * @param error The error to be shown.
 * @param req The request object.
 * @param res The response object
 * @param next The function with the next callback.
 */
export declare type ErrorHandlerFunction = (error: any, req: IncomingMessage, res: ServerResponse, next: (error: any) => void) => void;
/**
 * The Error Handler Middleware.
 */
export default class ErrorHandlerMiddleware implements IMiddleware {
    /**
     * A list of handlers to be ran before the Error Handler Middleware
     */
    protected static _beforeHandler: Array<ErrorHandlerFunction>;
    /**
     * Add a handler to the before error handler array.
     */
    static addBeforeHandler(handler: ErrorHandlerFunction): void;
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
