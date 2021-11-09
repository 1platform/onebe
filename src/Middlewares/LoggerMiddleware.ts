import { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import DefaultLogger, { Logger } from "../System/Logger";
import IMiddleware from "./IMiddleware";

declare global {
  namespace Express {
    export interface Request {
      version?: string;
    }
  }
}

export default class LoggerMiddleware implements IMiddleware {
  use(app: Application): void {
    app.use(
      morgan("dev", {
        stream: { write: (message) => DefaultLogger.info(message.trim()) },
      })
    );
  }
}
