import { ClassDocs, getElementDocs } from "../Docs/DocsDecorators";
import DocsStore from "../Docs/DocsStore";
import Config from "../System/Config";
import DefaultLogger from "../System/Logger";
import {
  Constructor,
  ControllerDecorator,
  ControllerDecoratorFunction,
} from "./RouteTypes";
import { getRouteCallbacks, RouteCallbacks } from "./RouteUtils";

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
