import {
  JoinColumn as TypeORMJoinColumn,
  JoinColumnOptions,
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

export { JoinTable } from "typeorm";

function DocumentEntity<T = Constructor>(
  object: Constructor,
  propertyName: string,
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  isArray?: boolean
) {
  MetadataStore.instance.entity.addRelation<T>(
    object.constructor.name,
    propertyName,
    typeFunctionOrTarget,
    isArray ?? false
  );
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

export function JoinColumn(
  options?: JoinColumnOptions & { description?: string }
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMJoinColumn(options)(object, propertyName);

    MetadataStore.instance.entity.relationField(
      object.constructor.name,
      propertyName,
      options.name
    );
  };
}
