import { Application, NextFunction, Request, Response } from "express";
import IMiddleware from "./IMiddleware";

/**
 * Page information middleware
 */
export default class PageInfoMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      req.pageURL = `${ app.locals.appURL }${ req.path }`.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
      req.appURL = app.locals.appURL;
      res.locals.pageURL = req.pageURL;
      req.authContext = {};
      next();
    });
  }
}
