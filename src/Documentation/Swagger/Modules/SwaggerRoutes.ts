import {
  IEndpointBody,
  IEndpointBodyParameter,
  IEndpointMetadata,
  IEndpointParameter,
  IEndpointQuery,
  IEndpointResponse,
  IEndpointThrowResponse,
  IRouteMetadata,
} from "../../Definition/RouteMetadata";
import { EntityPropertyDataTypes, QueryParameterType } from "../../Definition/DataTypes";
import HTTPStatus from "../../../HTTP/HTTPStatus";
import { getPath } from "../../../Router/RouteUtils";
import MetadataStore from "../../MetadataStore";

export default class SwaggerRoutes {
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

  protected getPath(basePath: string[], path: string, parameters: string[]): string {
    let newPath = getPath(...basePath, path);
    parameters.forEach((parameter) => {
      newPath = newPath.replaceAll(`:${ parameter }`, `{${ parameter }}`);
    });

    return newPath;
  }

  protected groupPaths(route: IRouteMetadata): Record<string, Record<string, Record<string, unknown>>> {
    const groups = {};

    for (const endpoint of Object.values(route.endpoints)) {
      const path = this.getPath(route.basePath, endpoint.path, Object.keys(endpoint.parameters));
      if (!groups[path]) {
        groups[path] = {};
      }

      groups[path][endpoint.verb] = this.parsePath(endpoint, route.controller, [ route.name, ...(route.group || []) ]);
    }

    return groups;
  }

  protected parsePath(endpoint: IEndpointMetadata, controller: string, tags: string[]): Record<string, unknown> {
    const definition: Record<string, unknown> = {
      summary: endpoint.summary || endpoint.description || `${ controller }.${ endpoint.methodName }`,
      description: endpoint.description || "",
      operationId: `${ controller }.${ endpoint.methodName }`,
      tags,
    };

    if (endpoint.isAuthenticated) {
      definition.security = [ { [endpoint.authenticationMethod]: [] } ];
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
            "application/json": {
              schema: {
                type: response.isArray ? "array" : !response.isSchema ? response.schema : undefined,
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
    }

    return defaultValue || "";
  }

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

  protected getRequestBodyDefinition(bodyDefinition: Array<IEndpointBodyParameter>): Record<string, unknown> {
    let required = bodyDefinition.filter((parameter) => parameter.required).map((parameter) => parameter.name);
    if (required.length === 0) {
      required = undefined;
    }
    return {
      description: "Request body",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: EntityPropertyDataTypes.OBJECT,
            properties: bodyDefinition.reduce((accum, parameter) => {
              let schema: Record<string, unknown> = {
                type: parameter.type,
                default: parameter.defaultValue,
                description: parameter.description ?? "",
              };

              if (parameter.entity) {
                schema = {
                  $ref: `#/components/schemas/${ parameter.entity }`,
                };
              }

              if (parameter.isArray) {
                schema = {
                  type: EntityPropertyDataTypes.ARRAY,
                  items: {
                    $ref: `#/components/schemas/${ parameter.entity }`,
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

  protected getRequestBody(bodyDefinition: IEndpointBody): Record<string, unknown> {
    let schema: Record<string, unknown> = {};

    if (bodyDefinition.isArray) {
      schema = {
        type: EntityPropertyDataTypes.ARRAY,
        items: {
          $ref: `#/components/schemas/${ bodyDefinition.entity }`,
        },
      };
    } else {
      schema = {
        $ref: `#/components/schemas/${ bodyDefinition.entity }`,
      };
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
