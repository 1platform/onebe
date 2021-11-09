"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _version = _interopRequireDefault(require("../version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SparkMiddleware {
  use(app) {
    app.use((req, res, next) => {
      res.setHeader("X-Powered-By", "onebe");
      res.setHeader("X-Onebe-App", `v${(0, _version.default)()}`);
      next();
    });
  }

}

exports.default = SparkMiddleware;