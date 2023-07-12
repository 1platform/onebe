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
} from "@/Documentation/Definition/RouteMetadata";
import HTTPStatus from "@/HTTP/HTTPStatus";
import { HTTPMiddleware } from "@/HTTP/HTTPTypes";
import HTTPVerb from "@/HTTP/HTTPVerb";
import { ICallbackExtracted } from "@/Router/RouteInterfaces";
import { AppMethod, CallbackExtractorParameter } from "@/Router/RouteTypes";

/**
 * Route Definition Metadata store.
 *
 * In this class the framework store information about all the routes exposed
 * by your application, like: the base path, the name of the route, the
 * endpoints that are exposed by the route etc.
 */
export default class RouteDefinition {
  /**
   * List with all the routes exposed by the application, together
   * with the metadata information you want to expose.
   */
  private _routes: Record<string, IRouteMetadata> = {};

  /**
   * Getter for the list of routes available in the application.
   */
  public get list(): Array<IRouteMetadata> {
    return Object.values(this._routes);
  }

  /**
   * Method used to add a new Route into the Route Metadata store.
   *
   * @param controller The controller we want to add.
   * @param [basePath] The basePath of the controller.
   * @param [description] A short description of the controller.
   */
  public add(controller: string, basePath?: string, description?: string): RouteDefinition {
    this._routes[controller] = {
      controller,
      description: description || "",
      basePath: [ basePath || "" ],
      endpoints: {},
      parameters: {},
    };

    return this;
  }

  /**
   * Method used to update Route information.
   *
   * @param controller The controller we want to update.
   * @param [basePath] The basePath of the controller.
   * @param [description] A short description of the controller.
   */
  public update(controller: string, basePath?: string, description?: string): IRouteMetadata {
    if (!this._routes[controller]) {
      this.add(controller, basePath, description);
    } else {
      this._routes[controller].basePath.push(basePath || "");
      this._routes[controller].description = description || "";
    }
    return this._routes[controller];
  }

  /**
   * Method used to set the name of a route.
   *
   * @param controller The controller we want to update.
   * @param name The name of the route.
   */
  public setName(controller: string, name: string): IRouteMetadata {
    const route = this.route(controller);
    route.name = name;
    return route;
  }

  /**
   * Method used to set the description of a route.
   *
   * @param controller The controller we want to update.
   * @param [description] A short description of the controller.
   */
  public setDescription(controller: string, description?: string): IRouteMetadata {
    const route = this.route(controller);
    route.description = description || "";
    return route;
  }

  /**
   * Method used to get (and create if it doesn't exist yet) a route from
   * the metadata store.
   *
   * @param controller The controller we want to update.
   */
  public route(controller: string): IRouteMetadata {
    if (!this._routes[controller]) {
      this.add(controller, "");
    }
    return this._routes[controller];
  }

  /**
   * Method used to mark a route as an API route.
   *
   * @param controller The controller we want to update.
   * @param basePath The base path we want to prepend to the controller base path.
   */
  public markAsAPI(controller: string, basePath: string): RouteDefinition {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.isAPI = true;

    return this;
  }

  /**
   * Method used to mark a route as a Custom route.
   *
   * @param controller The controller we want to update.
   * @param basePath The base path we want to prepend to the controller base path.
   */
  public markAsCustom(controller: string, basePath: string): RouteDefinition {
    const route = this.route(controller);
    route.basePath.unshift(basePath);
    route.customPath = basePath;

    return this;
  }

  /**
   * Method used to mark a route as a Documentation route.
   *
   * @param controller The controller we want to update.
   */
  public markAsDocs(controller: string): RouteDefinition {
    const route = this.route(controller);
    route.isDocs = true;

    return this;
  }

  /**
   * Checks if a route is a Documentation one.
   *
   * @param controller The controller we want to update.
   */
  public isDocs(controller: string): boolean {
    return this.route(controller).isDocs;
  }

  /**
   * Defines the group the route is a member of.
   *
   * @param controller The controller we want to update.
   * @param groupName A list of groups the route is member of.
   */
  public group(controller: string, groupName: string): RouteDefinition {
    const route = this.route(controller);
    route.group = groupName.split("/");

    return this;
  }

  /**
   * Method used to create (or update) an endpoint of a route.
   *
   * @param controller The controller we want to update.
   * @param options Options used to define an endpoint.
   */
  public endpoint<Request = any, Response = any>(controller: string, options: IEndpointOptions): IEndpointMetadata {
    const { callback, middlewares } = this.callbackExtractor<Request, Response>(options.descriptor.value);

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

  /**
   * Method used to set a description to an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [description] Detailed information about what the endpoint does.
   */
  public endpointDescription<Request = any, Response = any>(controller: string, methodName: string, description?: string): IEndpointMetadata {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];
    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.description = description;
    return endpoint;
  }

