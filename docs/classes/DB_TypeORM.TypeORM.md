[OneBE Framework - v2.3.0](../README.md) / [Exports](../modules.md) / [DB/TypeORM](../modules/DB_TypeORM.md) / TypeORM

# Class: TypeORM

[DB/TypeORM](../modules/DB_TypeORM.md).TypeORM

TypeORM connection handler class.

Using this class you can connect and use any of the following database
engines in your application: MongoDB, MySQL, MariaDB, Postgres. By using
TypeORM you can easily define model classes that use all the features
of TypeScript. Also, when using TypeORM, the entity/model documentation
is done for you.

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

▪ `Static` `Protected` **\_connection**: `DataSource` = `null`

The default database connection object.

___

### \_instance

▪ `Static` `Protected` **\_instance**: [`TypeORM`](DB_TypeORM.TypeORM.md) = `null`

The singleton instance for the TypeORM class.

## Accessors

### connection

• `Static` `get` **connection**(): `DataSource`

Getter for the default database connection object.

#### Returns

`DataSource`

___

### instance

• `Static` `get` **instance**(): [`TypeORM`](DB_TypeORM.TypeORM.md)

Getter for the TypeORM instance object.

#### Returns

[`TypeORM`](DB_TypeORM.TypeORM.md)

## Methods

### connect

▸ **connect**(`configurationName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`DataSource`\>

Method used to create a new database connection that can be used
by your application.

If needed, at any moment, you can create a new database connection
to any other database that you might need.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configurationName` | `string` | The name of the configuration object used to perform the connection. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`DataSource`\>

___

### init

▸ **init**(`configuration?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Database initialisation method.

Through this method, the framework connects your application to a database
server and stores that connection for later use.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
