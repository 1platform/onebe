"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consign = _interopRequireDefault(require("consign"));

var _lodash = require("lodash");

var _defaults = _interopRequireDefault(require("../defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Configuration {
  constructor() {
    _defineProperty(this, "_config", {});

    this.load(_defaults.default);
  }

  clear() {
    this._config = {};
  }

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

  load(configStore) {
    this._config = (0, _lodash.merge)(this._config, configStore);
  }

  get(key, defaultValue = null) {
    const keySplit = key.split(".");
    const value = keySplit.reduce((accum, value) => !accum ? defaultValue : accum[value], this._config);
    return value !== null && value !== undefined ? value.toString() : defaultValue;
  }

  all() {
    return this._config;
  }

  string(key, defaultValue = "") {
    return this.get(key) || defaultValue;
  }

  number(key, defaultValue = 0) {
    return Number(this.get(key) || defaultValue);
  }

  boolean(key) {
    return this.get(key, "false").toUpperCase() === "TRUE";
  }

}

const Config = new Configuration();
var _default = Config;
exports.default = _default;