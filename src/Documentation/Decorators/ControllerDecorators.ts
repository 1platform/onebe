import { ControllerDecoratorFunction } from "../../Router/RouteTypes";
import MetadataStore from "../MetadataStore";
import { Constructor } from "../MetadataTypes";

export function Controller<T extends Constructor>(name: string, description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    MetadataStore.instance.route.setName(BaseClass.name, name);
    MetadataStore.instance.route.setDescription(BaseClass.name, description);

    return BaseClass;
  };
}

export function Name<T extends Constructor>(name: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    MetadataStore.instance.route.setName(BaseClass.name, name);

    return BaseClass;
  };
}

export function Description<T extends Constructor>(description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    MetadataStore.instance.route.setDescription(BaseClass.name, description);

    return BaseClass;
  };
}
