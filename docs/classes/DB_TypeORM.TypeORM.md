[Spark OneBE - v1.0.10](../README.md) / [Exports](../modules.md) / [DB/TypeORM](../modules/DB_TypeORM.md) / TypeORM

# Class: TypeORM

[DB/TypeORM](../modules/DB_TypeORM.md).TypeORM

Class representing a TypeORM handler

## Table of contents

### Constructors

- [constructor](DB_TypeORM.TypeORM.md#constructor)

### Properties

- [\_connection](DB_TypeORM.TypeORM.md#_connection)

### Accessors

- [connection](DB_TypeORM.TypeORM.md#connection)

### Methods

- [connect](DB_TypeORM.TypeORM.md#connect)
- [init](DB_TypeORM.TypeORM.md#init)

## Constructors

### constructor

• **new TypeORM**()

## Properties

### \_connection

▪ `Static` `Protected` **\_connection**: `Connection` = `null`

## Accessors

### connection

• `Static` `get` **connection**(): `Connection`

#### Returns

`Connection`

## Methods

### connect

▸ **connect**(`configurationName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Connection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurationName` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Connection`\>

___

### init

▸ **init**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Calls the respective init method

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
