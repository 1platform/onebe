import { Application, NextFunction, Request, Response } from "express";
import http from "http";

import PageNotFoundException from "../Exceptions/PageNotFoundException";
import HTTPStatus from "../HTTP/HTTPStatus";
import DefaultLogger from "../System/Logger";
import IMiddleware from "./IMiddleware";

type ErrorHandlerFunction = (
  error: any,
  req: http.IncomingMessage,
  res: http.ServerResponse,
  next: (error: any) => void
) => void;

export default class ErrorHandlerMiddleware implements IMiddleware {
  protected static _beforeHandler: Array<ErrorHandlerFunction> = [];

  public static addBeforeHandler(handler: ErrorHandlerFunction): void {
    ErrorHandlerMiddleware._beforeHandler.push(handler);
  }

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
