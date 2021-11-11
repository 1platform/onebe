"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default values for DB config in Env
 */
const defaultDBConfig = {
  engine: _Env.default.string("DATABASE_ENGINE", "mongodb"),
  mongo: {
    url: _Env.default.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe")
  }
};
var _default = defaultDBConfig;
exports.default = _default;