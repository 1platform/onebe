import Route from "../Router/Route";
import ContextAPI from "../Router/ContextAPI";
export default class DocsController extends Route {
    constructor();
    getAppInfo(context: ContextAPI): Record<string, unknown>;
    getRoutes(context: ContextAPI): Record<string, unknown>;
    getOpenAPI(context: ContextAPI): Record<string, string>;
}
