"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observer = void 0;
exports.observerPlugin = observerPlugin;

var _Logger = require("../../System/Logger");

var _Observable = _interopRequireDefault(require("./Observable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The observer instance we use to observe database changes.
 */
const observer = new _Observable.default();
exports.observer = observer;

/**
 * Adds observable functionality to any Mongoose models that we want to be
 * observable.
 *
 * @param modelName The name of the model we want to observe.
 */
function observerPlugin(modelName) {
  return (schema, opts) => {
    schema.pre("save", next => {
      const emitAction = `${modelName}:save:pre`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${modelName}] emits: [${modelName}:save:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.pre("remove", next => {
      const emitAction = `${modelName}:remove:pre`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${modelName}] emits: [${modelName}:remove:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.post("save", (doc, next) => {
      const emitAction = `${modelName}:save:post`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${modelName}] emits: [${modelName}:save:post]`);
      observer.emit(emitAction, doc);
      next();
    });
    schema.post("remove", (doc, next) => {
      const emitAction = `${modelName}:remove:post`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${modelName}] emits: [${modelName}:remove:post]`);
      observer.emit(emitAction, doc);
      next();
    });
  };
}