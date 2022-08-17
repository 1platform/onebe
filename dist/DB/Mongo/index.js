"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Mongo connection handler class.
 *
 * Using this class you can connect and use MongoDB and Mongoose in
 * your application. We would recommend using TypeORM for the database
 * handling part, but if you need a simpler ORM for your application,
 * use this module.
 */
class Mongo {
  constructor() {
    _defineProperty(this, "_maxRetry", 5);

    _defineProperty(this, "_try", 0);
  }

  /**
   * Performs the database connection and initialisation.
   */
  init() {
    return new Promise((resolve, reject) => {
      this._init(resolve, reject);
    });
  }
  /**
   * Performs the database connection and initialisation. If the database connection fails,
   * it will retry for the `_maxRetry` number of times, with a 5 seconds delay.
   * If the connection fails after `_maxRetry` number of times, it will throw an error.
   *
   * @param resolve The function used to send a successful message to the caller function.
   * @param reject The function used to send an error message to the caller function.
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
        (0, _Logger.getDefaultLogger)().error(`Mongoose connection error: ${err}`);

        if (this._try < this._maxRetry) {
          setTimeout(() => this._init(resolve, reject), 5000);
          return;
        }

        reject(err);
        return;
      }

      (0, _Logger.getDefaultLogger)().info("Mongoose database connected.");
      resolve();
    });
  }

}

exports.default = Mongo;