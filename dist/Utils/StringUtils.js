"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptPassword = exports.comparePassword = void 0;
Object.defineProperty(exports, "formatter", {
  enumerable: true,
  get: function () {
    return _stringFormat.default;
  }
});
exports.uuidV4 = exports.uuidV1 = exports.stripHTML = exports.shortid = void 0;

var _bcryptjs = require("bcryptjs");

var _shortid = _interopRequireDefault(require("shortid"));

var _stringFormat = _interopRequireDefault(require("string-format"));

var uuid = _interopRequireWildcard(require("uuid"));

var _stringStripHtml = require("string-strip-html");

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

exports.stripHTML = stripHTML;