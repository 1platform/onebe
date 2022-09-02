import RouterBase from "./Router";

/**
 * The global default Router that the application is going to use.
 */
const Router = new RouterBase();

global.router = Router;
export default Router;
