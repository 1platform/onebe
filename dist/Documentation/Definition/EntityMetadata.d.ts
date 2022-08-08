import { ColumnType } from "typeorm";
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
}
export declare function mapSQLToEntity(dataType: ColumnType): EntityPropertyDataTypes;
