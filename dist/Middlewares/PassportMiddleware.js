"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PassportMiddleware {
  use(app) {
    app.use(_passport.default.initialize());
    app.use(_passport.default.session());
  }

}

exports.default = PassportMiddleware;