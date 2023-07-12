import bodyParser from "body-parser";
import { Application } from "express";

import IMiddleware from "@/Middlewares/IMiddleware";

/**
 * Middleware used to parse the body of the request and return the right data
 * in the `body` parameter of the `request` object.
 */
export default class BodyParserMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(
      bodyParser.json({
        verify(req: any, res: any, buf: Buffer) {
          req.rawBody = buf;
        },
      })
    );
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.text());
  }
}
