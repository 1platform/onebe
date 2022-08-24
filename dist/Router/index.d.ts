import { Router as ExpressRouter } from "express";
import Route from "./Route";
import { IEndpointMetadata, IRouteMetadata } from "../Documentation/Definition/RouteMetadata";
/**
 * Class used to define the Router base of the application.
 *
 * Inside this class the magic happens:
 * - All the endpoints are registered under their specific path.
 * - All controllers are loaded where and when they should.
 */
export declare class RouterBase {
    /**
     * The list with controllers we want to register.
     */
    protected _controllers: Array<Route>;
    /**
     * The base router that we are going to use.
     */
    protected _router: ExpressRouter;
    /**
     * The getter for the base router we will use.
     */
    get router(): ExpressRouter;
    /**
     * Register the controllers under the given path.
     *
     * @param controllersPath The path from which we will import controllers.
     */
    register(controllersPath: string): Promise<void>;
    /**
     * Method used to manually register a controller in the application.
     *
     * @param controller The controller instance you want registered.
     */
    add(controller: Route): void;
    /**
     * Method used to parse the given route metadata and register all the endpoints under that
     * router.
     *
     * @param route The route metadata we want to load.
     */
    parseRoute(route: IRouteMetadata): void;
    /**
     * Method used to register endpoints in the router under a given base path and with the
     * given endpoint metadata.
     *
     * @param basePath The base path under which the application registers the endpoint.
     * @param endpoint The endpoint metadata you need to be registered.
     */
    protected loadEndpoint(basePath: string, endpoint: IEndpointMetadata): void;
    /**
     * The method used to register the controllers in a path. It will make recursive calls
     * to itself if we have other folders inside the current path.
     *
     * @param basePath The base folder path from where we read.
     * @param structure The current parent structure from where we read the controller structure.
     */
    private registerControllers;
    /**
     * Returns the controller structure from the current folder, together with children folders.
     *
     * @param basePath The base path from where we read the structure.
     */
    private fetchControllers;
}
/**
 * The global default Router that the application is going to use.
 */
declare const Router: RouterBase;
export default Router;
