"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultUploadConfig = {
  temp: _Env.default.string("UPLOAD_TEMP", "./tmp"),
  storage: _Env.default.string("UPLOAD_DESTINATION", "./storage"),
  secret: _Env.default.string("UPLOAD_SECRET", "test")
};
var _default = defaultUploadConfig;
exports.default = _default;