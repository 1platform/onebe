[OneBE Framework - v2.4.1](../README.md) / [Exports](../modules.md) / DB/TypeORM/DatabaseSeeder

# Module: DB/TypeORM/DatabaseSeeder

## Table of contents

### Functions

- [DatabaseSeeder](DB_TypeORM_DatabaseSeeder.md#databaseseeder)

## Functions

### DatabaseSeeder

▸ **DatabaseSeeder**<`Entity`\>(`entity`, `data`, `clearData?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`IDBSeederResults`](../interfaces/DB_TypeORM_Interfaces.IDBSeederResults.md)\>

Function used to seed the Database for a given entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `entity` | `EntityTarget`<`Entity`\> | `undefined` | The entity to be seeded. |
| `data` | `_QueryDeepPartialEntity`<`ObjectLiteral` extends `Entity` ? `unknown` : `Entity`\> \| `_QueryDeepPartialEntity`<`ObjectLiteral` extends `Entity` ? `unknown` : `Entity`\>[] | `undefined` | The data to be seeded. |
| `clearData` | `boolean` | `false` | Flag used to enable/disable database clearing. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`IDBSeederResults`](../interfaces/DB_TypeORM_Interfaces.IDBSeederResults.md)\>
