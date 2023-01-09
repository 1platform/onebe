[OneBE Framework - v2.4.6](../README.md) / [Exports](../modules.md) / [Services/PaginationDefinition](../modules/Services_PaginationDefinition.md) / PaginatedOptions

# Class: PaginatedOptions<Entity\>

[Services/PaginationDefinition](../modules/Services_PaginationDefinition.md).PaginatedOptions

The base object to be used when requesting a paginated entity.

## Type parameters

| Name |
| :------ |
| `Entity` |

## Hierarchy

- [`BaseEntity`](Documentation_BaseEntity.BaseEntity.md)

  ↳ **`PaginatedOptions`**

## Implements

- [`IPaginatedOptions`](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md)<`Entity`\>

## Table of contents

### Constructors

- [constructor](Services_PaginationDefinition.PaginatedOptions.md#constructor)

### Properties

- [options](Services_PaginationDefinition.PaginatedOptions.md#options)
- [page](Services_PaginationDefinition.PaginatedOptions.md#page)
- [size](Services_PaginationDefinition.PaginatedOptions.md#size)

### Methods

- [clone](Services_PaginationDefinition.PaginatedOptions.md#clone)
- [init](Services_PaginationDefinition.PaginatedOptions.md#init)
- [toJSON](Services_PaginationDefinition.PaginatedOptions.md#tojson)
- [toObject](Services_PaginationDefinition.PaginatedOptions.md#toobject)

## Constructors

### constructor

• **new PaginatedOptions**<`Entity`\>()

Constructor used to create a new Entity and fill it with data.

#### Type parameters

| Name |
| :------ |
| `Entity` |

#### Inherited from

[BaseEntity](Documentation_BaseEntity.BaseEntity.md).[constructor](Documentation_BaseEntity.BaseEntity.md#constructor)

## Properties

### options

• `Optional` **options**: `FindManyOptions`<`Entity`\>

A list of options to be used in the data filtering and displaying.

#### Implementation of

[IPaginatedOptions](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md).[options](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md#options)

___

### page

• `Optional` **page**: `number`

The page we need to fetch.

#### Implementation of

[IPaginatedOptions](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md).[page](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md#page)

___

### size

• `Optional` **size**: `number`

How many records should be returned.

#### Implementation of

[IPaginatedOptions](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md).[size](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md#size)

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

▸ **init**(`options?`): [`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)<`Entity`\>

Method used to init the entity with data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string` \| `number` \| `symbol`, `any`\> | A map of properties with values that can be filled in the current entity. |

#### Returns

[`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)<`Entity`\>

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
