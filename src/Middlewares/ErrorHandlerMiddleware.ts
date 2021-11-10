import { Application, NextFunction, Request, Response } from "express";
import { IncomingMessage, ServerResponse } from "http";

import PageNotFoundException from "../Exceptions/PageNotFoundException";
import HTTPStatus from "../HTTP/HTTPStatus";
import DefaultLogger from "../System/Logger";
import IMiddleware from "./IMiddleware";

/**
 * The type of the error handler function.
 *
 * @param error The error to be shown.
 * @param req The request object.
 * @param res The response object
 * @param next The function with the next callback.
 */
export type ErrorHandlerFunction = (
  error: any,
  req: IncomingMessage,
  res: ServerResponse,
  next: (error: any) => void
) => void;

/**
 * The Error Handler Middleware.
 */
export default class ErrorHandlerMiddleware implements IMiddleware {
  /**
   * A list of handlers to be ran before the Error Handler Middleware
   */
  protected static _beforeHandler: Array<ErrorHandlerFunction> = [];

  /**
   * Add a handler to the before error handler array.
   */
  public static addBeforeHandler(handler: ErrorHandlerFunction): void {
    ErrorHandlerMiddleware._beforeHandler.push(handler);
  }

  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      next(new PageNotFoundException());
    });

    if (
      ErrorHandlerMiddleware._beforeHandler &&
      ErrorHandlerMiddleware._beforeHandler.length > 0
    ) {
      app.use(...ErrorHandlerMiddleware._beforeHandler);
    }

    app.use(
      (error: any, req: Request, res: Response, next: NextFunction): void => {
        const status = error.status || HTTPStatus.SERVER_ERROR;
        const message = req.t(error.message || "errors.something-wong", {
          ...(error.parameters || {}),
        });
        let { details } = error;

        if (details) {
          details = details.reduce(
            (accum, detail) => ({
              ...accum,
              [detail.path.join(".")]: `${ detail.message }${
                detail.context && ` (Value: ${ detail.context.value })`
              }`,
            }),
            {}
          );
        } else {
          details = "";
        }

        DefaultLogger.error(`[HTTP ${ status }]: ${ message }`);
        DefaultLogger.debug(error);
        DefaultLogger.debug(error.stack);
        if (details) {
          DefaultLogger.debug(JSON.stringify(details));
        }

        res.status(status).json({
          status,
          message,
          details,
        });
      }
    );
  }
}
