"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for the Database
 */
const defaultDBConfig = {
  /**
   * The default value for the database engine which will be used in the application.
   */
  engine: _Env.default.string("DATABASE_ENGINE", "mongodb"),

  /**
   * The default mongo configuration
   */
  mongo: {
    /**
     * The default value of the url used to connect to the mongo database.
     */
    url: _Env.default.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe")
  }
};
var _default = defaultDBConfig;
exports.default = _default;