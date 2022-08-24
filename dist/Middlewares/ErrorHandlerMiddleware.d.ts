/// <reference types="node" />
import { Application } from "express";
import { IncomingMessage, ServerResponse } from "http";
import IMiddleware from "./IMiddleware";
/**
 * Type declaration for a function that can be used as an error handler.
 *
 * @param error The error to be returned.
 * @param request The request object.
 * @param response The response object
 * @param next Callback for the next function to be called.
 */
export declare type ErrorHandlerFunction = (error: any, request: IncomingMessage, response: ServerResponse, next: (error: any) => void) => void;
/**
 * Middleware used to catch all the errors returned by the application and send
 * a consolidated object
 */
export default class ErrorHandlerMiddleware implements IMiddleware {
    /**
     * A list of error handler functions to be run before the final Error Handler Middleware.
     */
    protected static _beforeHandler: Array<ErrorHandlerFunction>;
    /**
     * Add an error handler function to be run before the final Error Handler Middleware.
     */
    static addBeforeHandler(handler: ErrorHandlerFunction): void;
    /**
     * Method used to attach the error handler to the Express instance.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
