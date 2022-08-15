import { Constructor, PropertyDecorator } from "../MetadataTypes";
import { ControllerDecoratorFunction } from "../../Router/RouteTypes";
import MetadataStore from "../MetadataStore";
import { IEntityProperty } from "../Definition/EntityMetadata";
import { EntityPropertyDataTypes } from "../Definition/DataTypes";

export function Entity<T extends Constructor>(name?: string, description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    const entity = new BaseClass();
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.update(name ?? entity.constructor.name, description ?? "");
    entityMetadata.extends(name, Object.getPrototypeOf(Object.getPrototypeOf(entity)).constructor.name);

    return BaseClass;
  };
}

export function Property(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    MetadataStore.instance.entity.property(object.constructor.name, propertyName, {
      required: false,
      ...options,
    });
  };
}

export function IsRequired(object: Constructor, propertyName: string): void {
  MetadataStore.instance.entity.markRequired(object.constructor.name, propertyName);
}

export function RequiredProperty(options?: IEntityProperty): PropertyDecorator {
  return Property({ ...options, required: true });
}

export function DateProperty(options?: IEntityProperty): PropertyDecorator {
  return Property({
    ...options,
    dataType: EntityPropertyDataTypes.STRING,
    isDate: true,
  });
}

export function DateTimeProperty(options?: IEntityProperty): PropertyDecorator {
  return Property({
    ...options,
    dataType: EntityPropertyDataTypes.STRING,
    isDateTime: true,
  });
}

export function StringProperty(options?: IEntityProperty): PropertyDecorator {
  return Property({ ...options, dataType: EntityPropertyDataTypes.STRING });
}

export function NumberProperty(options?: IEntityProperty): PropertyDecorator {
  return Property({ ...options, dataType: EntityPropertyDataTypes.NUMBER });
}

export function BooleanProperty(options?: IEntityProperty): PropertyDecorator {
  return Property({ ...options, dataType: EntityPropertyDataTypes.BOOLEAN });
}

export function IntegerProperty(options?: IEntityProperty): PropertyDecorator {
  return Property({ ...options, dataType: EntityPropertyDataTypes.INTEGER });
}

export function ArrayProperty(dataType: EntityPropertyDataTypes.STRING, options?: IEntityProperty): PropertyDecorator {
  return Property({
    ...options,
    dataType: EntityPropertyDataTypes.ARRAY,
    childType: dataType,
  });
}

export function EntityArrayProperty(entityName: string, options?: IEntityProperty): PropertyDecorator {
  return Property({
    ...options,
    dataType: EntityPropertyDataTypes.ARRAY,
    reference: entityName,
  });
}

export function EntityProperty(entityName: string, options?: IEntityProperty): PropertyDecorator {
  return Property({
    ...options,
    dataType: EntityPropertyDataTypes.OBJECT,
    reference: entityName,
  });
}
