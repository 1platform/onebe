[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Services/PaginationDefinition](../modules/Services_PaginationDefinition.md) / PaginatedOptions

# Class: PaginatedOptions<TEntity\>

[Services/PaginationDefinition](../modules/Services_PaginationDefinition.md).PaginatedOptions

The base object to be used when requesting a paginated entity.

## Type parameters

| Name |
| :------ |
| `TEntity` |

## Hierarchy

- [`BaseEntity`](Documentation_BaseEntity.BaseEntity.md)

  ↳ **`PaginatedOptions`**

## Table of contents

### Constructors

- [constructor](Services_PaginationDefinition.PaginatedOptions.md#constructor)

### Properties

- [options](Services_PaginationDefinition.PaginatedOptions.md#options)
- [page](Services_PaginationDefinition.PaginatedOptions.md#page)
- [size](Services_PaginationDefinition.PaginatedOptions.md#size)

### Methods

- [init](Services_PaginationDefinition.PaginatedOptions.md#init)
- [toJSON](Services_PaginationDefinition.PaginatedOptions.md#tojson)
- [toObject](Services_PaginationDefinition.PaginatedOptions.md#toobject)

## Constructors

### constructor

• **new PaginatedOptions**<`TEntity`\>(`options?`)

Constructor used to create a new Entity and fill it with data.

#### Type parameters

| Name |
| :------ |
| `TEntity` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `unknown`\> | A map of properties with values that can be filled in the current entity. |

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[constructor](Documentation_BaseEntity.BaseEntity.md#constructor)

## Properties

### options

• `Optional` **options**: `FindManyOptions`<`TEntity`\>

A list of options to be used in the data filtering and displaying.

___

### page

• `Optional` **page**: `number`

The page we need to fetch.

___

### size

• `Optional` **size**: `number`

How many records should be returned.

## Methods

### init

▸ **init**(`options?`): `void`

Method used to init the entity with data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `unknown`\> | A map of properties with values that can be filled in the current entity. |

#### Returns

`void`

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[init](Documentation_BaseEntity.BaseEntity.md#init)

___

### toJSON

▸ **toJSON**<`T`\>(): `T`

Return the data from the entity as an object.

Use this method when you want to extract the data from the entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `unknown`\> |

#### Returns

`T`

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[toJSON](Documentation_BaseEntity.BaseEntity.md#tojson)

___

### toObject

▸ **toObject**<`T`\>(): `T`

Return the data from the entity as an object.

Use this method when you want to extract the data from the entity.
This is an alias for the `toJSON` method.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `unknown`\> |

#### Returns

`T`

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[toObject](Documentation_BaseEntity.BaseEntity.md#toobject)
