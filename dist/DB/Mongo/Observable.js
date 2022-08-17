"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ObservableType = void 0;

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list with what can be observed in a Mongoose model.
 *
 * @enum
 */
let ObservableType;
/**
 * Type used to define what a callback used to register an observer function should look like.
 *
 * @param document The document we want to observe.
 */

exports.ObservableType = ObservableType;

(function (ObservableType) {
  ObservableType["SAVE"] = "save";
  ObservableType["REMOVE"] = "remove";
})(ObservableType || (exports.ObservableType = ObservableType = {}));

/**
 * Class used to perform observable actions to a Mongoose model.
 *
 * Using this class we register observers that can perform various tasks
 * on the Mongoose model when an action happens (Save or Remove).
 * Through the usage of Observers we can do updates on related elements
 * from other models (think at the cascade delete action).
 */
class Observable extends _events.default {
  /**
   * Method used to register an observer for a given model, with a given type,
   * at a given time moment (pre- or post-action).
   *
   * @param modelName The name of the model for which we want to register the observer.
   * @param type The type of the Observable action.
   * @param isPost The moment of the action (true = POST, false = PRE).
   * @param observerCallback The observer to be executed.
   */
  registerObservable(modelName, type, isPost, observerCallback) {
    this.on(`${modelName}:${type}:${isPost ? "post" : "pre"}`.toLowerCase(), observerCallback);
  }
  /**
   * Register a post save observer for a given model.
   *
   * @param modelName The name of the model for which we want to register the observer.
   * @param observerCallback The observer to be executed.
   */


  registerSavePost(modelName, observerCallback) {
    this.registerObservable(modelName, ObservableType.SAVE, true, observerCallback);
  }
  /**
   * Register a post remove observer for a given model.
   *
   * @param modelName The name of the model for which we want to register the observer.
   * @param observerCallback The observer to be executed.
   * */


  registerRemovePost(modelName, observerCallback) {
    this.registerObservable(modelName, ObservableType.REMOVE, true, observerCallback);
  }
  /**
   * Register a pre save observer for a given model.
   *
   * @param modelName The name of the model for which we want to register the observer.
   * @param observerCallback The observer to be executed.
   * */


  registerSavePre(modelName, observerCallback) {
    this.registerObservable(modelName, ObservableType.SAVE, false, observerCallback);
  }
  /**
   * Register a pre remove observer for a given model.
   *
   * @param modelName The name of the model for which we want to register the observer.
   * @param observerCallback The observer to be executed.
   * */


  registerRemovePre(modelName, observerCallback) {
    this.registerObservable(modelName, ObservableType.REMOVE, false, observerCallback);
  }

}

exports.default = Observable;