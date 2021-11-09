import { Application, NextFunction, Request, Response } from "express";
import getVersion from "../version";
import IMiddleware from "./IMiddleware";

export default class SparkMiddleware implements IMiddleware {
  use(app: Application): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("X-Powered-By", "onebe");
      res.setHeader("X-Onebe-App", `v${ getVersion() }`);
      next();
    });
  }
}
