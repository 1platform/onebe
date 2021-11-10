import { Application, NextFunction, Request, Response } from "express";
import IMiddleware from "./IMiddleware";

declare global {
  namespace Express {
    export interface Request {
      pageURL?: string;
      appURL?: string;
    }
  }
}

export default class PageInfoMiddleware implements IMiddleware {
  use(app: Application): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      req.pageURL = `${ app.locals.appURL }${ req.path }`.replace(
        /(https?:\/\/)|(\/)+/g,
        "$1$2"
      );
      req.appURL = app.locals.appURL;
      res.locals.pageURL = req.pageURL;
      next();
    });
  }
}
