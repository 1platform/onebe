import { ColumnType, ObjectType } from "typeorm";
import { Constructor } from "../MetadataTypes";
export declare enum EntityPropertyDataTypes {
    STRING = "string",
    NUMBER = "number",
    INTEGER = "integer",
    BOOLEAN = "boolean",
    ARRAY = "array",
    OBJECT = "object"
}
export interface IEntityPropertyMetadata {
    name: string;
    description?: string;
    dataType: EntityPropertyDataTypes;
    maxLength?: number;
    entity?: string;
    isArray?: boolean;
    isPrimaryKey?: boolean;
    required?: boolean;
    options?: Record<string, any>;
}
export interface IEntityMetadata {
    name: string;
    tableName?: string;
    extends?: string;
    description?: string;
    properties?: Array<IEntityPropertyMetadata>;
}
export interface IRelationMetadata<T = Constructor> {
    propertyName: string;
    typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>);
    isArray?: boolean;
}
export interface IEntityProperty {
    dataType: EntityPropertyDataTypes;
    length?: number | string;
    isDate?: boolean;
    isDateTime?: boolean;
    description?: string;
    reference?: string;
    childType?: EntityPropertyDataTypes;
    referenceId?: string;
    fieldName?: string;
    options?: any;
    isPrimaryKey?: boolean;
    required?: boolean;
    defaultValue?: string;
    enumOptions?: string;
}
export declare function mapSQLToEntity(dataType: ColumnType): EntityPropertyDataTypes;
