import {
  ManyToMany as TypeORMManyToMany,
  ManyToOne as TypeORMManyToOne,
  ObjectType,
  OneToMany as TypeORMOneToMany,
  OneToOne as TypeORMOneToOne,
  RelationOptions,
} from "typeorm";
import {
  Constructor,
  PropertyDecorator,
} from "../../../Documentation/MetadataTypes";
import MetadataStore from "../../../Documentation/MetadataStore";
import { EntityPropertyDataTypes } from "../../../Documentation/Definition/EntityMetadata";

export { JoinTable } from "typeorm";

function DocumentEntity<T = Constructor>(
  object: Constructor,
  propertyName: string,
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  isArray?: boolean
) {
  let name = "";
  let idField = "id";
  let dataType = "integer";
  let fieldName = "";

  const entityMetadata = MetadataStore.instance.entity;
  if (typeof typeFunctionOrTarget !== "string") {
    const result = typeFunctionOrTarget();
    console.log(result, propertyName, object.constructor.name);
    if (!result) {
      return;
    }
    name = result.name;
    fieldName = `${ name.slice(0, 1).toLowerCase() }${ name.slice(1) }Id`;
  } else {
    name = typeFunctionOrTarget;
    fieldName = `${ name.slice(0, 1).toLowerCase() }${ name.slice(1) }Id`;
  }

  const primaryKeyList = entityMetadata.getPrimaryKey(name);
  if (primaryKeyList.length > 0) {
    idField = primaryKeyList[0].name;
    fieldName = `${ name.slice(0, 1).toLowerCase() }${ name.slice(1) }${ idField
      .slice(0, 1)
      .toUpperCase() }${ idField.slice(1) }`;
    dataType = primaryKeyList[0].dataType;
  }

  entityMetadata.property(object.constructor.name, propertyName, {
    dataType: isArray
      ? EntityPropertyDataTypes.ARRAY
      : EntityPropertyDataTypes.OBJECT,
    fieldName,
    reference: name,
    referenceId: idField,
  });

  if (!entityMetadata.hasProperty(name, fieldName)) {
    entityMetadata.property(object.constructor.name, fieldName, {
      dataType: dataType as EntityPropertyDataTypes,
    });
  }
}

export function ManyToOne<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMManyToOne(typeFunctionOrTarget, options)(object, propertyName);
    DocumentEntity<T>(object, propertyName, typeFunctionOrTarget);
  };
}

export function ManyToMany<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  inverseSide?: string | ((object: T) => any),
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMManyToMany(
      typeFunctionOrTarget,
      inverseSide,
      options
    )(object, propertyName);
    DocumentEntity<T>(object, propertyName, typeFunctionOrTarget, true);
  };
}

export function OneToMany<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  inverseSide?: string | ((object: T) => any),
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMOneToMany(
      typeFunctionOrTarget,
      inverseSide,
      options
    )(object, propertyName);
    DocumentEntity<T>(object, propertyName, typeFunctionOrTarget, true);
  };
}

export function OneToOne<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMOneToOne(typeFunctionOrTarget, options)(object, propertyName);
    DocumentEntity<T>(object, propertyName, typeFunctionOrTarget, false);
  };
}
