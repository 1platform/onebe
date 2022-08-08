import { Entity as TypeORMEntity, EntityOptions } from "typeorm";
import { ObjectUtils } from "typeorm/util/ObjectUtils";
import { Constructor } from "../../../Documentation/MetadataTypes";
import { ControllerDecoratorFunction } from "../../../Router/RouteTypes";
import MetadataStore from "../../../Documentation/MetadataStore";

interface IExtendedModelOptions extends EntityOptions {
  description?: string;
}

/**
 * This decorator is used to mark classes that will be an entity (table or document depend on database type).
 * Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
 *
 * @decorator
 * @param nameOrOptions The name of the entity or options used to define the entity.
 * @param maybeOptions Options used for the entity definition.
 */
export function Model<T extends Constructor>(
  nameOrOptions?: string | IExtendedModelOptions,
  maybeOptions?: IExtendedModelOptions
): ControllerDecoratorFunction<T> {
  const options =
    (ObjectUtils.isObject(nameOrOptions)
      ? (nameOrOptions as IExtendedModelOptions)
      : maybeOptions) || {};
  const name = typeof nameOrOptions === "string" ? nameOrOptions : options.name;

  return function (BaseClass: T): T {
    TypeORMEntity(name, options);

    const entity = new BaseClass();
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.update(name, options.description ?? "");
    entityMetadata.tableName(entity.constructor.name, name);
    entityMetadata.extends(
      name,
      Object.getPrototypeOf(Object.getPrototypeOf(entity)).constructor.name
    );

    return BaseClass;
  };
}
