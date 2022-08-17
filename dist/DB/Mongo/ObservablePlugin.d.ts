import { CallbackError, Model, Schema } from "mongoose";
import Observable from "./Observable";
/**
 * The observer instance we use to observe database changes.
 */
declare const observer: Observable;
export { observer };
/**
 * The definition of the observer plugin function returned by the Observer Plugin function.
 *
 * @param schema The schema for which we want to observe changes.
 * @param opts Various other options passed by Mongoose.
 */
export declare type PluginFunction<DocType = Document, SchemaDefinitionType = undefined> = (schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>, opts?: any) => void;
/**
 * Type definition for the function used to call the next available hook (callback).
 *
 * @param err The errors, if any, passed to the next callback.
 */
export declare type HookNextFunction = (err?: CallbackError) => void;
/**
 * Adds observable functionality to any Mongoose models that we want to be
 * observable.
 *
 * @param modelName The name of the model we want to observe.
 */
export declare function observerPlugin<DocType = Document, SchemaDefinitionType = undefined>(modelName: string): PluginFunction<DocType, SchemaDefinitionType>;
