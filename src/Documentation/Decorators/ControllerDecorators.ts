import { RouteDecorator } from "../../Router/RouteTypes";
import MetadataStore from "../MetadataStore";
import { Constructor } from "../MetadataTypes";

export function Controller<T extends Constructor>(name: string, description?: string): RouteDecorator {
  return function (BaseClass: T): T {
    const instance = new BaseClass();
    MetadataStore.instance.route.setName(instance.constructor.name, name);
    MetadataStore.instance.route.setDescription(instance.constructor.name, description);

    return BaseClass;
  };
}

export function Name<T extends Constructor>(name: string): RouteDecorator {
  return function (BaseClass: T): T {
    const instance = new BaseClass();
    MetadataStore.instance.route.setName(instance.constructor.name, name);

    return BaseClass;
  };
}

export function Description<T extends Constructor>(description?: string): RouteDecorator {
  return function (BaseClass: T): T {
    const instance = new BaseClass();
    MetadataStore.instance.route.setDescription(instance.constructor.name, description);

    return BaseClass;
  };
}
