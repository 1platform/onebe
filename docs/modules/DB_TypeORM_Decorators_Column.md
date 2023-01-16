[OneBE Framework - v2.4.11](../README.md) / [Exports](../modules.md) / DB/TypeORM/Decorators/Column

# Module: DB/TypeORM/Decorators/Column

## Table of contents

### Functions

- [Column](DB_TypeORM_Decorators_Column.md#column)
- [CreateDateColumn](DB_TypeORM_Decorators_Column.md#createdatecolumn)
- [DeleteDateColumn](DB_TypeORM_Decorators_Column.md#deletedatecolumn)
- [ObjectIdColumn](DB_TypeORM_Decorators_Column.md#objectidcolumn)
- [PrimaryColumn](DB_TypeORM_Decorators_Column.md#primarycolumn)
- [PrimaryGeneratedColumn](DB_TypeORM_Decorators_Column.md#primarygeneratedcolumn)
- [UpdateDateColumn](DB_TypeORM_Decorators_Column.md#updatedatecolumn)
- [VersionColumn](DB_TypeORM_Decorators_Column.md#versioncolumn)
- [ViewColumn](DB_TypeORM_Decorators_Column.md#viewcolumn)

## Functions

### Column

▸ **Column**(`options?`): `PropertyDecorator`

Decorator used to define the column of a model.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ColumnOptions` & `ColumnEmbeddedOptions` & { `description?`: `string`  } | A list of options used for defining the column. |

#### Returns

`PropertyDecorator`

___

### CreateDateColumn

▸ **CreateDateColumn**(`options?`): `PropertyDecorator`

Decorator used to define a column used to store the creation date of a model.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ColumnOptions` & { `description?`: `string`  } | A list of options used for defining the creation date column. |

#### Returns

`PropertyDecorator`

___

### DeleteDateColumn

▸ **DeleteDateColumn**(`options?`): `PropertyDecorator`

Decorator used to define a column used to store the deletion date of a model.
This kind of column is usually used when you want to do soft deletion in your
application.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ColumnOptions` & { `description?`: `string`  } | A list of options used for defining the deletion date column. |

#### Returns

`PropertyDecorator`

___

### ObjectIdColumn

▸ **ObjectIdColumn**(`options?`): `PropertyDecorator`

Decorator used to mark a column of a model as an ObjectId column.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ColumnOptions` & { `description?`: `string`  } | A list of options used for defining the ObjectId column. |

#### Returns

`PropertyDecorator`

___

### PrimaryColumn

▸ **PrimaryColumn**(`options?`): `PropertyDecorator`

Decorator used to define a column used to store the primary key of a model.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ColumnOptions` & {} & { `description?`: `string`  } | A list of options used for defining the primary key column. |

#### Returns

`PropertyDecorator`

___

### PrimaryGeneratedColumn

▸ **PrimaryGeneratedColumn**(`strategy`, `options`): `PropertyDecorator`

Decorator used to define a column used to store a generated primary key of a model.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategy` | ``"uuid"`` \| ``"rowid"`` \| ``"increment"`` \| `PrimaryGeneratedColumnNumericOptions` \| ``"identity"`` | The strategy used for generating the primary key or the list of options used for defining the generated primary key column. |
| `options` | `PrimaryGeneratedColumnNumericOptions` & { `description?`: `string`  } | A list of options used for defining the generated primary key column. |

#### Returns

`PropertyDecorator`

___

### UpdateDateColumn

▸ **UpdateDateColumn**(`options?`): `PropertyDecorator`

Decorator used to define a column used to store the modification date of a model.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ColumnOptions` & { `description?`: `string`  } | A list of options used for defining the modification date column. |

#### Returns

`PropertyDecorator`

___

### VersionColumn

▸ **VersionColumn**(`options?`): `PropertyDecorator`

Decorator used to define a column used to store the version of a model.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ColumnOptions` & { `description?`: `string`  } | A list of options used for defining the version column. |

#### Returns

`PropertyDecorator`

___

### ViewColumn

▸ **ViewColumn**(`options?`): `PropertyDecorator`

Decorator used to mark a column of a model as a view column.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ViewColumnOptions` & { `description?`: `string`  } | A list of options used for defining the view column. |

#### Returns

`PropertyDecorator`
