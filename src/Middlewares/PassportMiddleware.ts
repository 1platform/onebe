import { Application } from "express";
import passport from "passport";
import IMiddleware from "./IMiddleware";

/**
 * Middleware used to initialize the passport engine for the authentication
 * in the application.
 */
export default class PassportMiddleware implements IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(passport.initialize());
    app.use(passport.session());
  }
}
