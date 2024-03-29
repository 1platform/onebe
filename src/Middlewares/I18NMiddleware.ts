import { Application } from "express";
import i18next from "i18next";
import { handle } from "i18next-http-middleware";

import IMiddleware from "@/Middlewares/IMiddleware";

/**
 * Middleware used to enable the Internationalisation (i18n) support for the application endpoints.
 * Since you might want to have the messages translated to the language chosen by the user
 * when the request was made, the i18n support needs to be added to the request object.
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
