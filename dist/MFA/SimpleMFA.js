"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAlfaCode = generateAlfaCode;
exports.generateNumericCode = generateNumericCode;

var _NumberUtils = require("../Utils/NumberUtils");

var _StringUtils = require("../Utils/StringUtils");

/**
 * Generate a numeric MFA code.
 *
 * @param size The length of the MFA code.
 */
function generateNumericCode(size = 6) {
  return (0, _NumberUtils.fixedSizeRandom)(size).toFixed(0);
}
/**
 * Returns an AlphaNumeric MFA Code.
 */


function generateAlfaCode() {
  return (0, _StringUtils.shortid)();
}