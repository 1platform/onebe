[Spark OneBE - v2.0.0](../README.md) / [Exports](../modules.md) / Commands/Utils/initConnection

# Module: Commands/Utils/initConnection

## Table of contents

### Functions

- [initConnection](Commands_Utils_initConnection.md#initconnection)

## Functions

### initConnection

▸ **initConnection**(`configuration?`, `logging?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`DataSource` \| ``null``\>

Database connection initialization utility to be used in the
CLI commands.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuration?` | `string` | The name of the configuration object to be used. |
| `logging?` | `boolean` \| [`LoggingOptions`](DB_TypeORM.md#loggingoptions)[] | Database logging configuration. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`DataSource` \| ``null``\>
