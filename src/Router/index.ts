export * from "./RouteDecorators";
export * from "./VerbsDecorators";
export * from "./RouteInterfaces";
export * from "./RouteUtils";
export * from "./RouteTypes";
export { default as Route } from "./Route";
export { default as ContextAPI } from "./ContextAPI";
export { default as AuthContextAPI } from "./AuthContextAPI";

import RouterBase from "./Router";

/**
 * The global default Router that the application is going to use.
 */
const Router = new RouterBase();
global.router = Router;
export { Router, RouterBase };
