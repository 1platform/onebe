"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The upload middleware configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * Upload Middleware functionality of the application.
 */
const defaultUploadConfig = {
  /**
   * The temporary folder location. In this folder the framework will store the uploaded
   * files here before moving them to your destination folder. We recommend to move the
   * temporary folder outside the application folder.
   *
   * @default "./tmp"
   */
  temp: _Env.default.string("UPLOAD_TEMP", "./tmp"),

  /**
   * The destination path for the uploaded files. In this folder the framework will store
   * the uploaded files after they are processed. We recommend to move the destination
   * folder outside the application folder.
   *
   * @default "./storage"
   */
  storage: _Env.default.string("UPLOAD_DESTINATION", "./storage"),

  /**
   * Since security is very important for us (and you), the upload middleware will need a
   * secret word to easily sign the upload and download links that can be later used by the users
   * of your application to work with files.
   *
   * @default "test"
   */
  secret: _Env.default.string("UPLOAD_SECRET", "test")
};
var _default = defaultUploadConfig;
exports.default = _default;