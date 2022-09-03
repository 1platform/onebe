import Config from "../System/Config";
import { getDefaultLogger } from "../System/Logger";
import { ControllerDecorator, ControllerDecoratorFunction } from "./RouteTypes";
import { Constructor } from "../Documentation/MetadataTypes";
import MetadataStore from "../Documentation/MetadataStore";
import { Router } from "./index";

/**
 * Decorator used to define the path the controller will handle.
 *
 * This decorator checks if documentation can be exposed and will allow the registration
 * of the Documentation APIs while keeping track of the various elements that need to
 * be added to the Documentation for controllers that are added in the application.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param name The name of the controller. If no name is specified, it will take the name of the controller.
 * @param description The description of the controller. If no description is passed, no description will be documented.
 */
export function Path<T extends Constructor>(path: string, name?: string, description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    const routeMetadata = MetadataStore.instance.route;
    const route = routeMetadata.update(BaseClass.name, path, description);
    route.name = name;

    if (route.isDocs && !Config.boolean("docs.expose")) {
      return BaseClass;
    }

    const basePath = route.basePath
      .filter((basePath) => basePath)
      .join("/")
      .replace(/(https?:\/\/)|(\/)+/g, "$1$2");

    getDefaultLogger().debug("---------------");
    getDefaultLogger().info(`[REGISTER] Routes for: ${ route.controller } [${ route.name }]: ${ basePath }`);
    Router.parseRoute(route);
    getDefaultLogger().debug("---------------");
    return BaseClass;
  };
}

/**
 * Decorator used to define the path the controller will handle. It is an alias for @Path.
 *
 * This decorator checks if documentation can be exposed and will allow the registration
 * of the Documentation APIs while keeping track of the various elements that need to
 * be added to the Documentation for controllers that are added in the application.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param name The name of the controller. If no name is specified, it will take the name of the controller.
 * @param description The description of the controller. If no description is passed, no description will be documented.
 */
export function Controller<T extends Constructor>(path: string, name?: string, description?: string): ControllerDecoratorFunction<T> {
  return Path<T>(path, name, description);
}

/**
 * Decorator to mark the controller as an API controller.
 *
 * @decorator
 */
export function API<T extends Constructor>(): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): ControllerDecorator<T> {
    const routeMetadata = MetadataStore.instance.route;
    routeMetadata.markAsAPI(BaseClass.name, Config.string("api.path"));

    return BaseClass;
  };
}

/**
 * Decorator to define a custom controller prefix.
 *
 * @decorator
 * @param path The custom controller path prefix.
 */
export function Custom<T extends Constructor>(path: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): ControllerDecorator<T> {
    const routeMetadata = MetadataStore.instance.route;
    routeMetadata.markAsCustom(BaseClass.name, path);
    return BaseClass;
  };
}

/**
 * Decorator to mark a controller as a Documentation one. If needed you can customize
 * the base path on which the endpoints exposed by the controller are.
 *
 * @decorator
 * @param path The custom documentation path prefix.
 */
export function Docs<T extends Constructor>(path?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): ControllerDecorator<T> {
    const routeMetadata = MetadataStore.instance.route;
    routeMetadata.markAsDocs(BaseClass.name);
    routeMetadata.markAsCustom(BaseClass.name, path ?? Config.string("docs.path"));
    return BaseClass;
  };
}

/**
 * Decorator used to add the controller into a group.
 *
 * @decorator
 * @param groupName The name of the group.
 */
export function Group<T extends Constructor>(groupName: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): ControllerDecorator<T> {
    const routeMetadata = MetadataStore.instance.route;
    routeMetadata.group(BaseClass.name, groupName);
    return BaseClass;
  };
}
