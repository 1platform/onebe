import { Router as ExpressRouter } from "express";
import Route from "./Route";
import { IEndpointMetadata, IRouteMetadata } from "../Documentation/Definition/RouteMetadata";
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
     * Register the controllers in the given path.
     *
     * @param controllersPath The path from which we will import controllers.
     */
    register(controllersPath: string): Promise<void>;
    parseRoute(route: IRouteMetadata): void;
    protected getPath(basePath: string, path: string): string;
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
 * The global default Router that we are going to use in our application.
 */
declare const Router: RouterBase;
export default Router;
