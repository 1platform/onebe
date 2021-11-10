import { Application } from "express";
import i18next from "i18next";
import { handle } from "i18next-http-middleware";
import IMiddleware from "./IMiddleware";

/**
 * The i18n middleware.
 */
export default class I18nMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(handle(i18next));
  }
}
