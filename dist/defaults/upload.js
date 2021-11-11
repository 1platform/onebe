"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Env = _interopRequireDefault(require("../System/Env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default configuration for Upload services.
 */
const defaultUploadConfig = {
  /**
   * The default value of the temporary storage.
   */
  temp: _Env.default.string("UPLOAD_TEMP", "./tmp"),

  /**
   * The default value of the storage.
   */
  storage: _Env.default.string("UPLOAD_DESTINATION", "./storage"),

  /**
   * The default value of the secret.
   */
  secret: _Env.default.string("UPLOAD_SECRET", "test")
};
var _default = defaultUploadConfig;
exports.default = _default;