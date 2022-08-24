"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParameterType = exports.EntityPropertyDataTypes = exports.BodyParameterType = void 0;

/**
 * A list of possible types for a query parameter.
 *
 * @enum
 */
let QueryParameterType;
/**
 * A list of possible types for a the entity properties.
 *
 * @enum
 */

exports.QueryParameterType = QueryParameterType;

(function (QueryParameterType) {
  QueryParameterType["STRING"] = "string";
  QueryParameterType["NUMBER"] = "number";
  QueryParameterType["BOOLEAN"] = "boolean";
  QueryParameterType["INTEGER"] = "integer";
  QueryParameterType["NULL"] = "null";
  QueryParameterType["OBJECT"] = "object";
  QueryParameterType["ARRAY"] = "array";
})(QueryParameterType || (exports.QueryParameterType = QueryParameterType = {}));

let EntityPropertyDataTypes;
/**
 * A list of possible types for a body parameter.
 *
 * @enum
 */

exports.EntityPropertyDataTypes = EntityPropertyDataTypes;

(function (EntityPropertyDataTypes) {
  EntityPropertyDataTypes["STRING"] = "string";
  EntityPropertyDataTypes["NUMBER"] = "number";
  EntityPropertyDataTypes["INTEGER"] = "integer";
  EntityPropertyDataTypes["BOOLEAN"] = "boolean";
  EntityPropertyDataTypes["ARRAY"] = "array";
  EntityPropertyDataTypes["OBJECT"] = "object";
})(EntityPropertyDataTypes || (exports.EntityPropertyDataTypes = EntityPropertyDataTypes = {}));

let BodyParameterType;
exports.BodyParameterType = BodyParameterType;

(function (BodyParameterType) {
  BodyParameterType["STRING"] = "string";
  BodyParameterType["NUMBER"] = "number";
  BodyParameterType["SCHEMA"] = "schema";
  BodyParameterType["BOOLEAN"] = "boolean";
  BodyParameterType["INTEGER"] = "integer";
  BodyParameterType["NULL"] = "null";
  BodyParameterType["OBJECT"] = "object";
  BodyParameterType["FILE"] = "file";
})(BodyParameterType || (exports.BodyParameterType = BodyParameterType = {}));