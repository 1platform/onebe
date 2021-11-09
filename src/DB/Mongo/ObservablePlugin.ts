import { CallbackError, Model, Schema } from "mongoose";
import DefaultLogger from "../../System/Logger";
import Observable from "./Observable";

const observer = new Observable();

export { observer };

type PluginFunction<DocType = Document, SchemaDefinitionType = undefined> = (
  schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>,
  opts?: any
) => void;

type HookNextFunction = (err?: CallbackError) => void;

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
