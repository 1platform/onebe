import { EntityOptions } from "typeorm";
import { Constructor } from "../../../Documentation/MetadataTypes";
import { ControllerDecoratorFunction } from "../../../Router/RouteTypes";
/**
 * This decorator is used to mark classes that will be an entity (table or document
 * depend on database type). Database schema will be created for all classes decorated
 * with it and Repository can be retrieved and used for it.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [nameOrOptions] The name of the entity or options used to define the entity.
 * @param [maybeOptions] Options used for the entity definition.
 */
export declare function Model<T extends Constructor>(nameOrOptions?: string | (EntityOptions & {
    description?: string;
}), maybeOptions?: EntityOptions & {
    description?: string;
}): ControllerDecoratorFunction<T>;
