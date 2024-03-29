import cors from "cors";
import { Application } from "express";

import IMiddleware from "@/Middlewares/IMiddleware";
import Config from "@/System/Config";

/**
 * Middleware used to enable the Cross-Origin Resource Sharing functionality for
 * your application.
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
