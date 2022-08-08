import {
  Column as TypeORMColumn,
  ColumnOptions,
  CreateDateColumn as TypeORMCreateDateColumn,
  DeleteDateColumn as TypeORMDeleteDateColumn,
  JoinColumn as TypeORMJoinColumn,
  JoinColumnOptions,
  ObjectIdColumn as TypeORMObjectIdColumn,
  PrimaryColumn as TypeORMPrimaryColumn,
  PrimaryGeneratedColumn as TypeORMPrimaryGeneratedColumn,
  UpdateDateColumn as TypeORMUpdateDateColumn,
  VersionColumn as TypeORMVersionColumn,
  ViewColumn as TypeORMViewColumn,
} from "typeorm";
import {
  Constructor,
  PropertyDecorator,
} from "../../../Documentation/MetadataTypes";
import { PrimaryColumnOptions } from "typeorm/decorator/columns/PrimaryColumn";
import { PrimaryGeneratedColumnNumericOptions } from "typeorm/decorator/options/PrimaryGeneratedColumnNumericOptions";
import { ViewColumnOptions } from "typeorm/decorator/options/ViewColumnOptions";
import { ColumnEmbeddedOptions } from "typeorm/decorator/options/ColumnEmbeddedOptions";
import { mapSQLToEntity } from "../../../Documentation/Definition/EntityMetadata";
import MetadataStore from "../../../Documentation/MetadataStore";

interface IExtendedColumnOptions extends ColumnOptions {
  description?: string;
}

function DocumentEntity(
  object: Constructor,
  propertyName: string,
  columnOptions?: IExtendedColumnOptions
) {
  MetadataStore.instance.entity.property(
    object.constructor.name,
    propertyName,
    {
      description: columnOptions.description,
      required: !columnOptions.nullable ?? true,
      dataType: mapSQLToEntity(columnOptions.type || "string"),
      length: columnOptions.length,
      isDate: columnOptions.type === "date",
      isDateTime:
        [ "datetime", "timestamp" ].indexOf(columnOptions.type?.toString()) >= 0,
      fieldName: columnOptions.name || propertyName,
    }
  );

  if (columnOptions.primary) {
    MetadataStore.instance.entity.markPrimaryKey(
      object.constructor.name,
      propertyName
    );
  }
}

export function UpdateDateColumn(
  options?: IExtendedColumnOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string): void {
    TypeORMUpdateDateColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

export function DeleteDateColumn(
  options?: IExtendedColumnOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMDeleteDateColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

export function CreateDateColumn(
  options?: IExtendedColumnOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMCreateDateColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

export function PrimaryColumn(
  options?: PrimaryColumnOptions & { description?: string }
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMPrimaryColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
    MetadataStore.instance.entity.markPrimaryKey(
      object.constructor.name,
      propertyName
    );
  };
}

export function PrimaryGeneratedColumn(
  strategy: PrimaryGeneratedColumnNumericOptions | string,
  options: PrimaryGeneratedColumnNumericOptions & { description?: string }
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMPrimaryGeneratedColumn(strategy as unknown as any, options)(
      object,
      propertyName
    );
    DocumentEntity(object, propertyName, options ?? strategy);
    MetadataStore.instance.entity.markPrimaryKey(
      object.constructor.name,
      propertyName
    );
  };
}

export function VersionColumn(
  options?: IExtendedColumnOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMVersionColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

export function ViewColumn(
  options?: ViewColumnOptions & { description?: string }
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMViewColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

export function ObjectIdColumn(
  options?: IExtendedColumnOptions
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMObjectIdColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

export function Column(
  options?: ColumnOptions & ColumnEmbeddedOptions & { description?: string }
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

export function JoinColumn(
  options?: JoinColumnOptions & { description?: string }
): PropertyDecorator {
  return function (object: Constructor, propertyName: string) {
    TypeORMJoinColumn(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}
