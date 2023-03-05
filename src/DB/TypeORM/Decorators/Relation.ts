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
import { Constructor } from "@/Documentation/MetadataTypes";
import MetadataStore from "@/Documentation/MetadataStore";

export { JoinTable } from "typeorm";

/**
 * Function used to document the relation between two models.
 *
 * This function is used by all the available model/entity relations that can be defined
 * for a model that is using TypeORM. Based on the `typeFunctionOrTarget` parameter the
 * frameworks generates metadata for the given property in the given model class.
 * This metadata is then enhanced by the model definition and exposed to the
 * developers through the Documentation SDK and API.
 *
 * @param object The model constructor.
 * @param propertyName The name of the property we want to document
 * @param [typeFunctionOrTarget] The type of the relation or function used to define the target of the relation.
 * @param [isArray] Is the relation describing an array or a single element.
 */
function DocumentEntityRelation<T = Constructor>(
  object: Constructor,
  propertyName: string,
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  isArray?: boolean
) {
  MetadataStore.instance.entity.addRelation<T>(object.constructor.name, propertyName, typeFunctionOrTarget, isArray ?? false);
}

/**
 * Decorator used to define a many-to-one relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the many-to-one relation.
 * @param [options] A list of options used for defining the relation.
 */
export function ManyToOne<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMManyToOne(typeFunctionOrTarget, options)(object, propertyName);
    DocumentEntityRelation<T>(object, propertyName, typeFunctionOrTarget);
  };
}

/**
 * Decorator used to define a many-to-many relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the many-to-many relation.
 * @param [inverseSide] The inverse side target of the many-to-many relation.
 * @param [options] A list of options used for defining the relation.
 */
export function ManyToMany<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  inverseSide?: string | ((object: T) => any) | RelationOptions,
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    if (!options) {
      TypeORMManyToMany(typeFunctionOrTarget, inverseSide as RelationOptions)(object, propertyName);
    } else {
      TypeORMManyToMany(typeFunctionOrTarget, inverseSide as string | ((object: T) => any), options)(object, propertyName);
    }
    DocumentEntityRelation<T>(object, propertyName, typeFunctionOrTarget, true);
  };
}

/**
 * Decorator used to define a one-to-many relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the one-to-many relation.
 * @param [inverseSide] The inverse side target of the one-to-many relation.
 * @param [options] A list of options used for defining the relation.
 */
export function OneToMany<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  inverseSide?: string | ((object: T) => any),
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMOneToMany(typeFunctionOrTarget, inverseSide, options)(object, propertyName);
    DocumentEntityRelation<T>(object, propertyName, typeFunctionOrTarget, true);
  };
}

/**
 * Decorator used to define a one-to-one relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the one-to-one relation.
 * @param [inverseSide] The inverse side target of the one-to-many relation.
 * @param [options] A list of options used for defining the relation.
 */
export function OneToOne<T = Constructor>(
  typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
  inverseSide?: string | ((object: T) => any) | RelationOptions,
  options?: RelationOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    if (!options) {
      TypeORMOneToOne(typeFunctionOrTarget, inverseSide as RelationOptions)(object, propertyName);
    } else {
      TypeORMOneToOne(typeFunctionOrTarget, inverseSide as string | ((object: T) => any), options)(object, propertyName);
    }
    DocumentEntityRelation<T>(object, propertyName, typeFunctionOrTarget, false);
  };
}

/**
 * Decorator used to define a column used to store the relation key for a referenced model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the join column.
 */
export function JoinColumn(options?: JoinColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMJoinColumn(options)(object, propertyName);
    MetadataStore.instance.entity.relationField(object.constructor.name, propertyName, options.name);
  };
}
