import { Application } from "express";

/**
 * An interface used to describe how a Middleware class should look like. When you
 * want to create a middleware or add support for an existing functionality into the
 * application, use this interface as the base and look into how the other middlewares
 * are loaded.
 */
export default interface IMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  use(app: Application): void;
}
