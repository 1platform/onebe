"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _App.default();
/**
 * The Application instance that can be used throughout the application to get various pieces
 * of information or to enable the reuse of code.
 */

var _default = app;
/**
 * The global reference to the Application object.
 */

exports.default = _default;
global.app = app;
/**
 * An alias for the global reference of the Application object.
 */

global.onebe = app;