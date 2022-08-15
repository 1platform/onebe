"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DataTypes = require("../../Definition/DataTypes");

var _HTTPStatus = _interopRequireDefault(require("../../../HTTP/HTTPStatus"));

var _RouteUtils = require("../../../Router/RouteUtils");

var _MetadataStore = _interopRequireDefault(require("../../MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SwaggerRoutes {
  getRoutes(routesMetadata) {
    if (routesMetadata.length === 0) {
      return {};
    }

    return routesMetadata.reduce((accum, route) => _objectSpread(_objectSpread({}, accum), this.groupPaths(route)), {});
  }

  getPath(basePath, path, parameters) {
    let newPath = (0, _RouteUtils.getPath)(...basePath, path);
    parameters.forEach(parameter => {
      newPath = newPath.replaceAll(`:${parameter}`, `{${parameter}}`);
    });
    return newPath;
  }

  groupPaths(route) {
    const groups = {};

    for (const endpoint of Object.values(route.endpoints)) {
      const path = this.getPath(route.basePath, endpoint.path, Object.keys(endpoint.parameters));

      if (!groups[path]) {
        groups[path] = {};
      }

      groups[path][endpoint.verb] = this.parsePath(endpoint, route.controller, [route.name, ...(route.group || [])]);
    }

    return groups;
  }

  parsePath(endpoint, controller, tags) {
    const definition = {
      summary: endpoint.summary || endpoint.description || `${controller}.${endpoint.methodName}`,
      description: endpoint.description || "",
      operationId: `${controller}.${endpoint.methodName}`,
      tags
    };

    if (endpoint.isAuthenticated) {
      definition.security = [{
        [endpoint.authenticationMethod]: []
      }];
    }

    if (Object.keys(endpoint.parameters).length) {
      definition.parameters = this.getParameters(Object.values(endpoint.parameters));
    }

    if (Object.keys(endpoint.query).length) {
      definition.parameters = [...(definition.parameters || []), ...this.getQueryParameters(Object.values(endpoint.query))];
    }

    definition.responses = this.getResponses(endpoint);

    if (endpoint.body || endpoint.bodyParameters) {
      definition.requestBody = endpoint.body ? this.getRequestBody(endpoint.body) : this.getRequestBodyDefinition(Object.values(endpoint.bodyParameters));
    }

    return definition;
  }

  getResponseSchemas(responses) {
    if (responses.length === 0) {
      return {};
    }

    return responses.reduce((accum, response) => _objectSpread(_objectSpread({}, accum), {}, {
      [response.statusCode]: {
        description: this.getStatusDescription(response.statusCode.toString(), response.description),
        content: {
          "application/json": {
            schema: {
              type: response.isArray ? "array" : !response.isSchema ? response.schema : undefined,
              items: !response.isArray ? undefined : {
                $ref: `#/components/schemas/${response.schema}`
              },
              $ref: !response.isArray && response.isSchema ? `#/components/schemas/${response.schema}` : undefined
            }
          }
        }
      }
    }), {});
  }

  getStatusDescription(status, defaultValue) {
    switch (status) {
      case _HTTPStatus.default.OK.toString():
        return "Ok";

      case _HTTPStatus.default.NO_CONTENT.toString():
        return "No Content";

      case _HTTPStatus.default.CREATED.toString():
        return "Created";

      case _HTTPStatus.default.ACCEPTED.toString():
        return "Accepted";
    }

    return defaultValue || "";
  }

  getStatusesSchemas(statuses) {
    if (statuses.length === 0) {
      return {};
    }

    return statuses.reduce((accum, statusInfo) => _objectSpread(_objectSpread({}, accum), {}, {
      [statusInfo[0]]: {
        description: this.getStatusDescription(statusInfo[0], statusInfo[1])
      }
    }), {});
  }

  getErrors(errors) {
    if (errors.length === 0) {
      return {};
    }

    return errors.reduce((accum, error) => _objectSpread(_objectSpread({}, accum), {}, {
      [error.statusCode]: {
        description: error.description ?? "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ErrorMessage"
            },
            example: {
              status: error.statusCode,
              message: error.response
            }
          }
        }
      }
    }), {});
  }

  getResponses(endpoint) {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.getResponseSchemas(Object.values(endpoint.responses))), this.getStatusesSchemas(Object.entries(endpoint.statuses))), this.getErrors(Object.values(endpoint.throws))), {}, {
      500: {
        description: "General server error",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ErrorMessage"
            }
          }
        }
      }
    });
  }

  getParameters(parameters) {
    return parameters.map(parameter => ({
      name: parameter.name,
      in: "path",
      description: parameter.description || '""',
      required: true,
      schema: {
        type: parameter.isNumeric ? _DataTypes.EntityPropertyDataTypes.NUMBER : _DataTypes.EntityPropertyDataTypes.STRING
      }
    }));
  }

  getQueryParameters(queryParameters) {
    return queryParameters.map(parameter => ({
      name: parameter.name,
      in: "query",
      description: parameter.description || '""',
      required: parameter.isRequired ?? false,
      schema: {
        type: parameter.type,
        items: parameter.type === _DataTypes.QueryParameterType.ARRAY ? {
          type: parameter.arrayItems || _DataTypes.QueryParameterType.STRING
        } : undefined
      }
    }));
  }

  getRequestBodyDefinition(bodyDefinition) {
    let required = bodyDefinition.filter(parameter => parameter.required).map(parameter => parameter.name);

    if (required.length === 0) {
      required = undefined;
    }

    return {
      description: "Request body",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: _DataTypes.EntityPropertyDataTypes.OBJECT,
            properties: bodyDefinition.reduce((accum, parameter) => {
              let schema = {
                type: parameter.type,
                default: parameter.defaultValue,
                description: parameter.description ?? ""
              };

              if (parameter.entity) {
                schema = {
                  $ref: `#/components/schemas/${parameter.entity}`
                };
              }

              if (parameter.isArray) {
                schema = {
                  type: _DataTypes.EntityPropertyDataTypes.ARRAY,
                  items: {
                    $ref: `#/components/schemas/${parameter.entity}`
                  }
                };
              }

              return _objectSpread(_objectSpread({}, accum), {}, {
                [parameter.name]: schema
              });
            }, {}),
            required
          }
        }
      }
    };
  }

  getRequestBody(bodyDefinition) {
    let schema = {};

    if (bodyDefinition.isArray) {
      schema = {
        type: _DataTypes.EntityPropertyDataTypes.ARRAY,
        items: {
          $ref: `#/components/schemas/${bodyDefinition.entity}`
        }
      };
    } else {
      schema = {
        $ref: `#/components/schemas/${bodyDefinition.entity}`
      };
    }

    return {
      description: bodyDefinition.description ?? _MetadataStore.default.instance.entity.entity(bodyDefinition.entity).description ?? "",
      required: true,
      content: {
        "application/json": {
          schema
        }
      }
    };
  }

}

exports.default = SwaggerRoutes;