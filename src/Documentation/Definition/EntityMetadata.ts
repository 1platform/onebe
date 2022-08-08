import { ColumnType } from "typeorm";

export enum EntityPropertyDataTypes {
  STRING = "string",
  NUMBER = "number",
  INTEGER = "integer",
  BOOLEAN = "boolean",
  ARRAY = "array",
  OBJECT = "object",
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

const integers = [
  "int",
  "int2",
  "int4",
  "int8",
  "integer",
  "tinyint",
  "smallint",
  "mediumint",
  "bigint",
];
const number = [
  "dec",
  "decimal",
  "smalldecimal",
  "fixed",
  "numeric",
  "number",
  "float",
  "double",
  "real",
  "double precision",
];

export function mapSQLToEntity(dataType: ColumnType): EntityPropertyDataTypes {
  if (integers.indexOf(dataType.toString()) >= 0) {
    return EntityPropertyDataTypes.INTEGER;
  }
  if (number.indexOf(dataType.toString()) >= 0) {
    return EntityPropertyDataTypes.NUMBER;
  }
  if ([ "bool", "boolean" ].indexOf(dataType.toString()) >= 0) {
    return EntityPropertyDataTypes.BOOLEAN;
  }
  return EntityPropertyDataTypes.STRING;
}
