[Spark OneBE - v1.0.29](../README.md) / [Exports](../modules.md) / [DB/TypeORM](../modules/DB_TypeORM.md) / TypeORM

# Class: TypeORM

[DB/TypeORM](../modules/DB_TypeORM.md).TypeORM

TypeORM database handler class.

## Table of contents

### Constructors

- [constructor](DB_TypeORM.TypeORM.md#constructor)

### Properties

- [\_connection](DB_TypeORM.TypeORM.md#_connection)
- [\_instance](DB_TypeORM.TypeORM.md#_instance)

### Accessors

- [connection](DB_TypeORM.TypeORM.md#connection)
- [instance](DB_TypeORM.TypeORM.md#instance)

### Methods

- [connect](DB_TypeORM.TypeORM.md#connect)
- [init](DB_TypeORM.TypeORM.md#init)

## Constructors

### constructor

• **new TypeORM**()

## Properties

### \_connection

▪ `Static` `Protected` **\_connection**: `Connection` = `null`

___

### \_instance

▪ `Static` `Protected` **\_instance**: [`TypeORM`](DB_TypeORM.TypeORM.md) = `null`

## Accessors

### connection

• `Static` `get` **connection**(): `Connection`

Default connection handler.

#### Returns

`Connection`

___

### instance

• `Static` `get` **instance**(): [`TypeORM`](DB_TypeORM.TypeORM.md)

TypeORM instance getter.

#### Returns

[`TypeORM`](DB_TypeORM.TypeORM.md)

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

Calls the Database initialization method.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
