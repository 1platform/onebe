import { CallbackError, Model, Schema } from "mongoose";
import Observable from "./Observable";
/**
 * The observer instance we use to observe changes.
 */
declare const observer: Observable;
export { observer };
/**
 * The definition of the observer plugin function returned by the observerPlugin function.
 *
 * @param schema The schema for which we want to observe changes.
 * @param opts Various other options passed by Mongoose.
 */
export declare type PluginFunction<DocType = Document, SchemaDefinitionType = undefined> = (schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>, opts?: any) => void;
/**
 * The definition of the next hook function.
 *
 * @param err The errors, if any, passed to the next callback.
 */
export declare type HookNextFunction = (err?: CallbackError) => void;
/**
 * Creates an observer for our model.
 *
 * @param name The name of the model.
 */
export declare function observerPlugin<DocType = Document, SchemaDefinitionType = undefined>(name: string): PluginFunction<DocType, SchemaDefinitionType>;
