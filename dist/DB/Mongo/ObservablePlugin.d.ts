import { Model, Schema } from "mongoose";
import Observable from "./Observable";
declare const observer: Observable;
export { observer };
declare type PluginFunction<DocType = Document, SchemaDefinitionType = undefined> = (schema: Schema<DocType, Model<DocType>, SchemaDefinitionType>, opts?: any) => void;
export declare function observerPlugin<DocType = Document, SchemaDefinitionType = undefined>(name: string): PluginFunction<DocType, SchemaDefinitionType>;
