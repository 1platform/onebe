import { RouteDocs } from "./DocsDecorators";
import { IBodyDoc, IInterfaceDoc, IRouteDoc, TRoutesList } from "./DocsInterfaces";
export default class DocsStore {
    protected _routes: TRoutesList;
    protected _interfaces: Record<string, IInterfaceDoc>;
    private constructor();
    protected static _instance: DocsStore;
    static get instance(): DocsStore;
    initGroup(name: string, basePath: string, description?: string, isAPI?: boolean): void;
    setGroupItem(name: string, key: string, value: string): void;
    addRoute(group: string, routeDefinition: IRouteDoc, docs: RouteDocs): void;
    getRoutes(): any;
    getYaml(): string;
    defineInterface(name: string, description?: string): void;
    addInterfaceProperty(interfaceName: string, definition: IBodyDoc): void;
}
