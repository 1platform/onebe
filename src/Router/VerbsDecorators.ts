import { NextFunction, Request, Response } from "express";
import { getElementDocs, RouteDocs } from "../Docs/DocsDecorators";
import DocsStore from "../Docs/DocsStore";
import HTTPStatus from "../HTTP/HTTPStatus";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import HTTPVerb from "../HTTP/HTTPVerb";
import { getDefaultLogger } from "../System/Logger";
import Router from "./index";
import Route from "./Route";
import {
  ICallbackExtracted,
  IVerbAction,
  IVerbDecorators,
} from "./RouteInterfaces";
import {
  AppMethod,
  CallbackExtractorParameter,
  ResponseValue,
  RouteCallbacks,
  RouteDecorator,
  RouteHooksCallbacks,
} from "./RouteTypes";
import {
  getAfterHooksCallbacks,
  getBeforeHooksCallbacks,
  getRouteCallbacks,
} from "./RouteUtils";
import { extractToken } from "../Authentication/JWT";

/**
 * Function used to extract the Route callback from the middlewares list.
 *
 * @param fn The middlewares lists.
 */
function callbackExtractor<Request = any, Response = any>(
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

/**
 * Wrapper function to get the query parameter as a string.
 *
 * @param req The request object.
 */
const getQuery = (req: Request) => (key: string, defaultValue?: string) =>
  (req.query[key] as string) || defaultValue;
/**
 * Wrapper function to get the query parameter as a number.
 *
 * @param req The request object.
 */
const getQueryNumber = (req: Request) => (key: string, defaultValue?: number) =>
  Number(req.query[key]) || defaultValue;
/**
 * Wrapper function to get the query parameter as a string.
 *
 * @param req The request object.
 */
const getParam = (req: Request) => (key: string, defaultValue?: string) =>
  (req.params[key] as string) || defaultValue;
/**
 * Wrapper function to get the query parameter as a number.
 *
 * @param req The request object.
 */
const getParamNumber = (req: Request) => (key: string, defaultValue?: number) =>
  Number(req.params[key]) || defaultValue;
/**
 * Wrapper function to get the query parameter as a boolean.
 *
 * @param req The request object.
 */
const getQueryBoolean = (req: Request) => (key: string) =>
  (req.query[key] ?? "false") !== "false";
/**
 * Wrapper function to get the query parameter as an array.
 *
 * @param req The request object.
 */
const getQueryArray =
  (req: Request) => (key: string, defaultValue?: string[]) =>
    (req.query[key] as string[]) || defaultValue;
/**
 * Wrapper function to get the body content as the request type.
 *
 * @param req The request object.
 */
const getBody =
  <T = any>(req: Request) =>
    (): T =>
      req.body as T;

/**
 * A generic function that registers a HTTP Verb endpoint in the router.
 *
 * Attaches to the target the following metadata:
 * - route:auth
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @param props The properties used to define the endpoint.
 */
function verbAction<TRequest = any, TResponse = any>(
  props: IVerbAction<TRequest, TResponse>
): void {
  const { callback, middlewares } = callbackExtractor<TRequest, TResponse>(
    props.actionCallback
  );
  let path = `/${ props.basePath }/${ props.path }`.replace(
    /(https?:\/\/)|(\/)+/g,
    "$1$2"
  );

  if (path.lastIndexOf("/") === path.length - 1 && path !== "/") {
    path = path.substring(0, path.length - 1);
  }

  DocsStore.instance.addRoute(
    props.groupName,
    {
      path,
      verb: props.method,
      methodName: callback.name,
      controllerName: props.target.constructor.name,
      isAuthenticated:
        Reflect.getMetadata("route:auth", props.target, props.propertyKey) ||
        false,
      basicSpecific:
        Reflect.getMetadata(
          "route:auth:basic",
          props.target,
          props.propertyKey
        ) || false,
      bearerSpecific:
        Reflect.getMetadata(
          "route:auth:bearer",
          props.target,
          props.propertyKey
        ) || false,
    },
    getElementDocs<RouteDocs>(props.target, props.propertyKey) ||
      ({} as RouteDocs)
  );

  getDefaultLogger().debug(`[REGISTER] ${ props.method.toUpperCase() }: ${ path }`);

  Router.router[props.method](
    path,
    ...middlewares,
    async function (req: Request, res: Response, next: NextFunction) {
      try {
        const original: ResponseValue<TResponse> = await callback(
          {
            params: req.params,
            query: req.query,
            body:
              props.method !== HTTPVerb.GET
                ? (req.body as TRequest)
                : undefined,
            header: req.header,
            request: props.passRequest ? req : undefined,
            response: props.passRequest ? res : undefined,
            file: req.file || undefined,
            files: req.files || undefined,
            getParam: getParam(req),
            getParamNumber: getParamNumber(req),
            getQuery: getQuery(req),
            getQueryNumber: getQueryNumber(req),
            getQueryBoolean: getQueryBoolean(req),
            getQueryArray: getQueryArray(req),
            getBody: getBody<TRequest>(req),
          },
          {
            user: req.user,
            token: extractToken(req),
            isAuthenticated: req.isAuthenticated.bind(req),
            logout: req.logout
              ? req.logout.bind(req)
              : () => {
                /*NOPE*/
              },
            ...(req.authContext || {}),
          }
        );

        let status = HTTPStatus.OK;
        if (typeof original === "object" && "statusCode" in original) {
          status = (original?.statusCode || HTTPStatus.OK) as HTTPStatus;
        } else if (
          Number.isInteger(original) &&
          Object.values(HTTPStatus).indexOf(original as HTTPStatus) >= 0
        ) {
          status = original as HTTPStatus;
        }

        if (
          status === HTTPStatus.NO_CONTENT ||
          status === HTTPStatus.ACCEPTED
        ) {
          res.sendStatus(status);
          return;
        }

        if (typeof original === "object" && "file" in original) {
          res.contentType((original?.contentType || "text/plain") as string);
          res.sendFile(original?.body as string);
          return;
        }

        if (typeof original === "object" && "contentType" in original) {
          res.contentType((original?.contentType || "text/plain") as string);
          res.send(original?.body as string);
          return;
        }

        res.status(status).json(original);
      } catch (e) {
        next(e);
      }
    }
  );
}

/**
 * A generic function that registers a HTTP Verb endpoint in a controller.
 *
 * @param props The properties used to define the endpoint.
 */
function verbDecorator<Request = any, Response = any>(
  props: IVerbDecorators
): void {
  const { method, path, target, descriptor, passRequest, propertyKey } = props;
  const routeCallbacks: RouteCallbacks = getRouteCallbacks(target);
  const beforeHooksCallbacks: RouteHooksCallbacks = getBeforeHooksCallbacks(
    target,
    propertyKey
  );
  const afterHooksCallbacks: RouteHooksCallbacks = getAfterHooksCallbacks(
    target,
    propertyKey
  );

  routeCallbacks.push((basePath: string, groupName: string) => {
    beforeHooksCallbacks.forEach((hook) =>
      hook({ method, basePath, path, groupName })
    );
    verbAction<Request, Response>({
      method,
      basePath,
      path,
      actionCallback: descriptor.value,
      passRequest,
      target,
      propertyKey,
      groupName,
    });
    afterHooksCallbacks.forEach((hook) =>
      hook({ method, basePath, path, groupName })
    );
  });
}

/**
 * Decorator used to define a GET endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function get<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    verbDecorator<Request, Response>({
      method: HTTPVerb.GET,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey,
    });
  };
}

/**
 * Decorator used to define a POST endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function post<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    verbDecorator<Request, Response>({
      method: HTTPVerb.POST,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey,
    });
  };
}

/**
 * Decorator used to define a PUT endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function put<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    verbDecorator<Request, Response>({
      method: HTTPVerb.PUT,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey,
    });
  };
}

/**
 * Decorator used to define a PATCH endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function patch<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    verbDecorator<Request, Response>({
      method: HTTPVerb.PATCH,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey,
    });
  };
}

/**
 * Decorator used to define a DELETE endpoint.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function del<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return function (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    verbDecorator<Request, Response>({
      method: HTTPVerb.DELETE,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey,
    });
  };
}

/**
 * Decorator used to define a GET endpoint. This is an alias for the `get` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function GET<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return get<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a POST endpoint. This is an alias for the `post` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function POST<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return post<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a PUT endpoint. This is an alias for the `put` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function PUT<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return put<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a PATCH endpoint. This is an alias for the `patch` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function PATCH<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return patch<Request, Response>(path, passRequest);
}

/**
 * Decorator used to define a DELETE endpoint. This is an alias for the `delete` decorator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param passRequest Should we pass the request and response objects to the route method.
 */
export function DELETE<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return del<Request, Response>(path, passRequest);
}
