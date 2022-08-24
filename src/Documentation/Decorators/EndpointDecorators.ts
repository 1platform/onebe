import { RouteDecorator } from "../../Router/RouteTypes";
import Route from "../../Router/Route";
import MetadataStore from "../MetadataStore";
import { IEndpointDocumentation } from "../Definition/RouteMetadata";

/**
 * All the request documentation decorators.
 */
export * as RequestDocs from "./Endpoint/RequestDecorators";

/**
 * All the response documentation decorators.
 */
export * as ResponseDocs from "./Endpoint/ResponseDecorators";

/**
 * Decorator used to add a description to an endpoint.
 *
 * @decorator
 * @param [description] A short description of the controller.
 */
export function EndpointDescription(description?: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointDescription(target.constructor.name, propertyKey, description);
  };
}

/**
 * Decorator used to add a summary to an endpoint.
 *
 * @decorator
 * @param [summary] A short description of the controller.
 */
export function EndpointSummary(summary?: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointSummary(target.constructor.name, propertyKey, summary);
  };
}

/**
 * Decorator used to fully document an endpoint.
 *
 * @decorator
 * @param options A list of options that describe the endpoint.
 */
export function Endpoint(options: IEndpointDocumentation): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointDocumentation(target.constructor.name, propertyKey, options);
  };
}
