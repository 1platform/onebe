import { IEndpointBody, IEndpointBodyParameter, IEndpointMetadata, IEndpointParameter, IEndpointQuery, IEndpointResponse, IEndpointThrowResponse, IRouteMetadata } from "../../Definition/RouteMetadata";
/**
 * Swagger Routes Builder tool.
 *
 * Using this class the Documentation system will create everything needed
 * by the OpenAPI 3 paths specification.
 */
export default class SwaggerRoutes {
    /**
     * Method that extracts the routes from the route definition metadata.
     *
     * @param routesMetadata The list of documented routes from the metadata store.
     */
    getRoutes(routesMetadata: Array<IRouteMetadata>): Record<string, unknown>;
    /**
     * Method used to generate the full path of the endpoint, from the route
     * base path.
     *
     * @param basePath The base path from the route.
     * @param path The path of the endpoint.
     * @param parameters The list of parameters that appear in the endpoint URL.
     */
    protected getPath(basePath: string[], path: string, parameters: string[]): string;
    /**
     * Group the endpoint calls based on the Endpoint URL and the HTTP verb used
     * to access the code.
     *
     * @param route The route metadata for which we create the groups.
     */
    protected groupPaths(route: IRouteMetadata): Record<string, Record<string, Record<string, unknown>>>;
    /**
     * Method used to parse the endpoint metadata information and generate
     * the OpenAPI 3 path specification object.
     *
     * @param endpoint The endpoint metadata.
     * @param controller The route where the endpoint is located.
     * @param tags A list of tags that are used to group the endpoint.
     */
    protected parsePath(endpoint: IEndpointMetadata, controller: string, tags: string[]): Record<string, unknown>;
    /**
     * Method used to generate the OpenAPI 3 responses object for an endpoint based
     * on an Endpoint Response metadata object.
     *
     * @param responses The list of responses that can be returned by the endpoint.
     */
    protected getResponseSchemas(responses: Array<IEndpointResponse>): Record<string, Record<string, unknown>>;
    /**
     * Method used to convert the HTTP status to a string value that can be used
     * as a status description.
     *
     * @param status The status we want to convert.
     * @param defaultValue A default value to be returned when the status isn't in the supported list.
     */
    protected getStatusDescription(status: string, defaultValue?: string): string;
    /**
     * Method used to generate the OpenAPI 3 responses object for an endpoint based
     * on a list with statuses and descriptions.
     *
     * @param statuses The list of statuses that can be returned by the endpoint.
     */
    protected getStatusesSchemas(statuses: Array<[string, string]>): Record<string, Record<string, unknown>>;
    /**
     * Method used to generate the OpenAPI 3 responses object for an endpoint based
     * on a list with Error Response metadata objects.
     *
     * @param errors The list of errors that can be returned by the endpoint.
     */
    protected getErrors(errors: Array<IEndpointThrowResponse>): Record<string, any>;
    /**
     * Method used to generate the OpenAPI 3 responses object for an endpoint based
     * on its metadata information.
     *
     * @param endpoint The endpoint metadata.
     */
    protected getResponses(endpoint: IEndpointMetadata): Record<string, any>;
    /**
     * Method used to generate the OpenAPI 3 parameters object for an endpoint based
     * on an Endpoint Parameter metadata object.
     *
     * @param parameters The list of URL parameters supported by the endpoint.
     */
    protected getParameters(parameters: Array<IEndpointParameter>): Array<Record<string, unknown>>;
    /**
     * Method used to generate the OpenAPI 3 parameters object for an endpoint based
     * on an Endpoint Query Parameter metadata object.
     *
     * @param queryParameters The list of Query parameters supported by the endpoint.
     */
    protected getQueryParameters(queryParameters: Array<IEndpointQuery>): Array<Record<string, unknown>>;
    /**
     * Method used to generate the OpenAPI 3 request body object for an endpoint based
     * on a list with Body Parameters Metadata objects.
     *
     * @param bodyDefinition The list with body parameters.
     */
    protected getRequestBodyDefinition(bodyDefinition: Array<IEndpointBodyParameter>): Record<string, unknown>;
    /**
     * Method used to generate the OpenAPI 3 request body object for an endpoint based
     * on a Predefined Entity exposed by the Entity Metadata.
     *
     * @param bodyDefinition The body definition metadata information.
     */
    protected getRequestBody(bodyDefinition: IEndpointBody): Record<string, unknown>;
}
