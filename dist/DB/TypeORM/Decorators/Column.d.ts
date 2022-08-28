import { ColumnOptions } from "typeorm";
import { PrimaryColumnOptions } from "typeorm/decorator/columns/PrimaryColumn";
import { PrimaryGeneratedColumnNumericOptions } from "typeorm/decorator/options/PrimaryGeneratedColumnNumericOptions";
import { ViewColumnOptions } from "typeorm/decorator/options/ViewColumnOptions";
import { ColumnEmbeddedOptions } from "typeorm/decorator/options/ColumnEmbeddedOptions";
/**
 * Decorator used to define a column used to store the modification date of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the modification date column.
 */
export declare function UpdateDateColumn(options?: ColumnOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to define a column used to store the deletion date of a model.
 * This kind of column is usually used when you want to do soft deletion in your
 * application.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the deletion date column.
 */
export declare function DeleteDateColumn(options?: ColumnOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to define a column used to store the creation date of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the creation date column.
 */
export declare function CreateDateColumn(options?: ColumnOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to define a column used to store the primary key of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the primary key column.
 */
export declare function PrimaryColumn(options?: PrimaryColumnOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to define a column used to store a generated primary key of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param strategy The strategy used for generating the primary key or the list of options used for
 *                 defining the generated primary key column.
 * @param options A list of options used for defining the generated primary key column.
 */
export declare function PrimaryGeneratedColumn(strategy: PrimaryGeneratedColumnNumericOptions | "increment" | "uuid" | "rowid" | "identity", options: PrimaryGeneratedColumnNumericOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to define a column used to store the version of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the version column.
 */
export declare function VersionColumn(options?: ColumnOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to mark a column of a model as a view column.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the view column.
 */
export declare function ViewColumn(options?: ViewColumnOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to mark a column of a model as an ObjectId column.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the ObjectId column.
 */
export declare function ObjectIdColumn(options?: ColumnOptions & {
    description?: string;
}): PropertyDecorator;
/**
 * Decorator used to define the column of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the column.
 */
export declare function Column(options?: ColumnOptions & ColumnEmbeddedOptions & {
    description?: string;
}): PropertyDecorator;
