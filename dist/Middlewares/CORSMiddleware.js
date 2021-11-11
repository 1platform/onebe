"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _Config = _interopRequireDefault(require("../System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The CORS middleware.
 */
class CORSMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  use(app) {
    app.use((0, _cors.default)(_Config.default.object("http.cors", {
      origin: "*"
    })));
  }

}

exports.default = CORSMiddleware;