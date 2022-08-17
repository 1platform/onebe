import { IEndpointBody, IEndpointBodyParameter, IEndpointDocumentation, IEndpointMetadata, IEndpointOptions, IEndpointParameter, IEndpointQuery, IEndpointResponse, IEndpointThrowResponse, IRouteMetadata } from "./Definition/RouteMetadata";
import { CallbackExtractorParameter } from "../Router/RouteTypes";
import { ICallbackExtracted } from "../Router/RouteInterfaces";
import HTTPStatus from "../HTTP/HTTPStatus";
export default class RouteDefinition {
    private _routes;
    get list(): Array<IRouteMetadata>;
    add(controller: string, basePath?: string, description?: string): RouteDefinition;
    update(controller: string, basePath?: string, description?: string): IRouteMetadata;
    setName(controller: string, name: string): IRouteMetadata;
    setDescription(controller: string, description?: string): IRouteMetadata;
    route(controller: string): IRouteMetadata;
    markAsAPI(controller: string, basePath: string): RouteDefinition;
    markAsCustom(controller: string, basePath: string): RouteDefinition;
    markAsDocs(controller: string): RouteDefinition;
    isDocs(controller: string): boolean;
    group(controller: string, groupName: string): RouteDefinition;
    endpoint<Request = any, Response = any>(controller: string, options: IEndpointOptions): IEndpointMetadata;
    endpointDescription<Request = any, Response = any>(controller: string, methodName: string, description?: string): IEndpointMetadata;
    endpointSummary<Request = any, Response = any>(controller: string, methodName: string, summary?: string): IEndpointMetadata;
    endpointAuth(controller: string, methodName: string, method: string): IEndpointMetadata;
    endpointThrows(controller: string, methodName: string, options: IEndpointThrowResponse): IEndpointMetadata;
    endpointStatus(controller: string, methodName: string, statusCode: HTTPStatus, description?: string): IEndpointMetadata;
    endpointResponse(controller: string, methodName: string, options: IEndpointResponse): IEndpointMetadata;
    endpointParameter(controller: string, methodName: string, options: IEndpointParameter): void;
    endpointQuery(controller: string, methodName: string, options: IEndpointQuery): IEndpointMetadata;
    endpointBodyParameters(controller: string, methodName: string, parameters: Array<IEndpointBodyParameter>): IEndpointMetadata;
    endpointBody(controller: string, methodName: string, options: IEndpointBody): IEndpointMetadata;
    endpointDocumentation(controller: string, methodName: string, options: IEndpointDocumentation): void;
    protected getEndpoint<Request, Response>(controller: string, methodName: string, options?: IEndpointOptions): IEndpointMetadata<Request, Response>;
    /**
     * Function used to extract the Route callback from the middlewares list.
     *
     * @param fn The middlewares lists.
     */
    protected callbackExtractor<Request = any, Response = any>(fn: CallbackExtractorParameter<Request, Response>): ICallbackExtracted<Request, Response>;
}
