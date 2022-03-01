"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codename = void 0;
exports.default = getVersion;
exports.version = void 0;

var _build = _interopRequireDefault(require("./build"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The version codename of the framework.
 */
const codename = "No one knows yet...";
/**
 * The version of the framework.
 */

exports.codename = codename;
const version = "1.0.23";
/**
 * Function that returns the full version string (version + buildId)
 */

exports.version = version;

function getVersion() {
  return `${version}-${_build.default}`;
}