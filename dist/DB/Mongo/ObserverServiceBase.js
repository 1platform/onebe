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
 * A base abstract class used to define Services that use Mongoose models
 * and require observers in order to perform various tasks.
 */
class ObserverServiceBase extends _ServiceBase.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_observer", _ObservablePlugin.observer);
  }

}

exports.default = ObserverServiceBase;