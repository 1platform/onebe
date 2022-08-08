import Route from "../Router/Route";

/**
 * Type used to define a Class with a constructor.
 */
export type Constructor = { new (...args: any[]): any };

/**
 * Type used to define a Property Decorator function.
 *
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property on which we apply the decorator.
 * @param descriptor The property descriptor of the property we want to apply the decorator on.
 */
export type PropertyDecorator<T = Constructor> = (
  target: T,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => void;
