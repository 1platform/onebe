import { RouteDecorator } from "../../Router/RouteTypes";
import Route from "../../Router/Route";
import MetadataStore from "../MetadataStore";
import { IEndpointDocumentation } from "../Definition/RouteMetadata";

export * as RequestDocs from "./Endpoint/RequestDecorators";
export * as ResponseDocs from "./Endpoint/ResponseDecorators";

export function EndpointDescription(description?: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointDescription(target.constructor.name, propertyKey, description);
  };
}

export function EndpointSummary(summary?: string): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointSummary(target.constructor.name, propertyKey, summary);
  };
}

export function Endpoint(options: IEndpointDocumentation): RouteDecorator {
  return (target: Route, propertyKey: string): void => {
    MetadataStore.instance.route.endpointDocumentation(target.constructor.name, propertyKey, options);
  };
}
