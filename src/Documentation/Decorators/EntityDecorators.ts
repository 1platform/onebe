import { EntityPropertyDataTypes } from "@/Documentation/Definition/DataTypes";
import { IEntityProperty } from "@/Documentation/Definition/EntityMetadata";
import MetadataStore from "@/Documentation/MetadataStore";
import { Constructor } from "@/Documentation/MetadataTypes";
import { ControllerDecoratorFunction } from "@/Router";

/**
 * Decorator used to describe a custom entity that is extending the
 * BaseEntity class.
 *
 * Using this decorator we can give a custom entity a name and define
 * what other entity it extends. When the Documentation API is exposing
 * the metadata, it will look in the hierarchy of the class and list
 * all the properties in one place.
 *
 * @param [description] A short description of the entity.
 */
export function Entity<T extends Constructor>(description?: string): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.update(BaseClass.name, description ?? "");
    entityMetadata.buildChainExtension(BaseClass.name, BaseClass);

    return BaseClass;
  };
}

/**
 * Decorator used to add what entity it extends to the entity.
 *
 * Using this decorator we can give additional information to a custom entity
 * about what other entity it extends. When the Documentation API is exposing
 * the metadata, it will look in the hierarchy of the class and list
 * all the properties in one place.
 *
 * @param entities The name of the entities extended
 */
export function Extends<T extends Constructor>(...entities: string[]): ControllerDecoratorFunction<T> {
  return function (BaseClass: T): T {
    const entityMetadata = MetadataStore.instance.entity;
    entities.forEach((entity) => entityMetadata.extends(BaseClass.name, entity));

    return BaseClass;
  };
}

/**
 * Function used to document a property from an entity.
 *
 * @param entity The entity to be documented.
 * @param propertyName The name of the property to be documented.
 * @param [options] Additional options to be passed for documentation purposes.
 */
function DocumentProperty(entity: string, propertyName: string, options?: IEntityProperty): void {
  MetadataStore.instance.entity.property(entity, propertyName, {
    required: false,
    dataType: EntityPropertyDataTypes.STRING,
    ...(options || {}),
  });
}

/**
 * Decorator used to describe the property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function Property(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, options);
  };
}

/**
 * Decorator used to mark the property of a custom entity as required.
 *
 * @param object The entity on which we apply the decorator.
 * @param propertyName The name of the property on which we apply the decorator.
 */
export function IsRequired(object: any, propertyName: string): void {
  MetadataStore.instance.entity.markRequired(object.constructor.name, propertyName);
}

/**
 * Decorator used to describe a required property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function RequiredProperty(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, { ...options, required: true });
  };
}

/**
 * Decorator used to describe a date property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function DateProperty(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, {
      ...options,
      dataType: EntityPropertyDataTypes.STRING,
      isDate: true,
    });
  };
}

/**
 * Decorator used to describe a date-time property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function DateTimeProperty(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, {
      ...options,
      dataType: EntityPropertyDataTypes.STRING,
      isDateTime: true,
    });
  };
}

/**
 * Decorator used to describe a string property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function StringProperty(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, { ...options, dataType: EntityPropertyDataTypes.STRING });
  };
}

/**
 * Decorator used to describe a number property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function NumberProperty(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, { ...options, dataType: EntityPropertyDataTypes.NUMBER });
  };
}

/**
 * Decorator used to describe a boolean property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function BooleanProperty(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, { ...options, dataType: EntityPropertyDataTypes.BOOLEAN });
  };
}

/**
 * Decorator used to describe an integer property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */
export function IntegerProperty(options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, { ...options, dataType: EntityPropertyDataTypes.INTEGER });
  };
}

/**
 * Decorator used to describe an array property of a custom entity.
 *
 * @param [dataType] The data type of the property.
 * @param [options] A list of options to define a property of an entity.
 */
export function ArrayProperty(dataType: EntityPropertyDataTypes = EntityPropertyDataTypes.STRING, options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, {
      ...options,
      dataType: EntityPropertyDataTypes.ARRAY,
      childType: dataType,
    });
  };
}

/**
 * Decorator used to describe a property of a custom entity that references a list of another entities.
 *
 * @param entityName The name of the entity we want to reference.
 * @param [options] A list of options to define a property of an entity.
 */
export function EntityArrayProperty(entityName: string, options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, {
      ...options,
      dataType: EntityPropertyDataTypes.ARRAY,
      reference: entityName,
    });
  };
}

/**
 * Decorator used to describe a property of a custom entity that references another entity.
 *
 * @param entityName The name of the entity we want to reference.
 * @param [options] A list of options to define a property of an entity.
 */
export function EntityProperty(entityName: string, options?: IEntityProperty): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    DocumentProperty(object.constructor.name, propertyName, {
      ...options,
      dataType: EntityPropertyDataTypes.OBJECT,
      reference: entityName,
    });
  };
}
