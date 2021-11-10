"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceBase = _interopRequireDefault(require("../../Services/ServiceBase"));

var _ObservablePlugin = require("./ObservablePlugin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An abstract class representing an Observer base
 * @class
 */
class ObserverBase extends _ServiceBase.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_observer", _ObservablePlugin.observer);
  }

}

exports.default = ObserverBase;