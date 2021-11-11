import { Application, NextFunction, Request, Response } from "express";
import getVersion from "../version";
import IMiddleware from "./IMiddleware";

/**
 * The Spark Middleware.
 */
export default class SparkMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("X-Powered-By", "onebe");
      res.setHeader("X-Onebe-App", `v${ getVersion() }`);
      next();
    });
  }
}
