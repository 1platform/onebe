import { NextFunction, Request, Response } from "express";
import { getElementDocs, RouteDocs } from "../Docs/DocsDecorators";
import DocsStore from "../Docs/DocsStore";
import HTTPStatus from "../HTTP/HTTPStatus";
import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import HTTPVerb from "../HTTP/HTTPVerb";
import DefaultLogger from "../System/Logger";
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
  RouteDecorator,
} from "./RouteTypes";
import {
  getAfterHooksCallbacks,
  getBeforeHooksCallbacks,
  getRouteCallbacks,
  RouteCallbacks,
  RouteHooksCallbacks,
} from "./RouteUtils";

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
      appSpecific:
        Reflect.getMetadata(
          "route:auth:app",
          props.target,
          props.propertyKey
        ) || false,
      userSpecific:
        Reflect.getMetadata(
          "route:auth:user",
          props.target,
          props.propertyKey
        ) || false,
    },
    getElementDocs<RouteDocs>(props.target, props.propertyKey) ||
      ({} as RouteDocs)
  );

  DefaultLogger.debug(`[REGISTER] ${ props.method.toUpperCase() }: ${ path }`);

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
            req: props.passRequest ? req : undefined,
            res: props.passRequest ? res : undefined,
            file: req.file || undefined,
            files: req.files || undefined,
          },
          {
            user: req.user,
            isAuthenticated: req.isAuthenticated.bind(req),
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

export function GET<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return get<Request, Response>(path, passRequest);
}

export function POST<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return post<Request, Response>(path, passRequest);
}

export function PUT<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return put<Request, Response>(path, passRequest);
}

export function PATCH<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return patch<Request, Response>(path, passRequest);
}

export function DELETE<Request = any, Response = any>(
  path: string,
  passRequest = false
): RouteDecorator {
  return del<Request, Response>(path, passRequest);
}
