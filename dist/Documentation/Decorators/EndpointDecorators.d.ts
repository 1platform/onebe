import { RouteDecorator } from "../../Router";
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
export declare function EndpointDescription(description?: string): RouteDecorator;
/**
 * Decorator used to add a summary to an endpoint.
 *
 * @decorator
 * @param [summary] A short description of the controller.
 */
export declare function EndpointSummary(summary?: string): RouteDecorator;
/**
 * Decorator used to fully document an endpoint.
 *
 * @decorator
 * @param options A list of options that describe the endpoint.
 */
export declare function Endpoint(options: IEndpointDocumentation): RouteDecorator;
