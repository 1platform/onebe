import { CallbackError, Model, Schema } from "mongoose";
import DefaultLogger from "../../System/Logger";
import Observable from "./Observable";

/**
 * The observer instance we use to observe changes.
 */
const observer = new Observable();

export { observer };

/**
 * The definition of the observer plugin function returned by the observerPlugin function.
 *
 * @param schema The schema for which we want to observe changes.
 * @param opts Various other options passed by Mongoose.
 */
export type PluginFunction<
  DocType = Document,
  SchemaDefinitionType = undefined
> = (
  schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>,
  opts?: any
) => void;

/**
 * The definition of the next hook function.
 *
 * @param err The errors, if any, passed to the next callback.
 */
export type HookNextFunction = (err?: CallbackError) => void;

/**
 * Creates an observer for our model.
 *
 * @param name The name of the model.
 */
export function observerPlugin<
  DocType = Document,
  SchemaDefinitionType = undefined
>(name: string): PluginFunction<DocType, SchemaDefinitionType> {
  return (
    schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>,
    opts?: any
  ) => {
    schema.pre("save", (next: HookNextFunction) => {
      const emitAction = `${ name }:save:pre`.toLowerCase();
      DefaultLogger.debug(`Model: [${ name }] emits: [${ name }:save:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.pre("remove", (next: HookNextFunction) => {
      const emitAction = `${ name }:remove:pre`.toLowerCase();
      DefaultLogger.debug(`Model: [${ name }] emits: [${ name }:remove:pre]`);
      observer.emit(emitAction);
      next();
    });
    schema.post("save", (doc: Document, next: HookNextFunction) => {
      const emitAction = `${ name }:save:post`.toLowerCase();
      DefaultLogger.debug(`Model: [${ name }] emits: [${ name }:save:post]`);
      observer.emit(emitAction, doc);
      next();
    });
    schema.post("remove", (doc: Document, next: HookNextFunction) => {
      const emitAction = `${ name }:remove:post`.toLowerCase();
      DefaultLogger.debug(`Model: [${ name }] emits: [${ name }:remove:post]`);
      observer.emit(emitAction, doc);
      next();
    });
  };
}
