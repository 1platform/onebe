import { BodyParameterType, QueryParameterType } from "@/Documentation/Definition/DataTypes";
import HTTPStatus from "@/HTTP/HTTPStatus";
import { HTTPMiddleware } from "@/HTTP/HTTPTypes";
import HTTPVerb from "@/HTTP/HTTPVerb";
import { AppMethod, ResponseValue } from "@/Router/RouteTypes";

/**
 * Interface describing an object that is passed as options when
 * defining an endpoint.
 */
export interface IEndpointOptions {
  /**
   * The property descriptor of the function on which we apply the decorator.
   */
  descriptor: PropertyDescriptor;
  /**
   * The path used to access the endpoint.
   */
  path: string;
  /**
   * The HTTP Verb/Method used to access the endpoint.
   */
  verb: HTTPVerb;
  /**
   * The name of the method that is called when accessing the endpoint.
   */
  methodName: string;
  /**
   * A description of what the endpoint does.
   */
  description?: string;
  /**
   * A short description of what the endpoint does.
   */
  summary?: string;
  /**
   * Flag to mark if the request and response objects are needed in the ContextAPI object.
   */
  passRequest: boolean;
}

/**
 * Interface describing an object used to hold the metadata information
 * about a route (controller).
 */
export interface IRouteMetadata {
  /**
   * The name of the Route/Controller. The name should describe what does
   * the route do. For example: UserController -> "User Management Controller"
   */
  name?: string;
  /**
   * The Route Class name - The name of the Class that exposes the route.
   */
  controller: string;
  /**
   * A list of groups of which this route is a member of.
   */
  group?: string[];
  /**
   * A description of what the route does.
   */
  description?: string;
  /**
   * Flag used to describe if the endpoint is an API endpoint or not.
   * If an endpoint is an API endpoint, then the base path of the URL
   * will be the one configured in `api.path`.
   */
  isAPI?: boolean;
  /**
   * Flag used to describe if the endpoint is a Documentation endpoint or not.
   * If an endpoint is a Documentaation endpoint, then the base path of the URL
   * will be the one configured in `docs.path`.
   */
  isDocs?: boolean;
  /**
   * A list of base paths that will be prepended to each endpoint URL.
   */
  basePath: string[];
  /**
   * When using the @Custom decorator on a Route, the framework needs to keep
   * track of what it is and apply it accordingly.
   */
  customPath?: string;

  /**
   * A map containing all the endpoint exposed by the route, where the key is
   * the name of the method that performs the desired action.
   */
  endpoints: Record<string, IEndpointMetadata>;

  /**
   * A list of URL Parameters that can be passed to the endpoint.
   */
  parameters?: Record<string, IEndpointParameter>;
}

/**
 * Interface describing an object used to hold the metadata information
 * about an endpoint from a route (controller).
 */
export interface IEndpointMetadata<Request = any, Response = any> {
  /**
   * Flag used to describe the endpoint as protected by a Signed URL.
   */
  signed?: boolean;
  /**
   * The path used to access the endpoint.
   */
  path: string;
  /**
   * The HTTP Verb/Method used to access the endpoint.
   */
  verb: HTTPVerb;
  /**
   * The name of the method that is called when accessing the endpoint.
   */
  methodName: string;
  /**
   * A description of what the endpoint does.
   */
  description?: string;
  /**
   * Additional information that should be added to the description of the endpoint.
   */
  additionalInfo?: string[];
  /**
   * A short description of what the endpoint does.
   */
  summary?: string;
  /**
   * Flag to mark if the request and response objects are needed in the ContextAPI object.
   */
  passRequest: boolean;
  /**
   * Flag to mark the request as authenticated. Used together with the `authenticationMethod`
   * property, the framework knows what to generate in the final documentation for you
   * to easily access the endpoint.
   */
  isAuthenticated: boolean;
  /**
   * The authentication method used on this endpoint.
   */
  authenticationMethod?: string;

  /**
   * A list of middlewares that will run before the code of the endpoint.
   */
  middlewares: Array<HTTPMiddleware>;
  /**
   * The code that will run when accessing the endpoint.
   */
  callback: AppMethod<Request, Response>;
  /**
   * A list of error thrown by the endpoint.
   */
  throws: Record<HTTPStatus, IEndpointThrowResponse>;
  /**
   * A list of HTTP Statuses returned by the endpoint.
   */
  statuses: Record<HTTPStatus, string>;
  /**
   * A list of Responses returned by the endpoint.
   */
  responses: Record<HTTPStatus, IEndpointResponse>;
  /**
   * A list of URL Parameters that can be passed to the endpoint.
   */
  parameters: Record<string, IEndpointParameter>;
  /**
   * A list of Query Parameters that can be passed to the endpoint.
   */
  query: Record<string, IEndpointQuery>;
  /**
   * A list of Body Parameters that can be passed to the endpoint. When this is
   * filled, the `body` property will be deleted and the other way around.
   */
  bodyParameters?: Record<string, IEndpointBodyParameter>;
  /**
   * The entity used to describe the properties available in the body of the request.
   * When this is filled, the `bodyParameters` property will be deleted and the other way around.
   */
  body?: IEndpointBody;
  /**
   * If filled, lists the support for upload and how many files can be uploaded through the endpoint.
   */
  upload?: string;
}

