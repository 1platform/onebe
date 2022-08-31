import { Constructor } from "../MetadataTypes";
import { ControllerDecoratorFunction } from "../../Router";
import { IEntityProperty } from "../Definition/EntityMetadata";
import { EntityPropertyDataTypes } from "../Definition/DataTypes";
/**
 * Decorator used to describe a custom entity that is extending the
 * BaseEntity class.
 *
 * Using this decorator we can give a custom entity a name and define
 * what other entity it extends. When the Documentation API is exposing
 * the metadata, it will look in the hierarchy of the class and list
 * all the properties in one place.
 *
 * @decorator
 * @param [description] A short description of the entity.
 */
export declare function Entity<T extends Constructor>(description?: string): ControllerDecoratorFunction<T>;
/**
 * Decorator used to describe the property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */
export declare function Property(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to mark the property of a custom entity as required.
 *
 * @decorator
 * @param object The entity on which we apply the decorator.
 * @param propertyName The name of the property on which we apply the decorator.
 */
export declare function IsRequired(object: any, propertyName: string): void;
/**
 * Decorator used to describe a required property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */
export declare function RequiredProperty(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe a date property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */
export declare function DateProperty(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe a date-time property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */
export declare function DateTimeProperty(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe a string property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */
export declare function StringProperty(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe a number property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export declare function NumberProperty(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe a boolean property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */
export declare function BooleanProperty(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe an integer property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */
export declare function IntegerProperty(options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe an array property of a custom entity.
 *
 * @decorator
 * @param [dataType] The data type of the property.
 * @param [options] A list of options to define a property of an entity.
 */
export declare function ArrayProperty(dataType?: EntityPropertyDataTypes, options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe a property of a custom entity that references a list of another entities.
 *
 * @decorator
 * @param entityName The name of the entity we want to reference.
 * @param [options] A list of options to define a property of an entity.
 */
export declare function EntityArrayProperty(entityName: string, options?: IEntityProperty): PropertyDecorator;
/**
 * Decorator used to describe a property of a custom entity that references another entity.
 *
 * @decorator
 * @param entityName The name of the entity we want to reference.
 * @param [options] A list of options to define a property of an entity.
 */
export declare function EntityProperty(entityName: string, options?: IEntityProperty): PropertyDecorator;
