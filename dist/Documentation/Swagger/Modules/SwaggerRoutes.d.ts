import { IEndpointBody, IEndpointBodyParameter, IEndpointMetadata, IEndpointParameter, IEndpointQuery, IEndpointResponse, IEndpointThrowResponse, IRouteMetadata } from "../../Definition/RouteMetadata";
export default class SwaggerRoutes {
    getRoutes(routesMetadata: Array<IRouteMetadata>): Record<string, unknown>;
    protected getPath(basePath: string[], path: string, parameters: string[]): string;
    protected groupPaths(route: IRouteMetadata): Record<string, Record<string, Record<string, unknown>>>;
    protected parsePath(endpoint: IEndpointMetadata, controller: string, tags: string[]): Record<string, unknown>;
    protected getResponseSchemas(responses: Array<IEndpointResponse>): Record<string, Record<string, unknown>>;
    protected getStatusDescription(status: string, defaultValue?: string): string;
    protected getStatusesSchemas(statuses: Array<[string, string]>): Record<string, Record<string, unknown>>;
    protected getErrors(errors: Array<IEndpointThrowResponse>): Record<string, any>;
    protected getResponses(endpoint: IEndpointMetadata): Record<string, any>;
    protected getParameters(parameters: Array<IEndpointParameter>): Array<Record<string, unknown>>;
    protected getQueryParameters(queryParameters: Array<IEndpointQuery>): Array<Record<string, unknown>>;
    protected getRequestBodyDefinition(bodyDefinition: Array<IEndpointBodyParameter>): Record<string, unknown>;
    protected getRequestBody(bodyDefinition: IEndpointBody): Record<string, unknown>;
}
