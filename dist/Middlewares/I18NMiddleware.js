"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextHttpMiddleware = require("i18next-http-middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The i18n middleware.
 */
class I18nMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  use(app) {
    app.use((0, _i18nextHttpMiddleware.handle)(_i18next.default));
  }

}

exports.default = I18nMiddleware;