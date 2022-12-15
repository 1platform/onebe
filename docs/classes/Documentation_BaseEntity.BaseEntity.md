[OneBE Framework - v2.2.5](../README.md) / [Exports](../modules.md) / [Documentation/BaseEntity](../modules/Documentation_BaseEntity.md) / BaseEntity

# Class: BaseEntity

[Documentation/BaseEntity](../modules/Documentation_BaseEntity.md).BaseEntity

The base class for entities defined in your application.

Use this class as a base when defining an entity that can be reused
in your application. This class allows you to easily fill an entity
with data very fast and get the contents as an object.

## Hierarchy

- **`BaseEntity`**

  ↳ [`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)

  ↳ [`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)

## Table of contents

### Constructors

- [constructor](Documentation_BaseEntity.BaseEntity.md#constructor)

### Methods

- [init](Documentation_BaseEntity.BaseEntity.md#init)
- [toJSON](Documentation_BaseEntity.BaseEntity.md#tojson)
- [toObject](Documentation_BaseEntity.BaseEntity.md#toobject)

## Constructors

### constructor

• **new BaseEntity**(`options?`)

Constructor used to create a new Entity and fill it with data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `unknown`\> | A map of properties with values that can be filled in the current entity. |

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
