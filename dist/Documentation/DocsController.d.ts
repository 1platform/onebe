import { Route } from "../Router";
export default class DocsController extends Route {
    constructor();
    getAppInfo(): Record<string, unknown>;
    getRoutes(): Record<string, unknown>;
    getOpenAPIYaml(): Record<string, string>;
    getOpenAPIJSON(): Record<string, any>;
}
