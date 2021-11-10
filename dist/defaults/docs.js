"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default value for Docs config in Env
 */
const defaultDocsConfig = {
  expose: _Env.default.flag("EXPOSE_DOCS")
};
var _default = defaultDocsConfig;
exports.default = _default;