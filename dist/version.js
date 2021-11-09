"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codename = void 0;
exports.default = getVersion;
exports.version = void 0;

var _build = _interopRequireDefault(require("./build"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const codename = "No one knows yet...";
exports.codename = codename;
const version = "0.1.0";
exports.version = version;

function getVersion() {
  return `${version}-${_build.default}`;
}