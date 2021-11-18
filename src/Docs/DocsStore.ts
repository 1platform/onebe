import { Key, parse } from "path-to-regexp";
import HTTPStatus from "../HTTP/HTTPStatus";
import { IResponse } from "../Router/RouteInterfaces";
import Config from "../System/Config";
import { RouteDocs } from "./DocsDecorators";
import {
  BodyParameterType,
  IBodyDoc,
  IInterfaceDoc,
  IQueryParameterDoc,
  IRouteDoc,
  ParameterType,
  TRoutesList,
} from "./DocsInterfaces";
import SwaggerBuilder from "./SwaggerBuilder";

/**
 * Class representing the Docs store
 */
export default class DocsStore {
  /**
   * The list of routes
   */
  protected _routes: TRoutesList = {};
  /**
   * The list of interfaces
   */
  protected _interfaces: Record<string, IInterfaceDoc> = {};

  /**
   * The constructor of the Docs store
   */
  private constructor() {
    // Do Nothing
  }

  /**
   * The Docs store instance
   */
  protected static _instance: DocsStore;

  /**
   * Get method to retrieve the Docs store instance
   */
  public static get instance(): DocsStore {
    if (!DocsStore._instance) {
      DocsStore._instance = new DocsStore();
    }

    return DocsStore._instance;
  }

  /**
   * Method used to initialize a Group
   *
   * @param name The name
   * @param basePath The base path
   * @param description The description
   * @param isAPI If it is an API
   */
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

  /**
   * Method used to set a Group item
   *
   * @param name The name
   * @param key The key (description or name)
   * @param value The value to be set
   */
  public setGroupItem(name: string, key: string, value: string): void {
    switch (key) {
      case "description":
      case "name":
        this._routes[name][key] = value;
        break;
    }
  }

  /**
   * Method for adding a new Route
   *
   * @param group The group in which to add the Route
   * @param routeDefinition The Route definition
   * @param docs The docs
   */
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
        const paramDoc: Record<string, string> = docs.parameter
          ? (docs.parameter[name] as Record<string, string>)
          : {};
        return {
          ...accum,
          [name]: {
            name,
            type: paramDoc.type || ParameterType.STRING,
            description: paramDoc.description || "",
          },
        };
      }, {});

    let path = routeDefinition.path;
    Object.keys(parameters).forEach((parameter) => {
      path = path.replaceAll(`:${ parameter }`, `{${ parameter }}`);
    });

    if (docs.response) {
      routeDefinition.responseStatus = docs.response.statusCode as HTTPStatus;
      routeDefinition.response = docs.response as Record<string, IBodyDoc>;
    }

    if (docs.query) {
      routeDefinition.query = docs.query as Record<string, IQueryParameterDoc>;
    }

    if (docs.body && Object.keys(docs.body).length > 0) {
      routeDefinition.request = docs.body as Record<string, IBodyDoc>;
    }

    if (docs.route && Object.keys(docs.route).length > 0) {
      routeDefinition.description =
        (docs.route.description as string) ?? routeDefinition.description;
      routeDefinition.summary =
        (docs.route.summary as string) ?? routeDefinition.summary;
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

  /**
   * Method to get the routes
   */
  public getRoutes(): any {
    if (!Config.boolean("docs.expose")) {
      return {};
    }
    return this._routes;
  }

  /**
   * Method to get docs in YAML format
   */
  public getYaml(): string {
    if (!Config.boolean("docs.expose")) {
      return "";
    }

    const builder = new SwaggerBuilder(this._routes, this._interfaces);
    return builder.getYaml();
  }

  /**
   * Method for defining an Interface
   *
   * @param name The name of the interface
   * @param description The description
   */
  public defineInterface(name: string, description?: string): void {
    this._interfaces[name] = {
      name,
      description,
      type: BodyParameterType.OBJECT,
      properties: [],
    };
  }

  /**
   * Method for adding interface property
   *
   * @param interfaceName The name of the Interface
   * @param definition The definition of the property
   */
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
