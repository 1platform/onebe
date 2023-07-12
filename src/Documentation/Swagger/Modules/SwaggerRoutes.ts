import { BodyParameterType, EntityPropertyDataTypes, QueryParameterType } from "@/Documentation/Definition/DataTypes";
import {
  IEndpointBody,
  IEndpointBodyParameter,
  IEndpointMetadata,
  IEndpointParameter,
  IEndpointQuery,
  IEndpointResponse,
  IEndpointThrowResponse,
  IRouteMetadata,
} from "@/Documentation/Definition/RouteMetadata";
import MetadataStore from "@/Documentation/MetadataStore";
import { HTTPStatus } from "@/HTTP";
import { getPath } from "@/Router";

/**
 * Swagger Routes Builder tool.
 *
 * Using this class the Documentation system will create everything needed
 * by the OpenAPI 3 paths specification.
 */
export default class SwaggerRoutes {
  /**
   * Method that extracts the routes from the route definition metadata.
   *
   * @param routesMetadata The list of documented routes from the metadata store.
   */
  public getRoutes(routesMetadata: Array<IRouteMetadata>): Record<string, unknown> {
    if (routesMetadata.length === 0) {
      return {};
    }

    return routesMetadata.reduce(
      (accum, route) => ({
        ...accum,
        ...this.groupPaths(route),
      }),
      {}
    );
  }

  /**
   * Method used to generate the full path of the endpoint, from the route
   * base path.
   *
   * @param basePath The base path from the route.
   * @param path The path of the endpoint.
   * @param parameters The list of parameters that appear in the endpoint URL.
   */
  protected getPath(basePath: string[], path: string, parameters: string[]): string {
    let newPath = getPath(...basePath, path);
    (parameters || []).forEach((parameter) => {
      newPath = newPath.replaceAll(`:${ parameter }`, `{${ parameter }}`);
    });

    return newPath;
  }

