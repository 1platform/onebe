"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Page information middleware
 */
class PageInfoMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  use(app) {
    app.use((req, res, next) => {
      req.pageURL = `${app.locals.appURL}${req.path}`.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
      req.appURL = app.locals.appURL;
      res.locals.pageURL = req.pageURL;
      next();
    });
  }

}

exports.default = PageInfoMiddleware;