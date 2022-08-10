import { RouteDecorator } from "../../../Router/RouteTypes";
import Route from "../../../Router/Route";
import MetadataStore from "../../MetadataStore";
import { IEndpointBodyParameter } from "../../Definition/RouteMetadata";
import { QueryParameterType } from "../../Definition/DataTypes";

export function Parameter(
  parameter: string,
  isNumeric = false,
  description?: string
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointParameter(
      target.constructor.name,
      propertyKey,
      {
        name: parameter,
        isNumeric: isNumeric ?? false,
        description,
      }
    );
  };
}

export function Query(
  parameter: string,
  type: QueryParameterType = QueryParameterType.STRING,
  description?: string
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointQuery(
      target.constructor.name,
      propertyKey,
      {
        name: parameter,
        type,
        description,
      }
    );
  };
}

export function Request(
  entity: string,
  isArray?: boolean,
  description?: string
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointBody(
      target.constructor.name,
      propertyKey,
      {
        entity,
        description,
        isArray: isArray ?? false,
      }
    );
  };
}

export function Body(
  parameters: IEndpointBodyParameter[] | IEndpointBodyParameter
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    if (!Array.isArray(parameters)) {
      parameters = [ parameters ];
    }

    MetadataStore.instance.route.endpointBodyParameters(
      target.constructor.name,
      propertyKey,
      parameters
    );
  };
}
