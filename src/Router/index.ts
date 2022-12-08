export * from "@/Router/RouteDecorators";
export * from "@/Router/VerbsDecorators";
export * from "@/Router/RouteInterfaces";
export * from "@/Router/RouteUtils";
export * from "@/Router/RouteTypes";
export { default as Route } from "@/Router/Route";
export { default as ContextAPI } from "@/Router/ContextAPI";
export { default as AuthContextAPI } from "@/Router/AuthContextAPI";

import RouterBase from "@/Router/Router";

/**
 * The global default Router that the application is going to use.
 */
const Router = new RouterBase();
global.router = Router;
export { Router, RouterBase };
