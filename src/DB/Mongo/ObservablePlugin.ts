import { CallbackError, Model, Schema } from "mongoose";
import { getDefaultLogger } from "../../System/Logger";
import Observable from "./Observable";

/**
 * The observer instance we use to observe database changes.
 */
const observer: Observable = new Observable();

export { observer };

/**
 * The definition of the observer plugin function returned by the Observer Plugin function.
 *
 * @param schema The schema for which we want to observe changes.
 * @param opts Various other options passed by Mongoose.
 */
export type PluginFunction<DocType = Document, SchemaDefinitionType = undefined> = (
  schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>,
  opts?: any
) => void;

/**
 * Type definition for the function used to call the next available hook (callback).
 *
 * @param err The errors, if any, passed to the next callback.
 */
export type HookNextFunction = (err?: CallbackError) => void;

/**
 * Adds observable functionality to any Mongoose models that we want to be
 * observable.
 *
 * @param modelName The name of the model we want to observe.
 */
export function observerPlugin<DocType = Document, SchemaDefinitionType = undefined>(
  modelName: string
): PluginFunction<DocType, SchemaDefinitionType> {
  return (schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>, opts?: any) => {
    schema.pre("save", (next: HookNextFunction) => {
      const emitAction = `${ modelName }:save:pre`.toLowerCase();
      getDefaultLogger().debug(`Model: [${ modelName }] emits: [${ modelName }:save:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.pre("remove", (next: HookNextFunction) => {
      const emitAction = `${ modelName }:remove:pre`.toLowerCase();
      getDefaultLogger().debug(`Model: [${ modelName }] emits: [${ modelName }:remove:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.post("save", (doc: Document, next: HookNextFunction) => {
      const emitAction = `${ modelName }:save:post`.toLowerCase();
      getDefaultLogger().debug(`Model: [${ modelName }] emits: [${ modelName }:save:post]`);
      observer.emit(emitAction, doc);
      next();
    });
    schema.post("remove", (doc: Document, next: HookNextFunction) => {
      const emitAction = `${ modelName }:remove:post`.toLowerCase();
      getDefaultLogger().debug(`Model: [${ modelName }] emits: [${ modelName }:remove:post]`);
      observer.emit(emitAction, doc);
      next();
    });
  };
}
