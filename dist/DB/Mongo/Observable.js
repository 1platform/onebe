"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObservableType;

(function (ObservableType) {
  ObservableType["SAVE"] = "save";
  ObservableType["REMOVE"] = "remove";
})(ObservableType || (ObservableType = {}));

class Observable extends _events.default {
  registerObservable(entityName, type, isPost, callback) {
    this.on(`${entityName}:${type}:${isPost ? "post" : "pre"}`.toLowerCase(), callback);
  }

  registerSavePost(entityName, callback) {
    this.registerObservable(entityName, ObservableType.SAVE, true, callback);
  }

  registerRemovePost(entityName, callback) {
    this.registerObservable(entityName, ObservableType.REMOVE, true, callback);
  }

  registerSavePre(entityName, callback) {
    this.registerObservable(entityName, ObservableType.SAVE, false, callback);
  }

  registerRemovePre(entityName, callback) {
    this.registerObservable(entityName, ObservableType.REMOVE, false, callback);
  }

}

exports.default = Observable;