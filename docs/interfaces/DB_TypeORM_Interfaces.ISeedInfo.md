[OneBE Framework - v2.4.1](../README.md) / [Exports](../modules.md) / [DB/TypeORM/Interfaces](../modules/DB_TypeORM_Interfaces.md) / ISeedInfo

# Interface: ISeedInfo<T\>

[DB/TypeORM/Interfaces](../modules/DB_TypeORM_Interfaces.md).ISeedInfo

Interface used to describe the information held in a Seed file.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Properties

- [data](DB_TypeORM_Interfaces.ISeedInfo.md#data)
- [dependsOn](DB_TypeORM_Interfaces.ISeedInfo.md#dependson)
- [entity](DB_TypeORM_Interfaces.ISeedInfo.md#entity)
- [fields](DB_TypeORM_Interfaces.ISeedInfo.md#fields)
- [isQuery](DB_TypeORM_Interfaces.ISeedInfo.md#isquery)

## Properties

### data

• **data**: `T`[]

The data to be imported into the database.

___

### dependsOn

• `Optional` **dependsOn**: `string`[]

A list of entities that are needed in order for this entity to be seeded.

___

### entity

• **entity**: `string`

The name of the entity to be seeded.

___

### fields

• `Optional` **fields**: `string`[]

The fields to be used when seeding an entity using query.

___

### isQuery

• `Optional` **isQuery**: `boolean`

Flag to let the seeding engine know that it should generate a query to fill data.
