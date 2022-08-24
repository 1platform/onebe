import { ControllerDecoratorFunction } from "../../Router/RouteTypes";
import MetadataStore from "../MetadataStore";
import { Constructor } from "../MetadataTypes";

/**
 * Decorator used to document a controller.
 *
 * Use this decorator when you want to specifically mark a class as a controller
 * in the documentation. Otherwise, by using the @Path decorator you can add
 * the same documentation elements like this decorator.
 *
 * @decorator
 * @param name The name of the controller.
 * @param [description] A short description of the controller.
 */
export function Controller<T extends Constructor>(name: string, description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    MetadataStore.instance.route.setName(BaseClass.name, name);
    MetadataStore.instance.route.setDescription(BaseClass.name, description);

    return BaseClass;
  };
}

/**
 * Decorator used to give a name to a controller.
 *
 * Use this decorator when you want to specifically give a name to a controller.
 * Otherwise, by using the @Path decorator you can add the same documentation
 * elements like this decorator.
 *
 * @decorator
 * @param name The name of the controller.
 */
export function Name<T extends Constructor>(name: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    MetadataStore.instance.route.setName(BaseClass.name, name);

    return BaseClass;
  };
}

/**
 * Decorator used to give a description to a controller.
 *
 * Use this decorator when you want to specifically give a description to a controller.
 * Otherwise, by using the @Path decorator you can add the same documentation
 * elements like this decorator.
 *
 * @decorator
 * @param [description] A short description of the controller.
 */
export function Description<T extends Constructor>(description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    MetadataStore.instance.route.setDescription(BaseClass.name, description);

    return BaseClass;
  };
}
