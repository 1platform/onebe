"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = Response;
exports.ResponseArray = ResponseArray;
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
function Response(type, statusCode = _HTTPStatus.default.OK, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointResponse(target.constructor.name, propertyKey, {
      statusCode,
      description,
      schema: type,
      isArray: false
    });
  };
}

function ResponseArray(type, statusCode = _HTTPStatus.default.OK, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointResponse(target.constructor.name, propertyKey, {
      statusCode,
      description,
      schema: type,
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

function Status(errorCode, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointStatus(target.constructor.name, propertyKey, errorCode, description);
  };
}