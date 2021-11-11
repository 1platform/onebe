import { CallbackError, Model, Schema } from "mongoose";
import Observable from "./Observable";
declare const observer: Observable;
export { observer };
export declare type PluginFunction<DocType = Document, SchemaDefinitionType = undefined> = (schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>, opts?: any) => void;
export declare type HookNextFunction = (err?: CallbackError) => void;
/**
 * Creates an Observer plugin
 * @param name A name for the plugin
 * */
export declare function observerPlugin<DocType = Document, SchemaDefinitionType = undefined>(name: string): PluginFunction<DocType, SchemaDefinitionType>;
