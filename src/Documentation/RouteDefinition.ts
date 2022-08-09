import {
  IEndpointMetadata,
  IEndpointOptions,
  IEndpointThrowResponse,
  IRouteMetadata,
} from "./Definition/RouteMetadata";
import { AppMethod, CallbackExtractorParameter } from "../Router/RouteTypes";
import { ICallbackExtracted } from "../Router/RouteInterfaces";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPVerb from "../HTTP/HTTPVerb";

export default class RouteDefinition {
  private _routes: Record<string, IRouteMetadata> = {};

  public get list(): Array<IRouteMetadata> {
    return Object.values(this._routes);
  }

  public add(
    controller: string,
    basePath?: string,
    description?: string
  ): RouteDefinition {
    this._routes[controller] = {
      controller,
      description: description || "",
      basePath: [ basePath || "" ],
      endpoints: {},
    };

    return this;
  }

  public update(
    controller: string,
    basePath?: string,
    description?: string
  ): IRouteMetadata {
    if (!this._routes[controller]) {
      this.add(controller, basePath, description);
    } else {
      this._routes[controller].basePath.push(basePath || "");
      this._routes[controller].description = description || "";
    }
    return this._routes[controller];
  }

  public setName(controller: string, name: string): IRouteMetadata {
    const route = this.route(controller);
    route.name = name;
    return route;
  }

  public route(controller: string): IRouteMetadata {
    if (!this._routes[controller]) {
      this.add(controller, "");
    }
    return this._routes[controller];
  }

  public markAsAPI(controller: string, basePath: string): RouteDefinition {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.isAPI = true;

    return this;
  }

  public markAsCustom(controller: string, basePath: string): RouteDefinition {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.customPath = basePath;

    return this;
  }

  public group(controller: string, groupName: string): RouteDefinition {
    const route = this.route(controller);
    route.group = groupName.split("/");

    return this;
  }

  public endpoint<Request = any, Response = any>(
    controller: string,
    options: IEndpointOptions
  ): IEndpointMetadata {
    const { callback, middlewares } = this.callbackExtractor<Request, Response>(
      options.descriptor.value
    );

    const route = this.route(controller);
    let endpoint = route.endpoints[options.methodName];
    if (!endpoint) {
      endpoint = this.getEndpoint(controller, options.methodName, options);
    }

    endpoint.path = options.path;
    endpoint.verb = options.verb;
    endpoint.callback = callback;
    endpoint.middlewares = middlewares;
    endpoint.passRequest = options.passRequest ?? false;

    return endpoint;
  }

  public endpointAuth(controller: string, methodName: string, method: string) {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.isAuthenticated = true;
    endpoint.authenticationMethod = method;
  }

  public endpointThrows(
    controller,
    methodName,
    options: IEndpointThrowResponse
  ) {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.throws[options.statusCode] = options;
  }

  protected getEndpoint<Request, Response>(
    controller,
    methodName,
    options?: IEndpointOptions
  ): IEndpointMetadata<Request, Response> {
    if (!this.route(controller).endpoints[methodName]) {
      this.route(controller).endpoints[methodName] = {
        path: options?.path || "",
        verb: options?.verb || HTTPVerb.GET,
        methodName: methodName,
        callback: null,
        middlewares: [],
        passRequest: options?.passRequest ?? false,
        isAuthenticated: false,
        authenticationMethod: "",
        throws: {} as Record<HTTPStatus, IEndpointThrowResponse>,
      };
    }

    return this.route(controller).endpoints[methodName];
  }

  /**
   * Function used to extract the Route callback from the middlewares list.
   *
   * @param fn The middlewares lists.
   */
  protected callbackExtractor<Request = any, Response = any>(
    fn: CallbackExtractorParameter<Request, Response>
  ): ICallbackExtracted<Request, Response> {
    let callback: AppMethod<Request, Response>;
    let middlewares: Array<HTTPMiddleware> = [];
    if (Array.isArray(fn)) {
      middlewares = [ ...fn.slice(0, fn.length - 1) ] as Array<HTTPMiddleware>;
      callback = fn.pop() as AppMethod<Request, Response>;
    } else {
      callback = fn as AppMethod<Request, Response>;
    }

    return { callback, middlewares };
  }
}
