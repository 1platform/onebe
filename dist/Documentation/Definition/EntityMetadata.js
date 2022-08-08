"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityPropertyDataTypes = void 0;
exports.mapSQLToEntity = mapSQLToEntity;
let EntityPropertyDataTypes;
exports.EntityPropertyDataTypes = EntityPropertyDataTypes;

(function (EntityPropertyDataTypes) {
  EntityPropertyDataTypes["STRING"] = "string";
  EntityPropertyDataTypes["NUMBER"] = "number";
  EntityPropertyDataTypes["INTEGER"] = "integer";
  EntityPropertyDataTypes["BOOLEAN"] = "boolean";
  EntityPropertyDataTypes["ARRAY"] = "array";
  EntityPropertyDataTypes["OBJECT"] = "object";
})(EntityPropertyDataTypes || (exports.EntityPropertyDataTypes = EntityPropertyDataTypes = {}));

const integers = ["int", "int2", "int4", "int8", "integer", "tinyint", "smallint", "mediumint", "bigint"];
const number = ["dec", "decimal", "smalldecimal", "fixed", "numeric", "number", "float", "double", "real", "double precision"];

function mapSQLToEntity(dataType) {
  if (integers.indexOf(dataType.toString()) >= 0) {
    return EntityPropertyDataTypes.INTEGER;
  }

  if (number.indexOf(dataType.toString()) >= 0) {
    return EntityPropertyDataTypes.NUMBER;
  }

  if (["bool", "boolean"].indexOf(dataType.toString()) >= 0) {
    return EntityPropertyDataTypes.BOOLEAN;
  }

  return EntityPropertyDataTypes.STRING;
}