import { Application } from "express";
import morgan from "morgan";
import { getDefaultLogger } from "@/System/Logger";
import IMiddleware from "@/Middlewares/IMiddleware";
import Config from "@/System/Config";

/**
 * Middleware used to add logging support to the Express application.
 */
export default class LoggerMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(
      morgan(Config.get("http.logFormat", "combined"), {
        stream: { write: (message) => getDefaultLogger().info(message.trim()) },
      })
    );
  }
}
