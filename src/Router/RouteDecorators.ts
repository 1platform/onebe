import { ClassDocs, getElementDocs } from "../Docs/DocsDecorators";
import DocsStore from "../Docs/DocsStore";
import Config from "../System/Config";
import DefaultLogger from "../System/Logger";
import {
  Constructor,
  ControllerDecorator,
  ControllerDecoratorFunction,
  RouteCallbacks,
} from "./RouteTypes";
import { getRouteCallbacks } from "./RouteUtils";

/**
 * Decorator to define the path the controller will handle.
 *
 * Attaches to the target the following metadata:
 * - route:path
 * - route:api - if the {@link api} decorator was used.
 * - route:name
 * - route:docs
 * - route:path:callbacks
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param name The name of the controller. If no name is specified, it will take the name of the controller.
 * @param description The description of the controller. If no description is passed, no description will be documented.
 */
export function path<T extends Constructor>(
  path: string,
  name?: string,
  description?: string
): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    let paths: Array<string> = Reflect.getMetadata(
      "route:path",
      BaseClass.prototype
    );
    if (!paths) {
      paths = [];
      Reflect.defineMetadata("route:path", paths, BaseClass.prototype);
    }
    paths.push(path);
    const basePath = paths.join("/").replace(/(https?:\/\/)|(\/)+/g, "$1$2");
    const groupName = name || BaseClass.name;

    const isAPI = Reflect.getMetadata("route:api", BaseClass.prototype);
    const controllerDocs = getElementDocs<ClassDocs>(BaseClass.prototype);

    Reflect.defineMetadata("route:name", groupName, BaseClass.prototype);
    DocsStore.instance.initGroup(
      groupName,
      basePath,
      description,
      isAPI || false
    );
    Object.keys(controllerDocs).forEach((key) => {
      DocsStore.instance.setGroupItem(groupName, key, controllerDocs[key]);
    });

    const routeCallbacks: RouteCallbacks = getRouteCallbacks(
      BaseClass.prototype
    );
    if (routeCallbacks.length > 0) {
      DefaultLogger.debug("---------------");
      DefaultLogger.info(`[REGISTER] Routes at path: ${ basePath }`);
      DefaultLogger.debug("---------------");
      routeCallbacks.forEach((fn) => fn(basePath, groupName));
    }
    return BaseClass;
  };
}

/**
 * Decorator to define the controller as an API controller.
 *
 * Attaches to the target the following metadata:
 * - route:path
 * - route:api
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param BaseClass The Controller we want to decorate.
 */
export function api<T extends Constructor>(
  BaseClass: T
): ControllerDecorator<T> {
  let paths: Array<string> = Reflect.getMetadata(
    "route:path",
    BaseClass.prototype
  );
  if (!paths) {
    paths = [];
    Reflect.defineMetadata("route:path", paths, BaseClass.prototype);
  }

  Reflect.defineMetadata("route:api", true, BaseClass.prototype);
  paths.unshift(Config.string("api.path"));
  return BaseClass;
}

/**
 * Decorator to define a custom controller prefix.
 *
 * Attaches to the target the following metadata:
 * - route:path
 * - route:custom:path
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param path The custom controller path prefix.
 */
export function custom<T extends Constructor>(
  path: string
): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): ControllerDecorator<T> {
    let paths: Array<string> = Reflect.getMetadata(
      "route:path",
      BaseClass.prototype
    );
    if (!paths) {
      paths = [];
      Reflect.defineMetadata("route:path", paths, BaseClass.prototype);
    }

    Reflect.defineMetadata("route:custom:path", true, BaseClass.prototype);
    paths.unshift(path);
    return BaseClass;
  };
}
