"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _Logger = _interopRequireDefault(require("../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoggerMiddleware {
  use(app) {
    app.use((0, _morgan.default)("dev", {
      stream: {
        write: message => _Logger.default.info(message.trim())
      }
    }));
  }

}

exports.default = LoggerMiddleware;