import { IEndpointMetadata, IEndpointOptions, IEndpointThrowResponse, IRouteMetadata } from "./Definition/RouteMetadata";
import { CallbackExtractorParameter } from "../Router/RouteTypes";
import { ICallbackExtracted } from "../Router/RouteInterfaces";
export default class RouteDefinition {
    private _routes;
    get list(): Array<IRouteMetadata>;
    add(controller: string, basePath?: string, description?: string): RouteDefinition;
    update(controller: string, basePath?: string, description?: string): IRouteMetadata;
    setName(controller: string, name: string): IRouteMetadata;
    route(controller: string): IRouteMetadata;
    markAsAPI(controller: string, basePath: string): RouteDefinition;
    markAsCustom(controller: string, basePath: string): RouteDefinition;
    group(controller: string, groupName: string): RouteDefinition;
    endpoint<Request = any, Response = any>(controller: string, options: IEndpointOptions): IEndpointMetadata;
    endpointAuth(controller: string, methodName: string, method: string): void;
    endpointThrows(controller: any, methodName: any, options: IEndpointThrowResponse): void;
    protected getEndpoint<Request, Response>(controller: any, methodName: any, options?: IEndpointOptions): IEndpointMetadata<Request, Response>;
    /**
     * Function used to extract the Route callback from the middlewares list.
     *
     * @param fn The middlewares lists.
     */
    protected callbackExtractor<Request = any, Response = any>(fn: CallbackExtractorParameter<Request, Response>): ICallbackExtracted<Request, Response>;
}
