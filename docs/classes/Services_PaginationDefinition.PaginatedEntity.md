[OneBE Framework - v2.6.12](../README.md) / [Exports](../modules.md) / [Services/PaginationDefinition](../modules/Services_PaginationDefinition.md) / PaginatedEntity

# Class: PaginatedEntity<TEntity\>

[Services/PaginationDefinition](../modules/Services_PaginationDefinition.md).PaginatedEntity

The base response for a Paginated Entity.

## Type parameters

| Name |
| :------ |
| `TEntity` |

## Hierarchy

- [`BaseEntity`](Documentation_BaseEntity.BaseEntity.md)

  ↳ **`PaginatedEntity`**

## Table of contents

### Constructors

- [constructor](Services_PaginationDefinition.PaginatedEntity.md#constructor)

### Properties

- [count](Services_PaginationDefinition.PaginatedEntity.md#count)
- [data](Services_PaginationDefinition.PaginatedEntity.md#data)
- [hasNext](Services_PaginationDefinition.PaginatedEntity.md#hasnext)
- [hasPrevious](Services_PaginationDefinition.PaginatedEntity.md#hasprevious)
- [nextPage](Services_PaginationDefinition.PaginatedEntity.md#nextpage)
- [page](Services_PaginationDefinition.PaginatedEntity.md#page)
- [previousPage](Services_PaginationDefinition.PaginatedEntity.md#previouspage)
- [size](Services_PaginationDefinition.PaginatedEntity.md#size)

### Methods

- [clone](Services_PaginationDefinition.PaginatedEntity.md#clone)
- [init](Services_PaginationDefinition.PaginatedEntity.md#init)
- [toJSON](Services_PaginationDefinition.PaginatedEntity.md#tojson)
- [toObject](Services_PaginationDefinition.PaginatedEntity.md#toobject)

## Constructors

### constructor

• **new PaginatedEntity**<`TEntity`\>()

Constructor used to create a new Entity and fill it with data.

#### Type parameters

| Name |
| :------ |
| `TEntity` |

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[constructor](Documentation_BaseEntity.BaseEntity.md#constructor)

## Properties

### count

• **count**: `number`

How many records are available in the entity table.

___

### data

• **data**: `TEntity`[]

The data fetched from the entity based on the given input parameters.

___

### hasNext

• **hasNext**: `boolean`

Flag to show if there is a next page.

___

### hasPrevious

• **hasPrevious**: `boolean`

Flag to show if there is a previous page.

___

### nextPage

• `Optional` **nextPage**: `string`

URL to the next page.

___

### page

• **page**: `number`

Current page served by the paged entity.

___

### previousPage

• `Optional` **previousPage**: `string`

URL to the previous page.

___

### size

• **size**: `number`

How many records contains the page.

## Methods

### clone

▸ **clone**<`T`\>(`properties?`): `T`

Creates a clone of the current entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`BaseEntity`](Documentation_BaseEntity.BaseEntity.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | `Record`<`string`, `any`\> | A list of properties that you want to pass to the new instance. |

#### Returns

`T`

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[clone](Documentation_BaseEntity.BaseEntity.md#clone)

___

### init

▸ **init**(`options?`): [`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)<`TEntity`\>

Method used to init the entity with data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string` \| `number` \| `symbol`, `any`\> | A map of properties with values that can be filled in the current entity. |

#### Returns

[`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)<`TEntity`\>

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
| `T` | `Record`<`string` \| `number` \| `symbol`, `any`\> |

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
| `T` | `Record`<`string` \| `number` \| `symbol`, `any`\> |

#### Returns

`T`

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[toObject](Documentation_BaseEntity.BaseEntity.md#toobject)
