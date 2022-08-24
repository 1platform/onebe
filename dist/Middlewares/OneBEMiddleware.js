"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _version = require("../version");

/**
 * Middleware used to add information about the framework.
 */
class OneBEMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  use(app) {
    app.use((req, res, next) => {
      res.setHeader("X-OneBE-Version", `v${(0, _version.getVersion)()}`);
      next();
    });
  }

}

exports.default = OneBEMiddleware;