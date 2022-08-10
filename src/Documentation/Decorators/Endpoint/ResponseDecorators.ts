import HTTPStatus from "../../../HTTP/HTTPStatus";
import { ResponseValue, RouteDecorator } from "../../../Router/RouteTypes";
import MetadataStore from "../../MetadataStore";
import Route from "../../../Router/Route";

/**
 * Decorator to add a response to a method.
 *
 * @decorator
 * @param type The type of the response
 * @param statusCode The status code of the response
 * @param description The description of the response
 */
export function Response(
  type: string,
  statusCode = HTTPStatus.OK,
  description?: string
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointResponse(
      target.constructor.name,
      propertyKey,
      {
        statusCode,
        description,
        schema: type,
        isArray: false,
      }
    );
  };
}

export function ResponseArray(
  type: string,
  statusCode = HTTPStatus.OK,
  description?: string
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointResponse(
      target.constructor.name,
      propertyKey,
      {
        statusCode,
        description,
        schema: type,
        isArray: true,
      }
    );
  };
}

export function Throws<Response = any>(
  errorCode: HTTPStatus,
  description?: string,
  response?: ResponseValue<Response>
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointThrows(
      target.constructor.name,
      propertyKey,
      {
        statusCode: errorCode,
        description,
        response,
      }
    );
  };
}

export function Status(
  errorCode: HTTPStatus,
  description?: string
): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointStatus(
      target.constructor.name,
      propertyKey,
      errorCode,
      description
    );
  };
}
