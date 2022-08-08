[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / DB/TypeORM/Decorators/Column

# Module: DB/TypeORM/Decorators/Column

## Table of contents

### Functions

- [Column](DB_TypeORM_Decorators_Column.md#column)
- [CreateDateColumn](DB_TypeORM_Decorators_Column.md#createdatecolumn)
- [DeleteDateColumn](DB_TypeORM_Decorators_Column.md#deletedatecolumn)
- [JoinColumn](DB_TypeORM_Decorators_Column.md#joincolumn)
- [ObjectIdColumn](DB_TypeORM_Decorators_Column.md#objectidcolumn)
- [PrimaryColumn](DB_TypeORM_Decorators_Column.md#primarycolumn)
- [PrimaryGeneratedColumn](DB_TypeORM_Decorators_Column.md#primarygeneratedcolumn)
- [UpdateDateColumn](DB_TypeORM_Decorators_Column.md#updatedatecolumn)
- [VersionColumn](DB_TypeORM_Decorators_Column.md#versioncolumn)
- [ViewColumn](DB_TypeORM_Decorators_Column.md#viewcolumn)

## Functions

### Column

▸ **Column**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ColumnOptions` & `ColumnEmbeddedOptions` & { `description?`: `string`  } |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### CreateDateColumn

▸ **CreateDateColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IExtendedColumnOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### DeleteDateColumn

▸ **DeleteDateColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IExtendedColumnOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### JoinColumn

▸ **JoinColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `JoinColumnOptions` & { `description?`: `string`  } |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### ObjectIdColumn

▸ **ObjectIdColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IExtendedColumnOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### PrimaryColumn

▸ **PrimaryColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ColumnOptions` & { `nullable?`: ``false``  } & { `description?`: `string`  } |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### PrimaryGeneratedColumn

▸ **PrimaryGeneratedColumn**(`strategy`, `options`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `PrimaryGeneratedColumnNumericOptions` |
| `options` | `PrimaryGeneratedColumnNumericOptions` & { `description?`: `string`  } |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### UpdateDateColumn

▸ **UpdateDateColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IExtendedColumnOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### VersionColumn

▸ **VersionColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IExtendedColumnOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### ViewColumn

▸ **ViewColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ViewColumnOptions` & { `description?`: `string`  } |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)
