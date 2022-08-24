import { ControllerDecoratorFunction } from "./RouteTypes";
import { Constructor } from "../Documentation/MetadataTypes";
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
export declare function Path<T extends Constructor>(path: string, name?: string, description?: string): ControllerDecoratorFunction<T>;
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
export declare function Controller<T extends Constructor>(path: string, name?: string, description?: string): ControllerDecoratorFunction<T>;
/**
 * Decorator to mark the controller as an API controller.
 *
 * @decorator
 */
export declare function API<T extends Constructor>(): ControllerDecoratorFunction<T>;
/**
 * Decorator to define a custom controller prefix.
 *
 * @decorator
 * @param path The custom controller path prefix.
 */
export declare function Custom<T extends Constructor>(path: string): ControllerDecoratorFunction<T>;
/**
 * Decorator to mark a controller as a Documentation one. If needed you can customize
 * the base path on which the endpoints exposed by the controller are.
 *
 * @decorator
 * @param path The custom documentation path prefix.
 */
export declare function Docs<T extends Constructor>(path?: string): ControllerDecoratorFunction<T>;
/**
 * Decorator used to add the controller into a group.
 *
 * @decorator
 * @param groupName The name of the group.
 */
export declare function Group<T extends Constructor>(groupName: string): ControllerDecoratorFunction<T>;
