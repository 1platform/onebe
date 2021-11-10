"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDestinationFolder = getDestinationFolder;
exports.namedFiles = namedFiles;
exports.signURL = void 0;
exports.singleUpload = singleUpload;
exports.verifierURL = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _signed = _interopRequireDefault(require("signed"));

var _RouteUtils = require("../Router/RouteUtils");

var _Config = _interopRequireDefault(require("../System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const upload = (0, _multer.default)({
  dest: _Config.default.string("upload.temp")
});
const signature = (0, _signed.default)({
  secret: _Config.default.string("upload.secret"),
  ttl: 60
});
/**
 * Sign method options.
 */

/**
 * Function used to get the destination folder/file from the upload destination folder.
 *
 * @param pathLike The list of path like elements.
 */
function getDestinationFolder(...pathLike) {
  return _path.default.resolve(_Config.default.string("upload.destination"), ...pathLike);
}
/**
 * Middleware used to verify if a signed URL is valid.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */


const verifierURL = (0, _RouteUtils.defineMiddleware)(signature.verifier());
/**
 * Function used to create signed URLs.
 *
 * @param {string} url The URL to be signed.
 * @param {SignMethodOptions} [options] The options used for the URL signing.
 *
 * @return {string}
 */

exports.verifierURL = verifierURL;
const signURL = signature.sign.bind(signature);
/**
 * Single file upload middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */

exports.signURL = signURL;

function singleUpload(fieldName) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
    descriptor.value = [upload.single(fieldName), ...original];
  };
}
/**
 * Multiple file upload middleware.
 *
 * @decorator
 * @param names The names of the fields in the file uploader.
 */


function namedFiles(...names) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
    descriptor.value = [upload.fields(names.map(name => ({
      name,
      maxCount: 1
    }))), ...original];
  };
}