"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware used to parse the body of the request and return the right data
 * in the `body` parameter of the `request` object.
 */
class BodyParserMiddleware {
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  use(app) {
    app.use(_bodyParser.default.json());
    app.use(_bodyParser.default.urlencoded({
      extended: true
    }));
    app.use(_bodyParser.default.text());
  }

}

exports.default = BodyParserMiddleware;