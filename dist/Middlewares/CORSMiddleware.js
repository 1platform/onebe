"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CORSMiddleware {
  use(app) {
    app.use((0, _cors.default)());
  }

}

exports.default = CORSMiddleware;