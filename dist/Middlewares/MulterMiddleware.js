"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayUpload = ArrayUpload;
exports.NamedFilesUpload = NamedFilesUpload;
exports.SingleUpload = SingleUpload;
exports.VerifyURL = VerifyURL;
exports.getDestinationFolder = getDestinationFolder;
exports.signURL = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _signed = _interopRequireDefault(require("signed"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _MetadataStore = _interopRequireDefault(require("../Documentation/MetadataStore"));

var _DataTypes = require("../Documentation/Definition/DataTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Upload middleware instance that can be used in your application.
 */
const upload = (0, _multer.default)({
  dest: _Config.default.string("upload.temp")
});
/**
 * Instance of the URL signing utility that can be used to sign requests that
 * return a file - for the situations where the file is available only if the
 * user is authenticated.
 */

const signature = (0, _signed.default)({
  secret: _Config.default.string("upload.secret"),
  ttl: 60
});
/**
 * A list with all the options that you can pass to the sign method.
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
 * Function used to create signed URLs.
 *
 * @param url The URL to be signed.
 * @param [options] The options used for the URL signing.
 *
 * @return {string}
 */


const signURL = (url, options) => signature.sign(url, {
  method: options?.method,
  ttl: options?.timeToLive,
  exp: options?.expireAt,
  addr: options?.address
});
/**
 * Decorator to add the Single file upload middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */


exports.signURL = signURL;

function SingleUpload(fieldName) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];

    _MetadataStore.default.instance.route.isUpload(target.constructor.name, propertyKey);

    _MetadataStore.default.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, [{
      name: fieldName,
      type: _DataTypes.BodyParameterType.FILE
    }]);

    descriptor.value = [upload.single(fieldName), ...original];
  };
}
/**
 * Decorator to add the Multiple file upload with different names middleware.
 *
 * @decorator
 * @param names The names of the fields in the file uploader.
 */


function NamedFilesUpload(...names) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];

    _MetadataStore.default.instance.route.isUpload(target.constructor.name, propertyKey, true);

    names.map(name => {
      _MetadataStore.default.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, [{
        name,
        type: _DataTypes.BodyParameterType.FILE
      }]);
    });
    descriptor.value = [upload.fields(names.map(name => ({
      name,
      maxCount: 1
    }))), ...original];
  };
}
/**
 * Decorator to add the Multiple file upload under the same name middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */


function ArrayUpload(fieldName) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];

    _MetadataStore.default.instance.route.isUpload(target.constructor.name, propertyKey, true);

    _MetadataStore.default.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, [{
      name: fieldName,
      type: _DataTypes.BodyParameterType.FILE,
      isArray: true
    }]);

    descriptor.value = [upload.array(fieldName), ...original];
  };
}
/**
 * Middleware used to verify if a signed URL is valid.
 *
 * @decorator
 */


function VerifyURL() {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];

    _MetadataStore.default.instance.route.isSigned(target.constructor.name, propertyKey);

    _MetadataStore.default.instance.route.endpointQuery(target.constructor.name, propertyKey, {
      name: "signed",
      type: _DataTypes.QueryParameterType.STRING,
      description: "The hash required to verify if the signed URL is valid."
    });

    descriptor.value = [signature.verifier(), ...original];
  };
} // TODO: Add support to check if the uploaded file is: Of Type or With Max Size.