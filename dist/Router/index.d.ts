export * from "./RouteDecorators";
export * from "./VerbsDecorators";
export * from "./RouteInterfaces";
export * from "./RouteUtils";
export * from "./RouteTypes";
import Route from "./Route";
import ContextAPI from "./ContextAPI";
import AuthContextAPI from "./AuthContextAPI";
import RouterBase from "./Router";
export { Route, ContextAPI, AuthContextAPI };
/**
 * The global default Router that the application is going to use.
 */
declare const Router: RouterBase;
export default Router;
