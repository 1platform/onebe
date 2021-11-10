"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = _interopRequireDefault(require("../../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class representing a Mongo DB handler
 */
class Mongo {
  constructor() {
    _defineProperty(this, "_maxRetry", 5);

    _defineProperty(this, "_try", 0);
  }

  /**
   * Calls the respective init method
   */
  init() {
    return new Promise((resolve, reject) => {
      this._init(resolve, reject);
    });
  }
  /**
   * Initializes database connection
   */


  _init(resolve, reject) {
    _mongoose.default.connect(_Config.default.string("db.mongo.url", "mongodb://localhost:27017/onebe"), {
      autoIndex: true,
      keepAlive: true,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4
    }, err => {
      this._try += 1;

      if (err) {
        _Logger.default.error(`Mongoose connection error: ${err}`);

        if (this._try < this._maxRetry) {
          setTimeout(() => this._init(resolve, reject), 5000);
          return;
        }

        reject(err);
        return;
      }

      _Logger.default.info("Database connected.");

      resolve();
    });
  }

}

exports.default = Mongo;