"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAlfaCode = generateAlfaCode;
exports.generateNumericCode = generateNumericCode;

var _NumberUtils = require("../Utils/NumberUtils");

var _StringUtils = require("../Utils/StringUtils");

/**
 * Function used to generate a random numeric code that can be used as a way
 * to check if the real user tried to perform an action or log into their
 * account.
 *
 * @param [size] The length of the MFA code.
 */
function generateNumericCode(size = 6) {
  return (0, _NumberUtils.fixedSizeRandom)(size);
}
/**
 * Function used to generate a random string code that can be used as a way
 * to check if the real user tried to perform an action or log into their
 * account.
 */


function generateAlfaCode() {
  return (0, _StringUtils.shortid)();
}