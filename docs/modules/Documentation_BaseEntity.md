[OneBE Framework - v2.6.13](../README.md) / [Exports](../modules.md) / Documentation/BaseEntity

# Module: Documentation/BaseEntity

## Table of contents

### Classes

- [BaseEntity](../classes/Documentation_BaseEntity.BaseEntity.md)

### Functions

- [createEntity](Documentation_BaseEntity.md#createentity)

## Functions

### createEntity

▸ **createEntity**<`Entity`\>(`EntityClass`, `options?`): `Entity`

Function used to create a new entity with data.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`BaseEntity`](../classes/Documentation_BaseEntity.BaseEntity.md)<`Entity`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EntityClass` | [`Constructor`](Documentation_MetadataTypes.md#constructor)<`Entity`\> | The Entity we want to initialize. |
| `options?` | `Record`<`string` \| `number` \| `symbol`, `any`\> | A map of properties with values that can be filled in the current entity. |

#### Returns

`Entity`
