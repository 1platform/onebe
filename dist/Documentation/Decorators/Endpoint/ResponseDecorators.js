"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Array = Array;
exports.ArraySchema = ArraySchema;
exports.Return = Return;
exports.Schema = Schema;
exports.Status = Status;
exports.Throws = Throws;

var _HTTPStatus = _interopRequireDefault(require("../../../HTTP/HTTPStatus"));

var _MetadataStore = _interopRequireDefault(require("../../MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator to add a response to a method.
 *
 * @decorator
 * @param type The type of the response
 * @param statusCode The status code of the response
 * @param description The description of the response
 */
function Return(type, statusCode = _HTTPStatus.default.OK, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointResponse(target.constructor.name, propertyKey, {
      statusCode,
      description,
      schema: type,
      isSchema: false,
      isArray: false
    });
  };
}

function Schema(type, statusCode = _HTTPStatus.default.OK, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointResponse(target.constructor.name, propertyKey, {
      statusCode,
      description,
      schema: type,
      isSchema: true,
      isArray: false
    });
  };
}

function Array(type, statusCode = _HTTPStatus.default.OK, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointResponse(target.constructor.name, propertyKey, {
      statusCode,
      description,
      schema: type,
      isSchema: false,
      isArray: true
    });
  };
}

function ArraySchema(type, statusCode = _HTTPStatus.default.OK, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointResponse(target.constructor.name, propertyKey, {
      statusCode,
      description,
      schema: type,
      isSchema: true,
      isArray: true
    });
  };
}

function Throws(errorCode, description, response) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointThrows(target.constructor.name, propertyKey, {
      statusCode: errorCode,
      description,
      response
    });
  };
}

function Status(statusCode, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointStatus(target.constructor.name, propertyKey, statusCode, description);
  };
}