"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParameterType = exports.DEFAULT_BODY_TAG = exports.BodyParameterType = void 0;
let ParameterType;
exports.ParameterType = ParameterType;

(function (ParameterType) {
  ParameterType["STRING"] = "string";
  ParameterType["NUMBER"] = "number";
})(ParameterType || (exports.ParameterType = ParameterType = {}));

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
  BodyParameterType["ARRAY"] = "array";
})(BodyParameterType || (exports.BodyParameterType = BodyParameterType = {}));

const DEFAULT_BODY_TAG = "__DEFAULT__";
exports.DEFAULT_BODY_TAG = DEFAULT_BODY_TAG;