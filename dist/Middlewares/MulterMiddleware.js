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

function getDestinationFolder(...pathLike) {
  return _path.default.resolve(_Config.default.string("upload.destination"), ...pathLike);
}

const verifierURL = (0, _RouteUtils.defineMiddleware)(signature.verifier());
exports.verifierURL = verifierURL;
const signURL = signature.sign.bind(signature);
exports.signURL = signURL;

function singleUpload(fieldName) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
    descriptor.value = [upload.single(fieldName), ...original];
  };
}

function namedFiles(...names) {
  return (target, propertyKey, descriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
    descriptor.value = [upload.fields(names.map(name => ({
      name,
      maxCount: 1
    }))), ...original];
  };
}