  /**
   * Method used to set a summary to an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [summary] A short description of the endpoint
   */
  public endpointSummary<Request = any, Response = any>(controller: string, methodName: string, summary?: string): IEndpointMetadata {
    const route = this.route(controller);
    let endpoint = route.endpoints[methodName];
    if (!endpoint) {
      endpoint = this.getEndpoint(controller, methodName);
    }

    endpoint.summary = summary;
    return endpoint;
  }

  /**
   * Method used to set the authentication method to an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param authenticationMethod The authentication method used on the endpoint.
   */
  public endpointAuth(controller: string, methodName: string, authenticationMethod: string): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);
    endpoint.isAuthenticated = true;
    endpoint.authenticationMethod = authenticationMethod;
    return endpoint;
  }

  /**
   * Method used to set information about an error thrown by an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options A list with options related to the error thrown.
   */
  public endpointThrows(controller: string, methodName: string, options: IEndpointThrowResponse): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.throws[options.statusCode] = options;
    return endpoint;
  }

  /**
   * Method used to set information about a status of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param statusCode The status code returned by the endpoint.
   * @param [description] A short description of the returned status code.
   */
  public endpointStatus(controller: string, methodName: string, statusCode: HTTPStatus, description?: string): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.statuses[statusCode] = description;
    return endpoint;
  }

  /**
   * Method used to set information about a response of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the response object returned by the endpoint.
   */
  public endpointResponse(controller: string, methodName: string, options: IEndpointResponse): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.responses[options.statusCode] = options;
    return endpoint;
  }

  /**
   * Method used to set information about a URL parameter of a route.
   *
   * @param controller The controller we want to update.
   * @param options Information about the parameter received by the endpoint.
   */
  public routeParameter(controller: string, options: IEndpointParameter) {
    const route = this.route(controller);
    route.parameters[options.name] = options;
  }

  /**
   * Method used to set information about a URL parameter of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the parameter received by the endpoint.
   */
  public endpointParameter(controller: string, methodName: string, options: IEndpointParameter) {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.parameters[options.name] = options;
  }

  /**
   * Method used to set information about a Query parameter of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the parameter received by the endpoint.
   */
  public endpointQuery(controller: string, methodName: string, options: IEndpointQuery): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.query[options.name] = options;
    return endpoint;
  }

  /**
   * Method used to set details about the request body of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param parameters A list with parameters found in the request body.
   */
  public endpointBodyParameters(controller: string, methodName: string, parameters: Array<IEndpointBodyParameter>): IEndpointMetadata {
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

  /**
   * Method used to set details about the request body of an endpoint.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param options Information about the used entity as the body request of the endpoint.
   */
  public endpointBody(controller: string, methodName: string, options: IEndpointBody): IEndpointMetadata {
    const endpoint = this.getEndpoint(controller, methodName);

    endpoint.body = options;
    endpoint.bodyParameters = undefined;

    return endpoint;
  }

  /**
   * Method used to set all the documentation details of the endpoint.
   *
   * @param controller The controller we want to update.sn
   * @param methodName The name of the method on which we want to add information.
   * @param options A list of options used for documenting the endpoint directly, without using multiple decorators.
   */
  public endpointDocumentation(controller: string, methodName: string, options: IEndpointDocumentation): void {
    const endpoint = this.getEndpoint(controller, methodName);

    if (Object.keys(options).length === 0) {
      throw new Error("Please fill at least one item of the endpoint definition!");
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

    if (options.responses) {
      options.responses.forEach((parameter) => {
        endpoint.responses[parameter.statusCode] = parameter;
      });
    }

    if (options.statuses) {
      Object.keys(options.statuses).forEach((parameter) => {
        endpoint.statuses[parameter] = options.statuses[parameter];
      });
    }
  }

  /**
   * Method used to mark an endpoint as one that accepts files for upload.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [isMultiFile] The endpoint supports single or multiple file upload.
   */
  public isUpload(controller: string, methodName: string, isMultiFile = false) {
    this.route(controller).endpoints[methodName].upload = isMultiFile ? "single" : "multiple";
  }

  /**
   * Method used to mark an endpoint as protected by a Signed URL.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   */
  public isSigned(controller: string, methodName: string) {
    this.route(controller).endpoints[methodName].signed = true;
  }

  /**
   * Method used to add additional information to the description.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param information Additional information to be added to the description.
   */
  public additionalInformation(controller: string, methodName: string, information: string) {
    if (!this.route(controller).endpoints[methodName].additionalInfo) {
      this.route(controller).endpoints[methodName].additionalInfo = [];
    }
    this.route(controller).endpoints[methodName].additionalInfo.push(information);
  }

  /**
   * Method used to get metadata information about an endpoint. Using this method the
   * documentation system will check if the endpoint exists in the route. If it doesn't exist,
   * the endpoint is created with the given default values.
   *
   * @param controller The controller we want to update.
   * @param methodName The name of the method on which we want to add information.
   * @param [options] A list of endpoint metadata information used as the base for creation when it doesn't exist.
   */
  protected getEndpoint<Request, Response>(controller: string, methodName: string, options?: IEndpointOptions): IEndpointMetadata<Request, Response> {
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
   * Method used to extract the Route callback from the middlewares list of an endpoint.
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
