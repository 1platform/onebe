import { QueryParameterType } from "@/Documentation/Definition/DataTypes";
import { IEndpointBodyParameter } from "@/Documentation/Definition/RouteMetadata";
import MetadataStore from "@/Documentation/MetadataStore";
import { Route, RouteDecorator } from "@/Router";

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
export function Parameter(parameter: string, isNumeric = false, description?: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointParameter(target.constructor.name, propertyKey, {
      name: parameter,
      isNumeric: isNumeric ?? false,
      description,
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
export function Query(parameter: string, type: QueryParameterType = QueryParameterType.STRING, description?: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointQuery(target.constructor.name, propertyKey, {
      name: parameter,
      type,
      description,
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
export function Request(entity: string, isArray?: boolean, description?: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointBody(target.constructor.name, propertyKey, {
      entity,
      description,
      isArray: isArray ?? false,
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
export function Body(parameters: IEndpointBodyParameter[] | IEndpointBodyParameter): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    if (!Array.isArray(parameters)) {
      parameters = [ parameters ];
    }

    MetadataStore.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, parameters);
  };
}
