"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DataTypes = require("../../Definition/DataTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const AUDIT = ["createdAt", "updatedAt", "deletedAt", "created_at", "updated_at", "deleted_at", "createdBy", "updatedBy", "deletedBy", "created_by", "updated_by", "deleted_by"];

class SwaggerComponents {
  getSecuritySchemes() {
    return {
      securitySchemes: {
        BasicAuth: {
          type: "http",
          scheme: "basic"
        },
        BearerAuth: {
          type: "http",
          scheme: "bearer"
        }
      }
    };
  }

  getErrorEntity() {
    return {
      ErrorMessage: {
        type: "object",
        description: "Error message object",
        properties: {
          status: {
            type: "integer",
            default: 500
          },
          message: {
            type: "string"
          },
          details: {
            type: "string",
            default: ""
          }
        }
      }
    };
  }

  buildComponents(entities) {
    const components = _objectSpread(_objectSpread({}, this.getSecuritySchemes()), {}, {
      schemas: _objectSpread({}, this.getErrorEntity())
    });

    for (const entity of entities) {
      const definition = this.getComponent(entity);
      components.schemas[definition.name] = definition.definition;
    }

    return components;
  }

  getComponent(entity) {
    const componentDefinition = {
      name: entity.name,
      definition: {
        type: "object",
        description: entity.description,
        properties: {}
      }
    };
    componentDefinition.definition.properties = entity.properties.reduce((accum, property) => {
      if (property.dataType === _DataTypes.EntityPropertyDataTypes.OBJECT) {
        return _objectSpread(_objectSpread({}, accum), {}, {
          [property.name]: {
            type: _DataTypes.EntityPropertyDataTypes.OBJECT,
            $ref: `#/components/schemas/${property.options.reference}`
          }
        });
      }

      if (property.dataType === _DataTypes.EntityPropertyDataTypes.ARRAY) {
        return _objectSpread(_objectSpread({}, accum), {}, {
          [property.name]: {
            type: _DataTypes.EntityPropertyDataTypes.ARRAY,
            items: property.options.reference ? {
              $ref: `#/components/schemas/${property.options.reference}`
            } : {
              type: property.options.childType || _DataTypes.EntityPropertyDataTypes.STRING
            }
          }
        });
      }

      const definition = {
        description: property.description,
        type: property.dataType
      };

      if (property.options.enum) {
        definition.enum = property.options.enum;
      }

      if (property.options.default) {
        definition.default = property.options.default;
      }

      if (property.options.isDate) {
        definition.format = "date";
      }

      if (property.options.isDateTime) {
        definition.format = "date-time";
      }

      if (property.options.isPassword) {
        definition.format = "password";
      }

      if (property.dataType === _DataTypes.EntityPropertyDataTypes.NUMBER) {
        definition.format = "double";
      }

      if (property.dataType === _DataTypes.EntityPropertyDataTypes.INTEGER) {
        definition.format = "int64";
      }

      return _objectSpread(_objectSpread({}, accum), {}, {
        [property.name]: definition
      });
    }, {});
    componentDefinition.definition.required = entity.properties.filter(property => property.options.required && AUDIT.indexOf(property.name) < 0).map(property => property.name);

    if (componentDefinition.definition.required.length === 0) {
      delete componentDefinition.definition.required;
    }

    return componentDefinition;
  }

}

exports.default = SwaggerComponents;