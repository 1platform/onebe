"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abbreviate = abbreviate;
exports.camelCase = camelCase;
exports.encryptPassword = exports.comparePassword = void 0;
Object.defineProperty(exports, "formatter", {
  enumerable: true,
  get: function () {
    return _stringFormat.default;
  }
});
exports.shortid = void 0;
exports.slugify = slugify;
exports.snakeCase = snakeCase;
exports.stripHTML = void 0;
exports.titleCase = titleCase;
exports.uuidV4 = exports.uuidV1 = void 0;

var _bcryptjs = require("bcryptjs");

var _shortid = _interopRequireDefault(require("shortid"));

var _stringFormat = _interopRequireDefault(require("string-format"));

var uuid = _interopRequireWildcard(require("uuid"));

var _stringStripHtml = require("string-strip-html");

var _lodash = require("lodash");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generator for a ShortID that can be used for various things.
 */
const shortid = () => _shortid.default.generate();
/**
 * Generator for a UUID V1 code.
 */


exports.shortid = shortid;

const uuidV1 = () => uuid.v1();
/**
 * Generator for a UUID V4 code.
 */


exports.uuidV1 = uuidV1;

const uuidV4 = () => uuid.v4();
/**
 * Method used to encrypt a password using the hash function from bcryptjs.
 *
 * @param password The password to be encrypted.
 * @param saltSize The size of the salt.
 */


exports.uuidV4 = uuidV4;

const encryptPassword = (password, saltSize = 10) => (0, _bcryptjs.hashSync)(password, saltSize);
/**
 * Method used to compare an encrypted password with the one entered by the user.
 *
 * @param password The password to be compared.
 * @param encryptedPassword The encrypted password,
 */


exports.encryptPassword = encryptPassword;

const comparePassword = (password, encryptedPassword) => (0, _bcryptjs.compareSync)(password, encryptedPassword);

exports.comparePassword = comparePassword;

/**
 * Strips the HTML tags from a given text.
 *
 * @param text The text to be striped.
 */
const stripHTML = text => (0, _stringStripHtml.stripHtml)(text).result;
/**
 * Converts string into camelCase.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Camel Cased.
 * @param firstCapital Flag to mark the first letter as a capital one.
 */


exports.stripHTML = stripHTML;

function camelCase(str, firstCapital = false) {
  let convertedValue = (0, _lodash.camelCase)(str);

  if (firstCapital) {
    convertedValue = `${convertedValue.substring(0, 1).toUpperCase()}${convertedValue.substring(1)}`;
  }

  return convertedValue;
}
/**
 * Converts string into snake_case.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Snake Cased.
 * @param [separator] A separator to be used when converting to snake_case.
 */


function snakeCase(str, separator = "_") {
  return str // ABc -> a_bc
  .replace(/([A-Z])([A-Z])([a-z])/g, `$1${separator}$2$3`) // aC -> a_c
  .replace(/([a-z0-9])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}
/**
 * Converts string into Title Case.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Title Cased
 */


function titleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
}
/**
 * Builds abbreviated string from given string;
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be abbreviated.
 * @param abbrLettersCount How many letters to be used for the abbreviation.
 */


function abbreviate(str, abbrLettersCount = 1) {
  const words = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").split(" ");
  return words.reduce((res, word) => {
    res += word.substring(0, abbrLettersCount);
    return res;
  }, "");
}
/**
 * Generate a slug based on the given string.
 *
 * @param str The string to be converted to a slug.
 */


function slugify(str) {
  const words = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").split(" ");
  return words.map(word => word.toLowerCase()).join("-");
}