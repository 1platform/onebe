import cors from "cors";
import { Application } from "express";
import Config from "../System/Config";
import IMiddleware from "./IMiddleware";

/**
 * The CORS middleware.
 */
export default class CORSMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(cors(Config.object("http.cors", { origin: "*" })));
  }
}
