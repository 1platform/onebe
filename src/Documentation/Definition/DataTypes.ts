/**
 * A list of possible types for a query parameter.
 *
 * @enum
 */
export enum QueryParameterType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  INTEGER = "integer",
  NULL = "null",
  OBJECT = "object",
  ARRAY = "array",
}

/**
 * A list of possible types for a the entity properties.
 *
 * @enum
 */
export enum EntityPropertyDataTypes {
  STRING = "string",
  NUMBER = "number",
  INTEGER = "integer",
  BOOLEAN = "boolean",
  ARRAY = "array",
  OBJECT = "object",
}

/**
 * A list of possible types for a body parameter.
 *
 * @enum
 */
export enum BodyParameterType {
  STRING = "string",
  NUMBER = "number",
  SCHEMA = "schema",
  BOOLEAN = "boolean",
  INTEGER = "integer",
  NULL = "null",
  OBJECT = "object",
  FILE = "file",
}
