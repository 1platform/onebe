import { EntityOptions } from "typeorm";
import { Constructor } from "../../../Documentation/MetadataTypes";
import { ControllerDecoratorFunction } from "../../../Router/RouteTypes";
interface IExtendedModelOptions extends EntityOptions {
    description?: string;
}
/**
 * This decorator is used to mark classes that will be an entity (table or document depend on database type).
 * Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
 *
 * @decorator
 * @param nameOrOptions The name of the entity or options used to define the entity.
 * @param maybeOptions Options used for the entity definition.
 */
export declare function Model<T extends Constructor>(nameOrOptions?: string | IExtendedModelOptions, maybeOptions?: IExtendedModelOptions): ControllerDecoratorFunction<T>;
export {};
