import Route from "../Router/Route";
export default class DocsController extends Route {
    constructor();
    getAppInfo(): Record<string, unknown>;
    getRoutes(): Record<string, unknown>;
    getOpenAPIYaml(): Record<string, string>;
    getOpenAPIJSON(): Record<string, any>;
}