/**
 * Interface describing an object that holds metadata information
 * about an error thrown by an endpoint.
 */
export interface IEndpointThrowResponse<Response = any> {
  /**
   * The HTTP Status code used for the response.
   */
  statusCode: HTTPStatus;
  /**
   * A description of what the status represents.
   */
  description?: string;
  /**
   * The text of the error message returned to the user.
   */
  response?: ResponseValue<Response>;
}

/**
 * Interface describing an object that holds metadata information
 * about an error thrown by an endpoint.
 */
export interface IEndpointResponse<Response = any> {
  /**
   * The HTTP Status code used for the response.
   */
  statusCode: HTTPStatus;
  /**
   * A description of what the response represents.
   */
  description?: string;
  /**
   * The schema or datatype used for describing the response.
   */
  schema: string;
  /**
   * The content type of the response.
   */
  contentType?: string;
  /**
   * Flag used to mark the endpoint response as an object schema.
   */
  isSchema?: boolean;
  /**
   * Flag used to mark the endpoint response as an array response.
   */
  isArray?: boolean;
  /**
   * Flag used to mark the endpoint response as a binary response.
   */
  isBinary?: boolean;
}

/**
 * Interface describing an object that holds metadata information
 * about a URL parameter of an endpoint.
 */
export interface IEndpointParameter {
  /**
   * The name of the URL parameter you want to document. This has to be exactly the same
   * as the value you add in the endpoint URL. Example `/:id` -> parameter name: `id`.
   */
  name: string;
  /**
   * Flag to mark the URL parameter as numeric.
   */
  isNumeric: boolean;
  /**
   * A description of what the URL parameter is used for.
   */
  description?: string;
}

/**
 * Interface describing an object that holds metadata information
 * about a query parameter of an endpoint.
 */
export interface IEndpointQuery {
  /**
   * The name of the Query parameter you want to document.
   */
  name: string;
  /**
   * The data type of the value you expect to receive in the Query parameter.
   */
  type: QueryParameterType;
  /**
   * A description of what the Query parameter is used for.
   */
  description?: string;
  /**
   * If the data type is marked as an array, the Documentation API needs to know
   * what is the data type of the items in the array.
   */
  arrayItems?: QueryParameterType;
  /**
   * Flag to mark the Query parameter as a required one.
   */
  isRequired?: boolean;
}

/**
 * Interface describing an object that holds metadata information
 * about the entity used as a request body.
 */
export interface IEndpointBody {
  /**
   * The name of the entity used to describe the contents of the request body.
   */
  entity: string;
  /**
   * A description of what you want to do with body requests.
   */
  description?: string;
  /**
   * Flag used to mark the body request as an array of elements of the given entity.
   */
  isArray?: boolean;
}

/**
 * Interface describing an object that holds metadata information
 * about a body parameter.
 */
export interface IEndpointBodyParameter {
  /**
   * The name of the body parameter.
   */
  name: string;
  /**
   * The data type of the body parameter.
   */
  type: BodyParameterType;
  /**
   * Flag used to mark the parameter as an array of elements of the given type.
   */
  isArray?: boolean;
  /**
   * Flag used to mark the parameter as required.
   */
  required?: boolean;
  /**
   * The name of the entity used to describe the contents of body parameter.
   */
  entity?: string;
  /**
   * A description of what you want to do with body request parameter.
   */
  description?: string;
  /**
   * The default value of the parameter, when no value is sent.
   */
  defaultValue?: string;
}

/**
 * Interface describing an object that holds metadata information
 * about an endpoint, when generating the documentation elements.
 */
export interface IEndpointDocumentation {
  /**
   * A description of what the endpoint does.
   */
  description?: string;
  /**
   * A short description of what the endpoint does.
   */
  summary?: string;
  /**
   * A list of error thrown by the endpoint.
   */
  throws?: Array<IEndpointThrowResponse>;
  /**
   * A list of query parameters that can be sent to the endpoint.
   */
  query?: Array<IEndpointQuery>;
  /**
   * A list of URL parameters required by the endpoint.
   */
  parameters?: Array<IEndpointParameter>;
  /**
   * The entity used to describe the properties available in the body of the request.
   * When this is filled, the `bodyParameters` property will be deleted and the other way around.
   */
  body?: IEndpointBody;
  /**
   * A list of Body Parameters that can be passed to the endpoint. When this is
   * filled, the `body` property will be deleted and the other way around.
   */
  bodyParameters?: Array<IEndpointBodyParameter>;
  /**
   * A map of HTTP Statuses returned by the endpoint.
   */
  statuses?: Record<HTTPStatus, string>;
  /**
   * A list of Responses returned by the endpoint.
   */
  responses?: Array<IEndpointResponse>;
}
