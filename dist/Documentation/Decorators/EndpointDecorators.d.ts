import { RouteDecorator } from "../../Router/RouteTypes";
import { IEndpointDocumentation } from "../Definition/RouteMetadata";
export * as RequestDocs from "./Endpoint/RequestDecorators";
export * as ResponseDocs from "./Endpoint/ResponseDecorators";
export declare function EndpointDescription(description?: string): RouteDecorator;
export declare function EndpointSummary(summary?: string): RouteDecorator;
export declare function Endpoint(options: IEndpointDocumentation): RouteDecorator;
