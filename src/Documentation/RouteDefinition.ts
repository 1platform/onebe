import {
  IEndpointBody,
  IEndpointBodyParameter,
  IEndpointDocumentation,
  IEndpointMetadata,
  IEndpointOptions,
  IEndpointParameter,
  IEndpointQuery,
  IEndpointResponse,
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

  public setDescription(
    controller: string,
    description?: string
  ): IRouteMetadata {
    const route = this.route(controller);
    route.description = description || "";
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

  public endpointDescription<Request = any, Response = any>(
    controller: string,
    methodName: string,
    description?: string
  ): IEndpointMetadata {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];
    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.description = description;
    return endpoint;
  }

  public endpointSummary<Request = any, Response = any>(
    controller: string,
    methodName: string,
    summary?: string
  ): IEndpointMetadata {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];
    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.summary = summary;
    return endpoint;
  }

  public endpointAuth(
    controller: string,
    methodName: string,
    method: string
  ): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.isAuthenticated = true;
    endpoint.authenticationMethod = method;
    return endpoint;
  }

  public endpointThrows(
    controller: string,
    methodName: string,
    options: IEndpointThrowResponse
  ): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.throws[options.statusCode] = options;
    return endpoint;
  }

  public endpointStatus(
    controller: string,
    methodName: string,
    statusCode: HTTPStatus,
    description?: string
  ): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.statuses[statusCode] = description;
    return endpoint;
  }

  public endpointResponse(
    controller: string,
    methodName: string,
    options: IEndpointResponse
  ): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.responses[options.statusCode] = options;
    return endpoint;
  }

  public endpointParameter(
    controller: string,
    methodName: string,
    options: IEndpointParameter
  ) {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.parameters[options.name] = options;
  }

  public endpointQuery(
    controller: string,
    methodName: string,
    options: IEndpointQuery
  ): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.query[options.name] = options;
    return endpoint;
  }

  public endpointBodyParameters(
    controller: string,
    methodName: string,
    parameters: Array<IEndpointBodyParameter>
  ): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.body = undefined;
    endpoint.bodyParameters = {
      ...(endpoint.bodyParameters || {}),
      ...parameters.reduce(
        (accum, parameter) => ({
          ...accum,
          [parameter.name]: parameter,
        }),
        {}
      ),
    };

    return endpoint;
  }

  public endpointBody(
    controller: string,
    methodName: string,
    options: IEndpointBody
  ): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.body = options;
    endpoint.bodyParameters = undefined;

    return endpoint;
  }

  public endpointDocumentation(
    controller: string,
    methodName: string,
    options: IEndpointDocumentation
  ): void {
    const endpoint = this.getEndpoint(controller, methodName);

    if (Object.keys(options).length === 0) {
      throw new Error(
        "Please fill at least one item of the endpoint definition!"
      );
    }

    if (options.body && options.bodyParameters) {
      throw new Error("Please define only one option: body or bodyParameters!");
    }

    if (options.summary) {
      endpoint.summary = options.summary;
    }
    if (options.description) {
      endpoint.description = options.description;
    }
    if (options.query) {
      options.query.forEach((queryItem) => {
        endpoint.query[queryItem.name] = queryItem;
      });
    }

    if (options.parameters) {
      options.parameters.forEach((parameter) => {
        endpoint.parameters[parameter.name] = parameter;
      });
    }
    if (options.body) {
      endpoint.body = options.body;
    }
    if (options.bodyParameters) {
      options.bodyParameters.forEach((parameter) => {
        endpoint.bodyParameters[parameter.name] = parameter;
      });
    }
    if (options.throws) {
      options.throws.forEach((parameter) => {
        endpoint.throws[parameter.statusCode] = parameter;
      });
    }
  }

  protected getEndpoint<Request, Response>(
    controller: string,
    methodName: string,
    options?: IEndpointOptions
  ): IEndpointMetadata<Request, Response> {
    if (!this.route(controller).endpoints[methodName]) {
      this.route(controller).endpoints[methodName] = {
        path: options?.path || "",
        verb: options?.verb || HTTPVerb.GET,
        description: options?.description || "",
        summary: options?.summary || "",
        methodName: methodName,
        callback: null,
        middlewares: [],
        passRequest: options?.passRequest ?? false,
        isAuthenticated: false,
        authenticationMethod: "",
        throws: {} as Record<HTTPStatus, IEndpointThrowResponse>,
        statuses: {} as Record<HTTPStatus, string>,
        responses: {} as Record<HTTPStatus, IEndpointResponse>,
        parameters: {} as Record<string, IEndpointParameter>,
        query: {} as Record<string, IEndpointQuery>,
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
