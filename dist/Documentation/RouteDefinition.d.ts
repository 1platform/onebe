import { IEndpointBody, IEndpointBodyParameter, IEndpointDocumentation, IEndpointMetadata, IEndpointOptions, IEndpointParameter, IEndpointQuery, IEndpointResponse, IEndpointThrowResponse, IRouteMetadata } from "./Definition/RouteMetadata";
import type { ICallbackExtracted } from "../Router";
import { CallbackExtractorParameter } from "../Router";
import { HTTPStatus } from "../HTTP";
/**
 * Route Definition Metadata store.
 *
 * In this class the framework store information about all the routes exposed
 * by your application, like: the base path, the name of the route, the
 * endpoints that are exposed by the route etc.
 */
export default class RouteDefinition {
    /**
     * List with all the routes exposed by the application, together
     * with the metadata information you want to expose.
     */
    private _routes;
    /**
     * Getter for the list of routes available in the application.
     */
    get list(): Array<IRouteMetadata>;
    /**
     * Method used to add a new Route into the Route Metadata store.
     *
     * @param controller The controller we want to add.
     * @param [basePath] The basePath of the controller.
     * @param [description] A short description of the controller.
     */
    add(controller: string, basePath?: string, description?: string): RouteDefinition;
    /**
     * Method used to update Route information.
     *
     * @param controller The controller we want to update.
     * @param [basePath] The basePath of the controller.
     * @param [description] A short description of the controller.
     */
    update(controller: string, basePath?: string, description?: string): IRouteMetadata;
    /**
     * Method used to set the name of a route.
     *
     * @param controller The controller we want to update.
     * @param name The name of the route.
     */
    setName(controller: string, name: string): IRouteMetadata;
    /**
     * Method used to set the description of a route.
     *
     * @param controller The controller we want to update.
     * @param [description] A short description of the controller.
     */
    setDescription(controller: string, description?: string): IRouteMetadata;
    /**
     * Method used to get (and create if it doesn't exist yet) a route from
     * the metadata store.
     *
     * @param controller The controller we want to update.
     */
    route(controller: string): IRouteMetadata;
    /**
     * Method used to mark a route as an API route.
     *
     * @param controller The controller we want to update.
     * @param basePath The base path we want to prepend to the controller base path.
     */
    markAsAPI(controller: string, basePath: string): RouteDefinition;
    /**
     * Method used to mark a route as a Custom route.
     *
     * @param controller The controller we want to update.
     * @param basePath The base path we want to prepend to the controller base path.
     */
    markAsCustom(controller: string, basePath: string): RouteDefinition;
    /**
     * Method used to mark a route as a Documentation route.
     *
     * @param controller The controller we want to update.
     */
    markAsDocs(controller: string): RouteDefinition;
    /**
     * Checks if a route is a Documentation one.
     *
     * @param controller The controller we want to update.
     */
    isDocs(controller: string): boolean;
    /**
     * Defines the group the route is a member of.
     *
     * @param controller The controller we want to update.
     * @param groupName A list of groups the route is member of.
     */
    group(controller: string, groupName: string): RouteDefinition;
    /**
     * Method used to create (or update) an endpoint of a route.
     *
     * @param controller The controller we want to update.
     * @param options Options used to define an endpoint.
     */
    endpoint<Request = any, Response = any>(controller: string, options: IEndpointOptions): IEndpointMetadata;
    /**
     * Method used to set a description to an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param [description] Detailed information about what the endpoint does.
     */
    endpointDescription<Request = any, Response = any>(controller: string, methodName: string, description?: string): IEndpointMetadata;
    /**
     * Method used to set a summary to an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param [summary] A short description of the endpoint
     */
    endpointSummary<Request = any, Response = any>(controller: string, methodName: string, summary?: string): IEndpointMetadata;
    /**
     * Method used to set the authentication method to an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param authenticationMethod The authentication method used on the endpoint.
     */
    endpointAuth(controller: string, methodName: string, authenticationMethod: string): IEndpointMetadata;
    /**
     * Method used to set information about an error thrown by an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param options A list with options related to the error thrown.
     */
    endpointThrows(controller: string, methodName: string, options: IEndpointThrowResponse): IEndpointMetadata;
    /**
     * Method used to set information about a status of an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param statusCode The status code returned by the endpoint.
     * @param [description] A short description of the returned status code.
     */
    endpointStatus(controller: string, methodName: string, statusCode: HTTPStatus, description?: string): IEndpointMetadata;
    /**
     * Method used to set information about a response of an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param options Information about the response object returned by the endpoint.
     */
    endpointResponse(controller: string, methodName: string, options: IEndpointResponse): IEndpointMetadata;
    /**
     * Method used to set information about a URL parameter of an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param options Information about the parameter received by the endpoint.
     */
    endpointParameter(controller: string, methodName: string, options: IEndpointParameter): void;
    /**
     * Method used to set information about a Query parameter of an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param options Information about the parameter received by the endpoint.
     */
    endpointQuery(controller: string, methodName: string, options: IEndpointQuery): IEndpointMetadata;
    /**
     * Method used to set details about the request body of an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param parameters A list with parameters found in the request body.
     */
    endpointBodyParameters(controller: string, methodName: string, parameters: Array<IEndpointBodyParameter>): IEndpointMetadata;
    /**
     * Method used to set details about the request body of an endpoint.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param options Information about the used entity as the body request of the endpoint.
     */
    endpointBody(controller: string, methodName: string, options: IEndpointBody): IEndpointMetadata;
    /**
     * Method used to set all the documentation details of the endpoint.
     *
     * @param controller The controller we want to update.sn
     * @param methodName The name of the method on which we want to add information.
     * @param options A list of options used for documenting the endpoint directly, without using multiple decorators.
     */
    endpointDocumentation(controller: string, methodName: string, options: IEndpointDocumentation): void;
    /**
     * Method used to mark an endpoint as one that accepts files for upload.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param [isMultiFile] The endpoint supports single or multiple file upload.
     */
    isUpload(controller: string, methodName: string, isMultiFile?: boolean): void;
    /**
     * Method used to mark an endpoint as protected by a Signed URL.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     */
    isSigned(controller: string, methodName: string): void;
    /**
     * Method used to get metadata information about an endpoint. Using this method the
     * documentation system will check if the endpoint exists in the route. If it doesn't exist,
     * the endpoint is created with the given default values.
     *
     * @param controller The controller we want to update.
     * @param methodName The name of the method on which we want to add information.
     * @param [options] A list of endpoint metadata information used as the base for creation when it doesn't exist.
     */
    protected getEndpoint<Request, Response>(controller: string, methodName: string, options?: IEndpointOptions): IEndpointMetadata<Request, Response>;
    /**
     * Method used to extract the Route callback from the middlewares list of an endpoint.
     *
     * @param fn The middlewares lists.
     */
    protected callbackExtractor<Request = any, Response = any>(fn: CallbackExtractorParameter<Request, Response>): ICallbackExtracted<Request, Response>;
}
