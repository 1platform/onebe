import { ControllerDecorator, ControllerDecoratorFunction } from "./RouteTypes";
import { Constructor } from "../Documentation/MetadataTypes";
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
export declare function Path<T extends Constructor>(path: string, name?: string, description?: string): ControllerDecoratorFunction<T>;
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
export declare function API<T extends Constructor>(BaseClass: T): ControllerDecorator<T>;
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
export declare function Custom<T extends Constructor>(path: string): ControllerDecoratorFunction<T>;
export declare function Group<T extends Constructor>(groupName: string): ControllerDecoratorFunction<T>;
