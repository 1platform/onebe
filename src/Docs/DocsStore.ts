import { Key, parse } from "path-to-regexp";
import HTTPStatus from "../HTTP/HTTPStatus";
import { IResponse } from "../Router/RouteInterfaces";
import Config from "../System/Config";
import { RouteDocs } from "./DocsDecorators";
import {
  BodyParameterType,
  IBodyDoc,
  IInterfaceDoc,
  IRouteDoc,
  ParameterType,
  TRoutesList,
} from "./DocsInterfaces";
import SwaggerBuilder from "./SwaggerBuilder";

export default class DocsStore {
  protected _routes: TRoutesList = {};
  protected _interfaces: Record<string, IInterfaceDoc> = {};

  private constructor() {
    // Do Nothing
  }

  protected static _instance: DocsStore;

  public static get instance(): DocsStore {
    if (!DocsStore._instance) {
      DocsStore._instance = new DocsStore();
    }

    return DocsStore._instance;
  }

  public initGroup(
    name: string,
    basePath: string,
    description = "",
    isAPI = false
  ): void {
    this._routes[name] = {
      name,
      description,
      isAPI,
      path: basePath,
      routes: [],
    };
  }

  public setGroupItem(name: string, key: string, value: string): void {
    switch (key) {
      case "description":
      case "name":
        this._routes[name][key] = value;
        break;
    }
  }

  public addRoute(
    group: string,
    routeDefinition: IRouteDoc,
    docs: RouteDocs
  ): void {
    if (!this._routes[group]) {
      this._routes[group] = {
        name: group,
        description: "",
        path: group,
        isAPI: false,
        routes: [],
      };
    }
    const parameters = parse(routeDefinition.path)
      .filter((param) => typeof param !== "string")
      .reduce((accum, param) => {
        const name = (param as Key).name.toString();
        return {
          ...accum,
          [name]: {
            name,
            type: ParameterType.STRING,
          },
        };
      }, {});

    let path = routeDefinition.path;
    Object.keys(parameters).forEach((parameter) => {
      path = path.replaceAll(`:${ parameter }`, `{${ parameter }}`);
    });

    if (docs.response) {
      routeDefinition.responseStatus = docs.response.statusCode as HTTPStatus;
    }

    if (docs.body && Object.keys(docs.body).length > 0) {
      routeDefinition.request = docs.body as Record<string, IBodyDoc>;
    }

    this._routes[group].routes.push({
      ...routeDefinition,
      path,
      parameters,
      errors: Object.values(docs.throw || {}).reduce(
        (accum: Record<string, string>, value: IResponse<string>) => ({
          ...accum,
          [value.statusCode.toString()]: value.body,
        }),
        {}
      ) as Record<string, string>,
    });
  }

  public getRoutes(): any {
    if (!Config.boolean("docs.expose")) {
      return {};
    }
    return this._routes;
  }

  public getYaml(): string {
    if (!Config.boolean("docs.expose")) {
      return "";
    }

    const builder = new SwaggerBuilder(this._routes, this._interfaces);
    return builder.getYaml();
  }

  public defineInterface(name: string, description?: string): void {
    this._interfaces[name] = {
      name,
      description,
      type: BodyParameterType.OBJECT,
      properties: [],
    };
  }

  public addInterfaceProperty(
    interfaceName: string,
    definition: IBodyDoc
  ): void {
    this._interfaces[interfaceName].properties.push({
      required: true,
      ...definition,
    });
  }
}
