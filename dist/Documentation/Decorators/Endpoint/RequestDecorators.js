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

function Parameter(parameter, isNumeric = false, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointParameter(target.constructor.name, propertyKey, {
      name: parameter,
      isNumeric: isNumeric ?? false,
      description
    });
  };
}

function Query(parameter, type = _DataTypes.QueryParameterType.STRING, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointQuery(target.constructor.name, propertyKey, {
      name: parameter,
      type,
      description
    });
  };
}

function Request(entity, isArray, description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointBody(target.constructor.name, propertyKey, {
      entity,
      description,
      isArray: isArray ?? false
    });
  };
}

function Body(parameters) {
  return (target, propertyKey) => {
    if (!Array.isArray(parameters)) {
      parameters = [parameters];
    }

    _MetadataStore.default.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, parameters);
  };
}