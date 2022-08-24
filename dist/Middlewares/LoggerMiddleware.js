"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _Logger = require("../System/Logger");

var _Config = _interopRequireDefault(require("../System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware used to add logging support to the Express application.
 */
class LoggerMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  use(app) {
    app.use((0, _morgan.default)(_Config.default.get("http.logFormat", "combined"), {
      stream: {
        write: message => (0, _Logger.getDefaultLogger)().info(message.trim())
      }
    }));
  }

}

exports.default = LoggerMiddleware;