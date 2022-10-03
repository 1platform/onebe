[OneBE Framework - v2.1.8](../README.md) / [Exports](../modules.md) / DB

# Module: DB

## Table of contents

### Functions

- [DB](DB.md#db)
- [defaultConnection](DB.md#defaultconnection)

## Functions

### DB

▸ **DB**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Function used to initialise the database engine your application is going
to use. There are 2 engine options available for usage:
 - mongoose
 - typeorm (mongodb, mysql, mariadb, postgres)

If you do not specify any database engine or an invalid one, then no database
connection will be made.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### defaultConnection

▸ **defaultConnection**(): `DataSource`

Function used to get the default connection object when using
a TypeORM database connection object.

#### Returns

`DataSource`
