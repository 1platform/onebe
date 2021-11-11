"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ObservableType = void 0;

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Defines Observable Types
 * */
let ObservableType;
exports.ObservableType = ObservableType;

(function (ObservableType) {
  ObservableType["SAVE"] = "save";
  ObservableType["REMOVE"] = "remove";
})(ObservableType || (exports.ObservableType = ObservableType = {}));

/**
 * Class representing an Observable
 * @class
 * */
class Observable extends _events.default {
  /**
   * Registers an Observable
   * @param entityName The name of the entity
   * @param type The type of the Observable
   * @param isPost if the action is a POST
   * @param callback The callback to be executed
   * */
  registerObservable(entityName, type, isPost, callback) {
    this.on(`${entityName}:${type}:${isPost ? "post" : "pre"}`.toLowerCase(), callback);
  }
  /**
   * Registers a Save Post Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */


  registerSavePost(entityName, callback) {
    this.registerObservable(entityName, ObservableType.SAVE, true, callback);
  }
  /**
   * Registers a Remove Post Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */


  registerRemovePost(entityName, callback) {
    this.registerObservable(entityName, ObservableType.REMOVE, true, callback);
  }
  /**
   * Registers a Pre Save Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */


  registerSavePre(entityName, callback) {
    this.registerObservable(entityName, ObservableType.SAVE, false, callback);
  }
  /**
   * Registers a Pre Remove Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */


  registerRemovePre(entityName, callback) {
    this.registerObservable(entityName, ObservableType.REMOVE, false, callback);
  }

}

exports.default = Observable;