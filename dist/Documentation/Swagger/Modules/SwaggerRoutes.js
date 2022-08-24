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

/**
 * Swagger Routes Builder tool.
 *
 * Using this class the Documentation system will create everything needed
 * by the OpenAPI 3 paths specification.
 */
class SwaggerRoutes {
  /**
   * Method that extracts the routes from the route definition metadata.
   *
   * @param routesMetadata The list of documented routes from the metadata store.
   */
  getRoutes(routesMetadata) {
    if (routesMetadata.length === 0) {
      return {};
    }

    return routesMetadata.reduce((accum, route) => _objectSpread(_objectSpread({}, accum), this.groupPaths(route)), {});
  }
  /**
   * Method used to generate the full path of the endpoint, from the route
   * base path.
   *
   * @param basePath The base path from the route.
   * @param path The path of the endpoint.
   * @param parameters The list of parameters that appear in the endpoint URL.
   */


  getPath(basePath, path, parameters) {
    let newPath = (0, _RouteUtils.getPath)(...basePath, path);
    (parameters || []).forEach(parameter => {
      newPath = newPath.replaceAll(`:${parameter}`, `{${parameter}}`);
    });
    return newPath;
  }
  /**
   * Group the endpoint calls based on the Endpoint URL and the HTTP verb used
   * to access the code.
   *
   * @param route The route metadata for which we create the groups.
   */


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
  /**
   * Method used to parse the endpoint metadata information and generate
   * the OpenAPI 3 path specification object.
   *
   * @param endpoint The endpoint metadata.
   * @param controller The route where the endpoint is located.
   * @param tags A list of tags that are used to group the endpoint.
   */


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
  /**
   * Method used to generate the OpenAPI 3 responses object for an endpoint based
   * on an Endpoint Response metadata object.
   *
   * @param responses The list of responses that can be returned by the endpoint.
   */


  getResponseSchemas(responses) {
    if (responses.length === 0) {
      return {};
    }

    return responses.reduce((accum, response) => _objectSpread(_objectSpread({}, accum), {}, {
      [response.statusCode]: {
        description: this.getStatusDescription(response.statusCode.toString(), response.description),
        content: {
          [response.contentType || "application/json"]: {
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
  /**
   * Method used to convert the HTTP status to a string value that can be used
   * as a status description.
   *
   * @param status The status we want to convert.
   * @param defaultValue A default value to be returned when the status isn't in the supported list.
   */


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

      case _HTTPStatus.default.BAD_REQUEST.toString():
        return "Bad Request";

      case _HTTPStatus.default.FORBIDDEN.toString():
        return "Forbidden";

      case _HTTPStatus.default.SERVER_ERROR.toString():
        return "Server Error";

      case _HTTPStatus.default.UNAUTHORIZED.toString():
        return "Unauthorized";

      case _HTTPStatus.default.NOT_FOUND.toString():
        return "Not Found";
    }

    return defaultValue || "";
  }
  /**
   * Method used to generate the OpenAPI 3 responses object for an endpoint based
   * on a list with statuses and descriptions.
   *
   * @param statuses The list of statuses that can be returned by the endpoint.
   */


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
  /**
   * Method used to generate the OpenAPI 3 responses object for an endpoint based
   * on a list with Error Response metadata objects.
   *
   * @param errors The list of errors that can be returned by the endpoint.
   */


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
  /**
   * Method used to generate the OpenAPI 3 responses object for an endpoint based
   * on its metadata information.
   *
   * @param endpoint The endpoint metadata.
   */


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
  /**
   * Method used to generate the OpenAPI 3 parameters object for an endpoint based
   * on an Endpoint Parameter metadata object.
   *
   * @param parameters The list of URL parameters supported by the endpoint.
   */


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
  /**
   * Method used to generate the OpenAPI 3 parameters object for an endpoint based
   * on an Endpoint Query Parameter metadata object.
   *
   * @param queryParameters The list of Query parameters supported by the endpoint.
   */


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
  /**
   * Method used to generate the OpenAPI 3 request body object for an endpoint based
   * on a list with Body Parameters Metadata objects.
   *
   * @param bodyDefinition The list with body parameters.
   */


  getRequestBodyDefinition(bodyDefinition) {
    let required = bodyDefinition.filter(parameter => parameter.required).map(parameter => parameter.name);

    if (required.length === 0) {
      required = undefined;
    }

    let contentType = "application/json";

    if (bodyDefinition.find(parameter => parameter.type === _DataTypes.BodyParameterType.FILE)) {
      contentType = "multipart/form-data";
    }

    return {
      description: "Request body",
      required: true,
      content: {
        [contentType]: {
          schema: {
            type: _DataTypes.EntityPropertyDataTypes.OBJECT,
            properties: bodyDefinition.reduce((accum, parameter) => {
              let schema = {
                type: parameter.type,
                default: parameter.defaultValue,
                description: parameter.description ?? "",
                format: parameter.type === _DataTypes.BodyParameterType.FILE ? "binary" : undefined
              };

              if (parameter.entity) {
                schema = {
                  $ref: `#/components/schemas/${parameter.entity}`
                };
              }

              if (parameter.isArray) {
                schema = {
                  type: _DataTypes.EntityPropertyDataTypes.ARRAY,
                  items: parameter.type === _DataTypes.BodyParameterType.SCHEMA ? {
                    $ref: `#/components/schemas/${parameter.entity}`
                  } : {
                    type: parameter.type,
                    format: parameter.type === _DataTypes.BodyParameterType.FILE ? "binary" : undefined
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
  /**
   * Method used to generate the OpenAPI 3 request body object for an endpoint based
   * on a Predefined Entity exposed by the Entity Metadata.
   *
   * @param bodyDefinition The body definition metadata information.
   */


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