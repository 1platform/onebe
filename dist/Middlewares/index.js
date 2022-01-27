"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BodyParserMiddleware = _interopRequireDefault(require("./BodyParserMiddleware"));

var _CORSMiddleware = _interopRequireDefault(require("./CORSMiddleware"));

var _I18NMiddleware = _interopRequireDefault(require("./I18NMiddleware"));

var _LoggerMiddleware = _interopRequireDefault(require("./LoggerMiddleware"));

var _PageInfoMiddleware = _interopRequireDefault(require("./PageInfoMiddleware"));

var _PassportMiddleware = _interopRequireDefault(require("./PassportMiddleware"));

var _SessionMiddleware = _interopRequireDefault(require("./SessionMiddleware"));

var _SparkMiddleware = _interopRequireDefault(require("./SparkMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list containing middlewares to be loaded in the application automatically.
 */
var _default = [new _LoggerMiddleware.default(), new _BodyParserMiddleware.default(), new _CORSMiddleware.default(), new _SessionMiddleware.default(), new _I18NMiddleware.default(), new _PageInfoMiddleware.default(), new _PassportMiddleware.default(), new _SparkMiddleware.default()];
exports.default = _default;