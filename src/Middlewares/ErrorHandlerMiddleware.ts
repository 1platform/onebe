import { Application, NextFunction, Request, Response } from "express";
import { IncomingMessage, ServerResponse } from "http";

import { PageNotFoundException } from "../Exceptions";
import { HTTPStatus } from "../HTTP";
import { getDefaultLogger } from "../System";
import IMiddleware from "./IMiddleware";

/**
 * Type declaration for a function that can be used as an error handler.
 *
 * @param error The error to be returned.
 * @param request The request object.
 * @param response The response object
 * @param next Callback for the next function to be called.
 */
export type ErrorHandlerFunction = (error: any, request: IncomingMessage, response: ServerResponse, next: (error: any) => void) => void;

/**
 * Middleware used to catch all the errors returned by the application and send
 * a consolidated object
 */
export default class ErrorHandlerMiddleware implements IMiddleware {
  /**
   * A list of error handler functions to be run before the final Error Handler Middleware.
   */
  protected static _beforeHandler: Array<ErrorHandlerFunction> = [];

  /**
   * Add an error handler function to be run before the final Error Handler Middleware.
   */
  public static addBeforeHandler(handler: ErrorHandlerFunction): void {
    ErrorHandlerMiddleware._beforeHandler.push(handler);
  }

  /**
   * Method used to attach the error handler to the Express instance.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      next(new PageNotFoundException());
    });

    if (ErrorHandlerMiddleware._beforeHandler && ErrorHandlerMiddleware._beforeHandler.length > 0) {
      app.use(...ErrorHandlerMiddleware._beforeHandler);
    }

    app.use((error: any, req: Request, res: Response, next: NextFunction): void => {
      const status = error.status || HTTPStatus.SERVER_ERROR;
      const message = req.t
        ? req.t(error.message || "onebe.errors.something-wong", {
          ...(error.parameters || {}),
        })
        : error.message;
      let { details } = error;

      if (details) {
        details = details.reduce(
          (accum, detail) => ({
            ...accum,
            [detail.path.join(".")]: `${ detail.message }${ detail.context && ` (Value: ${ detail.context.value })` }`,
          }),
          {}
        );
      } else {
        details = "";
      }

      getDefaultLogger().error(`[HTTP ${ status }]: ${ message }`);
      getDefaultLogger().debug(error);
      getDefaultLogger().debug(error.stack);
      if (details) {
        getDefaultLogger().debug(JSON.stringify(details));
      }

      res.status(status).json({
        status,
        message,
        details,
      });
    });
  }
}
