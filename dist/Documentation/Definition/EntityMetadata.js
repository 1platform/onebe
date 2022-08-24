"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapSQLToEntity = mapSQLToEntity;

var _DataTypes = require("./DataTypes");

/**
 * Supported integer data type for the SQL to Entity data type mapping.
 */
const integers = ["int", "int2", "int4", "int8", "integer", "tinyint", "smallint", "mediumint", "bigint"];
/**
 * Supported decimal/float data type for the SQL to Entity data type mapping.
 */

const number = ["dec", "decimal", "smalldecimal", "fixed", "numeric", "number", "float", "double", "real", "double precision"];
/**
 * Converter function to get the EntityPropertyDataType out of the SQL datatype.
 *
 * @param dataType The SQL datatype we want to convert.
 */

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