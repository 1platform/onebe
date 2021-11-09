import { IInterfaceDoc, TRoutesList } from "./DocsInterfaces";
export default class SwaggerBuilder {
    protected _routes: TRoutesList;
    protected _interfaces: Record<string, IInterfaceDoc>;
    constructor(routes: TRoutesList, interfaces: Record<string, IInterfaceDoc>);
    getYaml(): string;
    private getComponents;
    private getTags;
    private getPaths;
    private _displayRouteGroup;
    private _getParameters;
    private _getErrors;
    private _getDefaultResponse;
    private _getRequestBody;
}
