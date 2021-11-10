"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PageNotFoundException = _interopRequireDefault(require("../Exceptions/PageNotFoundException"));

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _Logger = _interopRequireDefault(require("../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The Error Handler Middleware.
 */
class ErrorHandlerMiddleware {
  /**
   * A list of handlers to be ran before the Error Handler Middleware
   */

  /**
   * Add a handler to the before error handler array.
   */
  static addBeforeHandler(handler) {
    ErrorHandlerMiddleware._beforeHandler.push(handler);
  }
  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */


  use(app) {
    app.use((req, res, next) => {
      next(new _PageNotFoundException.default());
    });

    if (ErrorHandlerMiddleware._beforeHandler && ErrorHandlerMiddleware._beforeHandler.length > 0) {
      app.use(...ErrorHandlerMiddleware._beforeHandler);
    }

    app.use((error, req, res, next) => {
      const status = error.status || _HTTPStatus.default.SERVER_ERROR;
      const message = req.t(error.message || "errors.something-wong", _objectSpread({}, error.parameters || {}));
      let {
        details
      } = error;

      if (details) {
        details = details.reduce((accum, detail) => _objectSpread(_objectSpread({}, accum), {}, {
          [detail.path.join(".")]: `${detail.message}${detail.context && ` (Value: ${detail.context.value})`}`
        }), {});
      } else {
        details = "";
      }

      _Logger.default.error(`[HTTP ${status}]: ${message}`);

      _Logger.default.debug(error);

      _Logger.default.debug(error.stack);

      if (details) {
        _Logger.default.debug(JSON.stringify(details));
      }

      res.status(status).json({
        status,
        message,
        details
      });
    });
  }

}

exports.default = ErrorHandlerMiddleware;

_defineProperty(ErrorHandlerMiddleware, "_beforeHandler", []);