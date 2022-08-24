import {
  Column as TypeORMColumn,
  ColumnOptions,
  CreateDateColumn as TypeORMCreateDateColumn,
  DeleteDateColumn as TypeORMDeleteDateColumn,
  ObjectIdColumn as TypeORMObjectIdColumn,
  PrimaryColumn as TypeORMPrimaryColumn,
  PrimaryGeneratedColumn as TypeORMPrimaryGeneratedColumn,
  UpdateDateColumn as TypeORMUpdateDateColumn,
  VersionColumn as TypeORMVersionColumn,
  ViewColumn as TypeORMViewColumn,
} from "typeorm";
import { Constructor } from "../../../Documentation/MetadataTypes";
import { PrimaryColumnOptions } from "typeorm/decorator/columns/PrimaryColumn";
import { PrimaryGeneratedColumnNumericOptions } from "typeorm/decorator/options/PrimaryGeneratedColumnNumericOptions";
import { ViewColumnOptions } from "typeorm/decorator/options/ViewColumnOptions";
import { ColumnEmbeddedOptions } from "typeorm/decorator/options/ColumnEmbeddedOptions";
import { mapSQLToEntity } from "../../../Documentation/Definition/EntityMetadata";
import MetadataStore from "../../../Documentation/MetadataStore";

/**
 * Function used to document a property of a model class.
 *
 * This function is used by all the various types of columns that can be defined
 * for a model that is using TypeORM. Based on the `columnOptions` parameter the
 * frameworks generates metadata for the given property in the given model class.
 * This metadata is then enhanced by the model definition and exposed to the
 * developers through the Documentation SDK and API.
 *
 * @param object The model constructor.
 * @param propertyName The name of the property we want to document
 * @param [columnOptions] The options used to describe the column in the database.
 */
function DocumentEntityProperty(object: Constructor, propertyName: string, columnOptions?: ColumnOptions & { description?: string }): void {
  MetadataStore.instance.entity.property(object.constructor.name, propertyName, {
    description: columnOptions.description,
    required: !columnOptions.nullable ?? true,
    dataType: mapSQLToEntity(columnOptions.type || "string"),
    length: columnOptions.length,
    isDate: columnOptions.type === "date",
    isDateTime: [ "datetime", "timestamp" ].indexOf(columnOptions.type?.toString()) >= 0,
    fieldName: columnOptions.name || propertyName,
  });

  if (columnOptions.primary) {
    MetadataStore.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  }
}

/**
 * Decorator used to define a column used to store the modification date of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the modification date column.
 */
export function UpdateDateColumn(options?: ColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    TypeORMUpdateDateColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}

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
export function DeleteDateColumn(options?: ColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMDeleteDateColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}

/**
 * Decorator used to define a column used to store the creation date of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the creation date column.
 */
export function CreateDateColumn(options?: ColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMCreateDateColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}

/**
 * Decorator used to define a column used to store the primary key of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the primary key column.
 */
export function PrimaryColumn(options?: PrimaryColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMPrimaryColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
    MetadataStore.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  };
}

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
export function PrimaryGeneratedColumn(
  strategy: PrimaryGeneratedColumnNumericOptions | string,
  options: PrimaryGeneratedColumnNumericOptions & { description?: string }
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMPrimaryGeneratedColumn(strategy as unknown as any, options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options ?? strategy);
    MetadataStore.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  };
}

/**
 * Decorator used to define a column used to store the version of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the version column.
 */
export function VersionColumn(options?: ColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMVersionColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}

/**
 * Decorator used to mark a column of a model as a view column.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the view column.
 */
export function ViewColumn(options?: ViewColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMViewColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}

/**
 * Decorator used to mark a column of a model as an ObjectId column.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the ObjectId column.
 */
export function ObjectIdColumn(options?: ColumnOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMObjectIdColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}

/**
 * Decorator used to define the column of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the column.
 */
export function Column(options?: ColumnOptions & ColumnEmbeddedOptions & { description?: string }): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMColumn(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}
