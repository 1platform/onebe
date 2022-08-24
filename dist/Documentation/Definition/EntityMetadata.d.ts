import { ColumnType, ObjectType } from "typeorm";
import { Constructor } from "../MetadataTypes";
import { EntityPropertyDataTypes } from "./DataTypes";
/**
 * Interface describing an object used to hold the metadata information
 * for an entity property.
 */
export interface IEntityPropertyMetadata {
    /**
     * The name of the property.
     */
    name: string;
    /**
     * A short description of the property.
     */
    description?: string;
    /**
     * The data type of the property.
     */
    dataType: EntityPropertyDataTypes;
    /**
     * The maximum length of the value held in the property.
     */
    maxLength?: number;
    /**
     * The name of the entity used to describe the value of the property.
     */
    entity?: string;
    /**
     * Flag to mark if the value held in the property is an array or not.
     */
    isArray?: boolean;
    /**
     * Flag to mark the property as a primary key for the entity.
     */
    isPrimaryKey?: boolean;
    /**
     * Flag to mark the property as required.
     */
    required?: boolean;
    /**
     * Other metadata information that you might need for documentation.
     */
    options?: Record<string, any>;
}
/**
 * Interface describing an object used to hold the metadata information
 * for an entity.
 */
export interface IEntityMetadata {
    /**
     * The name of the entity.
     */
    name: string;
    /**
     * The database table name of the entity. Used only when documenting
     * the database entities.
     */
    tableName?: string;
    /**
     * The name of the entity our entity extends from.
     */
    extends?: string;
    /**
     * The description of the entity.
     */
    description?: string;
    /**
     * A list of properties metadata related to the entity.
     */
    properties?: Array<IEntityPropertyMetadata>;
}
/**
 * Interface describing an object used to hold the metadata information about the
 * relations of two entities - database relations (many-2-many, one-2-one,
 * one-2-many, many-2-one).
 */
export interface IRelationMetadata<T = Constructor> {
    /**
     * The name of the property used to define the relation.
     */
    propertyName: string;
    /**
     * The function or target used to define the relation.
     */
    typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>);
    /**
     * Flag to mark the relation as many-2-many or one-2-many.
     */
    isArray?: boolean;
}
/**
 * Interface describing an object used to describe the extended metadata information
 * of a property from an entity.
 */
export interface IEntityProperty {
    /**
     * The datatype of the property.
     */
    dataType?: EntityPropertyDataTypes;
    /**
     * The maximum length of the property value.
     */
    length?: number | string;
    /**
     * Flag to mark the property as a Date field.
     */
    isDate?: boolean;
    /**
     * Flag to mark the property as a DateTime field.
     */
    isDateTime?: boolean;
    /**
     * A short description of the property.
     */
    description?: string;
    /**
     * The name of the entity used to describe the value of the property.
     */
    reference?: string;
    /**
     * In case this property is an array, we want to know what type is the
     * content of the array.
     */
    childType?: EntityPropertyDataTypes;
    /**
     * The ID field of the entity we reference.
     */
    referenceId?: string;
    /**
     * The name of the field attached to the property, in case it is a
     * referenced property.
     */
    fieldName?: string;
    /**
     * Any other options related to the property definition.
     */
    options?: any;
    /**
     * Flag to mark the property as a primary key.
     */
    isPrimaryKey?: boolean;
    /**
     * Flag to mark the property as required.
     */
    required?: boolean;
    /**
     * The default value of the property.
     *
     * @TODO
     */
    defaultValue?: string;
    /**
     * A list of possible values that can be passed to the property.
     *
     * @TODO
     */
    enumOptions?: string[];
}
/**
 * Converter function to get the EntityPropertyDataType out of the SQL datatype.
 *
 * @param dataType The SQL datatype we want to convert.
 */
export declare function mapSQLToEntity(dataType: ColumnType): EntityPropertyDataTypes;
