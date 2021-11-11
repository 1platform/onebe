"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Config = _interopRequireDefault(require("../System/Config"));

var _Mongo = _interopRequireDefault(require("./Mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initializes the database engine we will use in the application.
 */
function _default() {
  switch (_Config.default.string("db.engine", "mongo")) {
    case "mongo":
      return new _Mongo.default().init();
  }
}