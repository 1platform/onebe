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
 * The observer instance we use to observe changes.
 */
const observer = new _Observable.default();
exports.observer = observer;

/**
 * Creates an observer for our model.
 *
 * @param name The name of the model.
 */
function observerPlugin(name) {
  return (schema, opts) => {
    schema.pre("save", next => {
      const emitAction = `${name}:save:pre`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${name}] emits: [${name}:save:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.pre("remove", next => {
      const emitAction = `${name}:remove:pre`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${name}] emits: [${name}:remove:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.post("save", (doc, next) => {
      const emitAction = `${name}:save:post`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${name}] emits: [${name}:save:post]`);
      observer.emit(emitAction, doc);
      next();
    });
    schema.post("remove", (doc, next) => {
      const emitAction = `${name}:remove:post`.toLowerCase();
      (0, _Logger.getDefaultLogger)().debug(`Model: [${name}] emits: [${name}:remove:post]`);
      observer.emit(emitAction, doc);
      next();
    });
  };
}