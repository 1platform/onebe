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

var _HTTP = require("../../../HTTP");

var _MetadataStore = _interopRequireDefault(require("../../MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator used to describe what does an endpoint response. This decorator
 * should be used only for primitive return values: `string`, `number`, `boolean`,
 * `null`, `undefined`.
 *
 * @decorator
 * @param type The data type of the response value.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */
function Return(type, statusCode = _HTTP.HTTPStatus.OK, description) {
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
/**
 * Decorator used to describe an entity based response for an endpoint. If you
 * want to reuse a response, we recommend to use this decorator and define an entity.
 *
 * @decorator
 * @param type The name of the entity used to describe the response.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */


function Schema(type, statusCode = _HTTP.HTTPStatus.OK, description) {
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
/**
 * Decorator used to describe what does an array endpoint response. This decorator
 * should be used only for primitive return values: `string`, `number`, `boolean`,
 * `null`, `undefined`.
 *
 * @decorator
 * @param type The data type of the response value.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */


function Array(type, statusCode = _HTTP.HTTPStatus.OK, description) {
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
/**
 * Decorator used to describe an entity based array response for an endpoint. If you
 * want to reuse a response, we recommend to use this decorator and define an entity.
 *
 * @decorator
 * @param type The name of the entity used to describe the response.
 * @param [statusCode] The HTTP Status code used for the response.
 * @param [description] A short description of the returned response.
 */


function ArraySchema(type, statusCode = _HTTP.HTTPStatus.OK, description) {
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
/**
 * Decorator used to describe an error thrown by your endpoint. The
 * thrown error should always have an HTTP Status code attached to it.
 *
 * @decorator
 * @param errorCode The HTTP Status error code used for the response.
 * @param [description] A short description of the returned error.
 * @param [response] A sample message sent to the user with the error.
 */


function Throws(errorCode, description, response) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointThrows(target.constructor.name, propertyKey, {
      statusCode: errorCode,
      description,
      response
    });
  };
}
/**
 * Decorator used to describe the status code that can be returned by the
 * endpoint.
 *
 * This decorator only describes the status code without a body attached
 * to the status.
 *
 * @decorator
 * @param statusCode The HTTP Status error code used for the response.
 * @param [description] A short description of the returned error.
 */


function Status(statusCode, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointStatus(target.constructor.name, propertyKey, statusCode, description);
  };
}