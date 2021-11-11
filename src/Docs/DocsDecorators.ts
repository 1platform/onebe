import "reflect-metadata";
import HTTPStatus from "../HTTP/HTTPStatus";
import Route from "../Router/Route";
import {
  Constructor,
  ControllerDecoratorFunction,
  ResponseValue,
  RouteDecorator,
} from "../Router/RouteTypes";
import { BodyParameterType, DEFAULT_BODY_TAG } from "./DocsInterfaces";

/**
 * Type used to define a Class Documentation
 */
export type ClassDocs = Record<string, string>;
/**
 * Type used to define a Route Documentation
 */
export type RouteDocs = Record<MethodMetadataType,Record<string, ResponseValue<any>>>;

/**
 * A method that retrieves the element docs
 *
 * @param target The target route
 * @param propertyKey The property key
 */
export function getElementDocs<Type = Record<string, unknown>>(
  target: Route,
  propertyKey?: string
): Type {
  let docs: Type = Reflect.getMetadata("route:docs", target, propertyKey);
  if (!docs) {
    docs = {} as Type;
    Reflect.defineMetadata("route:docs", docs, target, propertyKey);
  }

  return docs;
}

/**
 * Enum representing the Metadata Type
 *
 * @enum
 */
export enum MethodMetadataType {
  ROUTE = "route",
  PARAMETER = "parameter",
  QUERY = "query",
  BODY = "body",
  BODY_REQUEST = "body_request",
  RESPONSE = "response",
  THROW = "throw",
}

/**
 * Decorator used to define a method Metadata
 *
 * @param type The metadata type
 * @param key The key on which to set the value
 * @param value The value to be set
 */
function methodMetadataDecorator<TResponse = any>(
  type: MethodMetadataType,
  key: string,
  value: ResponseValue<TResponse>
): RouteDecorator {
  return (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void => {
    const routeDocs = getElementDocs<RouteDocs>(target, propertyKey);
    switch (type) {
      case MethodMetadataType.THROW:
        routeDocs.throw = {
          ...(routeDocs.throw || {}),
          [key]: value,
        };
        break;
      case MethodMetadataType.RESPONSE:
        routeDocs.response = {
          statusCode: key,
          description: value as string,
        };
        break;
      case MethodMetadataType.BODY:
        routeDocs.body = {
          ...(routeDocs.body || {}),
          [key]: {
            name: key,
            ...(value as Record<string, string>),
          },
        };
        break;
      case MethodMetadataType.BODY_REQUEST:
        routeDocs.body = {
          ...(routeDocs.body || {}),
          [DEFAULT_BODY_TAG]: {
            name: DEFAULT_BODY_TAG,
            description: value,
            type: BodyParameterType.SCHEMA,
            schema: key,
            required: true,
          },
        };
        break;
      case MethodMetadataType.ROUTE:
      default:
        routeDocs[type] = {
          ...(routeDocs[type] || {}),
          [key]: value,
        };
    }
  };
}

/**
 * Decorator used to define a class Metadata
 *
 * @param key The key on which to set the value
 * @param value The value to be set
 */
function classMetadataDecorator<T extends Constructor>(
  key: string,
  value: string
): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    const classDocs = getElementDocs<ClassDocs>(BaseClass.prototype);
    classDocs[key] = value;
    return BaseClass;
  };
}

/**
 * A list of decorators to define properties of a controller.
 */
export const controller = {
  /**
   * Decorator to add a description to a controller.
   *
   * @decorator
   * @param description Controller Description
   */
  description: function <T extends Constructor>(
    description: string
  ): ControllerDecoratorFunction<T> {
    return classMetadataDecorator("description", description);
  },

  /**
   * Decorator to add a name to a controller.
   *
   * @decorator
   * @param description Controller Name
   */
  name: function <T extends Constructor>(
    description: string
  ): ControllerDecoratorFunction<T> {
    return classMetadataDecorator("name", description);
  },
};

/**
 * A list of decorators to define properties of a route.
 */
export const method = {
  description: function (description: string): RouteDecorator {
    return methodMetadataDecorator(
      MethodMetadataType.ROUTE,
      "description",
      description
    );
  },
  throws: function <TResponse>(
    errorCode: HTTPStatus,
    description: string,
    response?: ResponseValue<TResponse>
  ): RouteDecorator {
    return methodMetadataDecorator(
      MethodMetadataType.THROW,
      errorCode.toString(),
      {
        statusCode: errorCode,
        body: description,
      }
    );
  },
  responseStatus: function (
    statusCode: HTTPStatus,
    description?: string
  ): RouteDecorator {
    return methodMetadataDecorator(
      MethodMetadataType.RESPONSE,
      statusCode.toString(),
      description
    );
  },
  body: function (
    parameter: string,
    type: string,
    description?: string
  ): RouteDecorator {
    return methodMetadataDecorator(MethodMetadataType.BODY, parameter, {
      type,
      description,
    });
  },
  request: function (type: string, description?: string): RouteDecorator {
    return methodMetadataDecorator(
      MethodMetadataType.BODY_REQUEST,
      type,
      description
    );
  },
};
