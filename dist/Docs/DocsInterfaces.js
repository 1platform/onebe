"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParameterType = exports.ParameterType = exports.DEFAULT_BODY_TAG = exports.BodyParameterType = void 0;

/**
 * Interface for Route doc
 *
 * @deprecated
 */

/**
 * Enum representing a Parameter Type
 *
 * @deprecated
 * @enum
 */
let ParameterType;
/**
 * Enum representing a Query Parameter Type
 *
 * @deprecated
 * @enum
 */

exports.ParameterType = ParameterType;

(function (ParameterType) {
  ParameterType["STRING"] = "string";
  ParameterType["NUMBER"] = "number";
})(ParameterType || (exports.ParameterType = ParameterType = {}));

let QueryParameterType;
/**
 * Enum representing a Body Parameter Type
 *
 * @deprecated
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

let BodyParameterType;
/**
 * Interface representing a Parameter doc
 *
 * @deprecated
 */

exports.BodyParameterType = BodyParameterType;

(function (BodyParameterType) {
  BodyParameterType["STRING"] = "string";
  BodyParameterType["NUMBER"] = "number";
  BodyParameterType["SCHEMA"] = "schema";
  BodyParameterType["BOOLEAN"] = "boolean";
  BodyParameterType["INTEGER"] = "integer";
  BodyParameterType["NULL"] = "null";
  BodyParameterType["OBJECT"] = "object";
  BodyParameterType["ARRAY"] = "array";
})(BodyParameterType || (exports.BodyParameterType = BodyParameterType = {}));

/**
 * The default identifier for a the Response body when using interfaces for responses.
 *
 * @deprecated
 */
const DEFAULT_BODY_TAG = "__DEFAULT__";
exports.DEFAULT_BODY_TAG = DEFAULT_BODY_TAG;