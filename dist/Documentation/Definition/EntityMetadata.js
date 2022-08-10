"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapSQLToEntity = mapSQLToEntity;

var _DataTypes = require("./DataTypes");

const integers = ["int", "int2", "int4", "int8", "integer", "tinyint", "smallint", "mediumint", "bigint"];
const number = ["dec", "decimal", "smalldecimal", "fixed", "numeric", "number", "float", "double", "real", "double precision"];

function mapSQLToEntity(dataType) {
  if (integers.indexOf(dataType.toString()) >= 0) {
    return _DataTypes.EntityPropertyDataTypes.INTEGER;
  }

  if (number.indexOf(dataType.toString()) >= 0) {
    return _DataTypes.EntityPropertyDataTypes.NUMBER;
  }

  if (["bool", "boolean"].indexOf(dataType.toString()) >= 0) {
    return _DataTypes.EntityPropertyDataTypes.BOOLEAN;
  }

  return _DataTypes.EntityPropertyDataTypes.STRING;
}