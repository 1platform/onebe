import { Application, NextFunction, Request, Response } from "express";
import IMiddleware from "@/Middlewares/IMiddleware";

/**
 * Middleware that adds additional information to the request object. Through this
 * middleware you get access to the full App URL string and to the specific path your user
 * tried to access.
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
