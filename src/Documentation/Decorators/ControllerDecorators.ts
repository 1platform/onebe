import { ControllerDecoratorFunction, Route, RouteDecorator } from "@/Router";
import MetadataStore from "@/Documentation/MetadataStore";
import { Constructor } from "@/Documentation/MetadataTypes";

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

/**
 * Decorator used to describe a parameter (:parameter) used in the endpoint URL for a route.
 *
 * When you have parameters in the endpoint URL, documenting the type of
 * the parameter (if it is a number or a string) and adding a short description
 * to it will help the developers that will use the exposed REST API endpoint
 * in their interaction with your application.
 *
 * @decorator
 * @param parameter The name of the parameter we want to document.
 * @param [isNumeric] Should the value be a numeric one or not.
 * @param [description] A short description of the parameter.
 */
export function RouteParameter<T extends Constructor>(parameter: string, isNumeric = false, description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    MetadataStore.instance.route.routeParameter(BaseClass.name, {
      name: parameter,
      isNumeric: isNumeric ?? false,
      description,
    });

    return BaseClass;
  };
}
