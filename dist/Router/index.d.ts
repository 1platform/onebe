import { Router as ExpressRouter } from "express";
import Route from "./Route";
export declare class RouterBase {
    protected _controllers: Array<Route>;
    protected _router: ExpressRouter;
    get router(): ExpressRouter;
    register(controllersPath: string): Promise<void>;
    private registerControllers;
    private fetchControllers;
}
declare const Router: RouterBase;
export default Router;
