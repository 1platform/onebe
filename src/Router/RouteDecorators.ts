import Config from "../System/Config";
import { getDefaultLogger } from "../System/Logger";
import { ControllerDecorator, ControllerDecoratorFunction } from "./RouteTypes";
import { Constructor } from "../Documentation/MetadataTypes";
import MetadataStore from "../Documentation/MetadataStore";
import Router from "./index";

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
export function Path<T extends Constructor>(
  path: string,
  name?: string,
  description?: string
): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    const routeMetadata = MetadataStore.instance.route;
    const route = routeMetadata.update(
      new BaseClass().constructor.name,
      path,
      description
    );
    route.name = name;

    const basePath = route.basePath
      .filter((basePath) => basePath)
      .join("/")
      .replace(/(https?:\/\/)|(\/)+/g, "$1$2");

    getDefaultLogger().debug("---------------");
    getDefaultLogger().info(
      `[REGISTER] Routes for: ${ route.controller } [${ route.name }]: ${ basePath }`
    );
    Router.parseRoute(route);
    getDefaultLogger().debug("---------------");
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
export function API<T extends Constructor>(
  BaseClass: T
): ControllerDecorator<T> {
  const route = new BaseClass();
  const routeMetadata = MetadataStore.instance.route;
  routeMetadata.markAsAPI(route.constructor.name, Config.string("api.path"));

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
export function Custom<T extends Constructor>(
  path: string
): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): ControllerDecorator<T> {
    const route = new BaseClass();
    const routeMetadata = MetadataStore.instance.route;
    routeMetadata.markAsCustom(route.constructor.name, path);
    return BaseClass;
  };
}

export function Group<T extends Constructor>(
  groupName: string
): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): ControllerDecorator<T> {
    const route = new BaseClass();
    const routeMetadata = MetadataStore.instance.route;
    routeMetadata.group(route.constructor.name, groupName);
    return BaseClass;
  };
}
