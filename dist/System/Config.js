"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Configuration = void 0;

var _consign = _interopRequireDefault(require("consign"));

var _lodash = require("lodash");

var _defaults = _interopRequireDefault(require("../defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The configuration store that we are using in our application.
 */
class Configuration {
  /**
   * The internal configuration store.
   */

  /**
   * Constructor of the configuration class.
   */
  constructor() {
    _defineProperty(this, "_config", {});

    this.load(_defaults.default);
  }
  /**
   * Clears the internal configuration store.
   */


  clear() {
    this._config = {};
  }
  /**
   * Initializes the configuration object with values from the
   * configuration folder.
   *
   * @param configFolder The folder containing the configuration files.
   */


  init(configFolder = "./config") {
    const configFromFile = {};
    (0, _consign.default)({
      cwd: process.cwd(),
      verbose: false,
      extensions: [".js", ".json", ".node", ".ts"],
      loggingType: "info"
    }).include(configFolder).into(configFromFile);
    this.load(configFromFile["config"]);
  }
  /**
   * Loads configuration items into our application.
   *
   * @param configStore The configuration store that we want to merge into the local config.
   */


  load(configStore) {
    this._config = (0, _lodash.merge)(this._config, configStore);
  }
  /**
   * Returns the string value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */


  get(key, defaultValue = null) {
    const keySplit = key.split(".");
    const value = keySplit.reduce((accum, value) => !accum ? defaultValue : accum[value], this._config);
    return value !== null && value !== undefined ? value.toString() : defaultValue;
  }
  /**
   * Returns the object value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */


  object(key, defaultValue = null) {
    const keySplit = key.split(".");
    const value = keySplit.reduce((accum, value) => !accum ? defaultValue : accum[value], this._config);
    return value.toString() ?? defaultValue;
  }
  /**
   * Returns all the configuration properties.
   */


  all() {
    return this._config;
  }
  /**
   * Returns the string value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */


  string(key, defaultValue = "") {
    return this.get(key) || defaultValue;
  }
  /**
   * Returns the numeric value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */


  number(key, defaultValue = 0) {
    return Number(this.get(key) || defaultValue);
  }
  /**
   * Returns the boolean value of the given configuration key.
   *
   * @param key The configuration key.
   */


  boolean(key) {
    return this.get(key, "false").toUpperCase() === "TRUE";
  }

}

exports.Configuration = Configuration;
const Config = new Configuration();
global.config = Config;
var _default = Config;
exports.default = _default;