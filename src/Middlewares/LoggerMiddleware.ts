import { Application } from "express";
import morgan from "morgan";
import DefaultLogger from "../System/Logger";
import IMiddleware from "./IMiddleware";

/**
 * The logger middleware.
 */
export default class LoggerMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(
      morgan("dev", {
        stream: { write: (message) => DefaultLogger.info(message.trim()) },
      })
    );
  }
}
