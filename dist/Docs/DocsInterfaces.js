"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParameterType = exports.DEFAULT_BODY_TAG = exports.BodyParameterType = void 0;

/**
 * Interface for Route doc
 */

/**
 * Enum representing a Parameter Type
 *
 * @enum
 */
let ParameterType;
/**
 * Enum representing a Body Parameter Type
 *
 * @enum
 */

exports.ParameterType = ParameterType;

(function (ParameterType) {
  ParameterType["STRING"] = "string";
  ParameterType["NUMBER"] = "number";
})(ParameterType || (exports.ParameterType = ParameterType = {}));

let BodyParameterType;
/**
 * Interface representing a Parameter doc
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
 */
const DEFAULT_BODY_TAG = "__DEFAULT__";
exports.DEFAULT_BODY_TAG = DEFAULT_BODY_TAG;