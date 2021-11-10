import bodyParser from "body-parser";
import { Application } from "express";
import IMiddleware from "./IMiddleware";

/**
 * The Body Parser middleware.
 */
export default class BodyParserMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.text());
  }
}