  /**
   * Group the endpoint calls based on the Endpoint URL and the HTTP verb used
   * to access the code.
   *
   * @param route The route metadata for which we create the groups.
   */
  protected groupPaths(route: IRouteMetadata): Record<string, Record<string, Record<string, unknown>>> {
    const groups = {};

    for (const endpoint of Object.values(route.endpoints)) {
      endpoint.parameters = { ...(route.parameters || {}), ...(endpoint.parameters || {}) };
      const path = this.getPath(route.basePath, endpoint.path, Object.keys(endpoint.parameters));
      if (!groups[path]) {
        groups[path] = {};
      }
      groups[path][endpoint.verb] = this.parsePath(endpoint, route.controller, [ route.name, ...(route.group || []) ]);
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
  protected parsePath(endpoint: IEndpointMetadata, controller: string, tags: string[]): Record<string, unknown> {
    const definition: Record<string, unknown> = {
      summary: endpoint.summary || endpoint.description || `${ controller }.${ endpoint.methodName }`,
      description: endpoint.description || "",
      operationId: `${ controller }.${ endpoint.methodName }`,
      tags,
    };

    if (endpoint.additionalInfo && endpoint.additionalInfo.length > 0) {
      definition.description = `${ definition.description }

**Additional Information:**

- ${ endpoint.additionalInfo.join("\n- ") }`;
    }

    if (endpoint.isAuthenticated) {
      definition.security = [ { [endpoint.authenticationMethod]: [] } ];

      definition.description = `${ definition.description }

**Requires User Authentication:** Yes

**Authentication type:** ${ endpoint.authenticationMethod }`;
    }

    if (Object.keys(endpoint.parameters).length) {
      definition.parameters = this.getParameters(Object.values(endpoint.parameters));
    }

    if (Object.keys(endpoint.query).length) {
      definition.parameters = [
        ...((definition.parameters as Array<Record<string, unknown>>) || []),
        ...this.getQueryParameters(Object.values(endpoint.query)),
      ];
    }

    definition.responses = this.getResponses(endpoint);

    if (endpoint.body || endpoint.bodyParameters) {
      definition.requestBody = endpoint.body
        ? this.getRequestBody(endpoint.body)
        : this.getRequestBodyDefinition(Object.values(endpoint.bodyParameters));
    }

    return definition;
  }

  /**
   * Method used to generate the OpenAPI 3 responses object for an endpoint based
   * on an Endpoint Response metadata object.
   *
   * @param responses The list of responses that can be returned by the endpoint.
   */
  protected getResponseSchemas(responses: Array<IEndpointResponse>): Record<string, Record<string, unknown>> {
    if (responses.length === 0) {
      return {};
    }

    return responses.reduce(
      (accum, response) => ({
        ...accum,
        [response.statusCode]: {
          description: this.getStatusDescription(response.statusCode.toString(), response.description),
          content: {
            [response.contentType || "application/json"]: {
              schema: {
                type: response.isArray ? "array" : !response.isSchema ? response.schema : undefined,
                format: response.isBinary ? "binary" : undefined,
                items: !response.isArray
                  ? undefined
                  : {
                    $ref: `#/components/schemas/${ response.schema }`,
                  },
                $ref: !response.isArray && response.isSchema ? `#/components/schemas/${ response.schema }` : undefined,
              },
            },
          },
        },
      }),
      {}
    );
  }

  /**
   * Method used to convert the HTTP status to a string value that can be used
   * as a status description.
   *
   * @param status The status we want to convert.
   * @param defaultValue A default value to be returned when the status isn't in the supported list.
   */
  protected getStatusDescription(status: string, defaultValue?: string) {
    switch (status) {
      case HTTPStatus.OK.toString():
        return "Ok";
      case HTTPStatus.NO_CONTENT.toString():
        return "No Content";
      case HTTPStatus.CREATED.toString():
        return "Created";
      case HTTPStatus.ACCEPTED.toString():
        return "Accepted";
      case HTTPStatus.BAD_REQUEST.toString():
        return "Bad Request";
      case HTTPStatus.FORBIDDEN.toString():
        return "Forbidden";
      case HTTPStatus.SERVER_ERROR.toString():
        return "Server Error";
      case HTTPStatus.UNAUTHORIZED.toString():
        return "Unauthorized";
      case HTTPStatus.NOT_FOUND.toString():
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
  protected getStatusesSchemas(statuses: Array<[string, string]>): Record<string, Record<string, unknown>> {
    if (statuses.length === 0) {
      return {};
    }

    return statuses.reduce(
      (accum, statusInfo) => ({
        ...accum,
        [statusInfo[0]]: {
          description: this.getStatusDescription(statusInfo[0], statusInfo[1]),
        },
      }),
      {}
    );
  }

  /**
   * Method used to generate the OpenAPI 3 responses object for an endpoint based
   * on a list with Error Response metadata objects.
   *
   * @param errors The list of errors that can be returned by the endpoint.
   */
  protected getErrors(errors: Array<IEndpointThrowResponse>): Record<string, any> {
    if (errors.length === 0) {
      return {};
    }
    return errors.reduce(
      (accum, error) => ({
        ...accum,
        [error.statusCode]: {
          description: error.description ?? "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorMessage",
              },
              example: {
                status: error.statusCode,
                message: error.response,
              },
            },
          },
        },
      }),
      {}
    );
  }

  /**
   * Method used to generate the OpenAPI 3 responses object for an endpoint based
   * on its metadata information.
   *
   * @param endpoint The endpoint metadata.
   */
  protected getResponses(endpoint: IEndpointMetadata): Record<string, any> {
    return {
      ...this.getResponseSchemas(Object.values(endpoint.responses)),
      ...this.getStatusesSchemas(Object.entries<string>(endpoint.statuses)),
      ...this.getErrors(Object.values(endpoint.throws)),
      500: {
        description: "General server error",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ErrorMessage",
            },
          },
        },
      },
    };
  }

  /**
   * Method used to generate the OpenAPI 3 parameters object for an endpoint based
   * on an Endpoint Parameter metadata object.
   *
   * @param parameters The list of URL parameters supported by the endpoint.
   */
  protected getParameters(parameters: Array<IEndpointParameter>): Array<Record<string, unknown>> {
    return parameters.map((parameter) => ({
      name: parameter.name,
      in: "path",
      description: parameter.description || '""',
      required: true,
      schema: {
        type: parameter.isNumeric ? EntityPropertyDataTypes.NUMBER : EntityPropertyDataTypes.STRING,
      },
    }));
  }

  /**
   * Method used to generate the OpenAPI 3 parameters object for an endpoint based
   * on an Endpoint Query Parameter metadata object.
   *
   * @param queryParameters The list of Query parameters supported by the endpoint.
   */
  protected getQueryParameters(queryParameters: Array<IEndpointQuery>): Array<Record<string, unknown>> {
    return queryParameters.map((parameter) => ({
      name: parameter.name,
      in: "query",
      description: parameter.description || '""',
      required: parameter.isRequired ?? false,
      schema: {
        type: parameter.type,
        items:
          parameter.type === QueryParameterType.ARRAY
            ? {
              type: parameter.arrayItems || QueryParameterType.STRING,
            }
            : undefined,
      },
    }));
  }

  /**
   * Method used to generate the OpenAPI 3 request body object for an endpoint based
   * on a list with Body Parameters Metadata objects.
   *
   * @param bodyDefinition The list with body parameters.
   */
  protected getRequestBodyDefinition(bodyDefinition: Array<IEndpointBodyParameter>): Record<string, unknown> {
    let required = bodyDefinition.filter((parameter) => parameter.required).map((parameter) => parameter.name);
    if (required.length === 0) {
      required = undefined;
    }
    let contentType = "application/json";
    if (bodyDefinition.find((parameter) => parameter.type === BodyParameterType.FILE)) {
      contentType = "multipart/form-data";
    }

    return {
      description: "Request body",
      required: true,
      content: {
        [contentType]: {
          schema: {
            type: EntityPropertyDataTypes.OBJECT,
            properties: bodyDefinition.reduce((accum, parameter) => {
              let schema: Record<string, unknown> = {
                type: parameter.type,
                default: parameter.defaultValue,
                description: parameter.description ?? "",
                format: parameter.type === BodyParameterType.FILE ? "binary" : undefined,
              };

              if (parameter.entity) {
                schema = {
                  $ref: `#/components/schemas/${ parameter.entity }`,
                };
              }

              if (parameter.isArray) {
                schema = {
                  type: EntityPropertyDataTypes.ARRAY,
                  items:
                    parameter.type === BodyParameterType.SCHEMA
                      ? {
                        $ref: `#/components/schemas/${ parameter.entity }`,
                      }
                      : {
                        type: parameter.type,
                        format: parameter.type === BodyParameterType.FILE ? "binary" : undefined,
                      },
                };
              }

              return {
                ...accum,
                [parameter.name]: schema,
              };
            }, {}),
            required,
          },
        },
      },
    };
  }

  /**
   * Method used to generate the OpenAPI 3 request body object for an endpoint based
   * on a Predefined Entity exposed by the Entity Metadata.
   *
   * @param bodyDefinition The body definition metadata information.
   */
  protected getRequestBody(bodyDefinition: IEndpointBody): Record<string, unknown> {
    let schema: Record<string, unknown> = {};
    const isBasicType = [ "number", "string", "boolean" ].indexOf(bodyDefinition.entity) >= 0;

    let itemsDefintion = {};
    if (isBasicType) {
      itemsDefintion = {
        type: bodyDefinition.entity,
      };
    } else {
      itemsDefintion = {
        $ref: `#/components/schemas/${ bodyDefinition.entity }`,
      };
    }

    if (bodyDefinition.isArray) {
      schema = {
        type: EntityPropertyDataTypes.ARRAY,
        items: itemsDefintion,
      };
    } else {
      schema = itemsDefintion;
    }

    return {
      description: bodyDefinition.description ?? MetadataStore.instance.entity.entity(bodyDefinition.entity).description ?? "",
      required: true,
      content: {
        "application/json": {
          schema,
        },
      },
    };
  }
}
