"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _App.default();
/**
 * The global instance of the application.
 */

global.app = app;
/**
 * The instance of the application.
 */

var _default = app;
exports.default = _default;