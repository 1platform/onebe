import { RouteDecorator } from "@/Router";
import Route from "@/Router/Route";
import MetadataStore from "@/Documentation/MetadataStore";
import { IEndpointDocumentation } from "@/Documentation/Definition/RouteMetadata";

/**
 * All the request documentation decorators.
 */
export * as RequestDocs from "@/Documentation/Decorators/Endpoint/RequestDecorators";

/**
 * All the response documentation decorators.
 */
export * as ResponseDocs from "@/Documentation/Decorators/Endpoint/ResponseDecorators";

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

/**
 * Add additional information to the endpoint.
 *
 * @decorator
 * @param info The additional information you want to add to the endpoint.
 */
export function AdditionalInformation(info: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.additionalInformation(target.constructor.name, propertyKey, info);
  };
}
