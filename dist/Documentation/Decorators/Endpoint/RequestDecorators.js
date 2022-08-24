"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = Body;
exports.Parameter = Parameter;
exports.Query = Query;
exports.Request = Request;

var _MetadataStore = _interopRequireDefault(require("../../MetadataStore"));

var _DataTypes = require("../../Definition/DataTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator used to describe a parameter (:parameter) used in the endpoint URL.
 *
 * When you have parameters in the endpoint URL, documenting the type of
 * the parameter (if it is a number or a string) and adding a short description
 * to it will help the developers that will use the exposed REST API endpoint
 * in their interaction with your application.
 *
 * @decorator
 * @param parameter The name of the parameter we want to document.
 * @param [isNumeric] Should the value be a numeric one or not.
 * @param [description] A short description of the parameter.
 */
function Parameter(parameter, isNumeric = false, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointParameter(target.constructor.name, propertyKey, {
      name: parameter,
      isNumeric: isNumeric ?? false,
      description
    });
  };
}
/**
 * Decorator used to describe a query parameter used in the endpoint URL.
 *
 * When you have query parameters in the endpoint URL, documenting the type of
 * the parameter and adding a short description to it will help the developers
 * that will use the exposed REST API endpoint in their interaction with your application.
 *
 * @decorator
 * @param parameter The name of the query parameter we want to document.
 * @param [type] The data type of the query parameter.
 * @param [description] A short description of the query parameter.
 */


function Query(parameter, type = _DataTypes.QueryParameterType.STRING, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointQuery(target.constructor.name, propertyKey, {
      name: parameter,
      type,
      description
    });
  };
}
/**
 * Decorator used to describe the body of a request for an endpoint using a predefined entity.
 *
 * The easiest way to document the body of a request for an endpoint is by using
 * a predefined entity, created from models or by using the Entity decorators on
 * the custom Entities you created in the application.
 *
 * @decorator
 * @param entity The name of the entity we want to use as the body of request.
 * @param [isArray] Is the body an array or not.
 * @param [description] A short description of the body of a request.
 */


function Request(entity, isArray, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointBody(target.constructor.name, propertyKey, {
      entity,
      description,
      isArray: isArray ?? false
    });
  };
}
/**
 * Decorator used to describe the body of a request for an endpoint using a
 * list of body parameters.
 *
 * If you don't think that you might reuse the request body parameters in
 * another endpoint, you could use this decorator to describe the items
 * of the body.
 *
 * @decorator
 * @param parameters A list of body parameters that you expect from a user.
 */


function Body(parameters) {
  return (target, propertyKey) => {
    if (!Array.isArray(parameters)) {
      parameters = [parameters];
    }

    _MetadataStore.default.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, parameters);
  };
}