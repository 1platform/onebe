import { JoinColumnOptions, ObjectType, RelationOptions } from "typeorm";
import { Constructor, PropertyDecorator } from "../../../Documentation/MetadataTypes";
export { JoinTable } from "typeorm";
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
export declare function ManyToOne<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), options?: RelationOptions): PropertyDecorator;
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
export declare function ManyToMany<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide?: string | ((object: T) => any), options?: RelationOptions): PropertyDecorator;
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
export declare function OneToMany<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide?: string | ((object: T) => any), options?: RelationOptions): PropertyDecorator;
/**
 * Decorator used to define a one-to-one relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the one-to-one relation.
 * @param [options] A list of options used for defining the relation.
 */
export declare function OneToOne<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), options?: RelationOptions): PropertyDecorator;
/**
 * Decorator used to define a column used to store the relation key for a referenced model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the join column.
 */
export declare function JoinColumn(options?: JoinColumnOptions & {
    description?: string;
}): PropertyDecorator;
