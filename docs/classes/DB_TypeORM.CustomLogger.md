[OneBE Framework - v2.6.6](../README.md) / [Exports](../modules.md) / [DB/TypeORM](../modules/DB_TypeORM.md) / CustomLogger

# Class: CustomLogger

[DB/TypeORM](../modules/DB_TypeORM.md).CustomLogger

Custom Logger that can be used for logging database events.

## Implements

- `Logger`

## Table of contents

### Constructors

- [constructor](DB_TypeORM.CustomLogger.md#constructor)

### Methods

- [log](DB_TypeORM.CustomLogger.md#log)
- [logMigration](DB_TypeORM.CustomLogger.md#logmigration)
- [logQuery](DB_TypeORM.CustomLogger.md#logquery)
- [logQueryError](DB_TypeORM.CustomLogger.md#logqueryerror)
- [logQuerySlow](DB_TypeORM.CustomLogger.md#logqueryslow)
- [logSchemaBuild](DB_TypeORM.CustomLogger.md#logschemabuild)
- [stringifyParams](DB_TypeORM.CustomLogger.md#stringifyparams)

## Constructors

### constructor

• **new CustomLogger**(`loggingOptions?`)

CustomLogger constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loggingOptions?` | `boolean` \| [`LoggingOptions`](../modules/DB_TypeORM.md#loggingoptions)[] | The logging options. |

## Methods

### log

▸ **log**(`level`, `message`, `queryRunner?`): `any`

Method used by TypeORM to log various events happening in the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | ``"info"`` \| ``"log"`` \| ``"warn"`` | The logging level. |
| `message` | `any` | The message to be logged. |
| `queryRunner?` | `QueryRunner` | The query runner used to perform the database event. |

#### Returns

`any`

#### Implementation of

Logger.log

___

### logMigration

▸ **logMigration**(`message`, `queryRunner?`): `any`

Logs migration messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to be logged. |
| `queryRunner?` | `QueryRunner` | The query runner used to perform the database event. |

#### Returns

`any`

#### Implementation of

Logger.logMigration

___

### logQuery

▸ **logQuery**(`query`, `parameters?`, `queryRunner?`): `any`

Logs a query execution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query that is running. |
| `parameters?` | `any`[] | A list with query parameters. |
| `queryRunner?` | `QueryRunner` | The query runner used to perform the database event. |

#### Returns

`any`

#### Implementation of

Logger.logQuery

___

### logQueryError

▸ **logQueryError**(`error`, `query`, `parameters?`, `queryRunner?`): `any`

Logs an error message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` \| [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ) | The error to be logged. |
| `query` | `string` | The query that is running. |
| `parameters?` | `any`[] | A list with query parameters. |
| `queryRunner?` | `QueryRunner` | The query runner used to perform the database event. |

#### Returns

`any`

#### Implementation of

Logger.logQueryError

___

### logQuerySlow

▸ **logQuerySlow**(`time`, `query`, `parameters?`, `queryRunner?`): `any`

Logs an error regarding a slow running query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | How long was the query running for. |
| `query` | `string` | The query that is running. |
| `parameters?` | `any`[] | A list with query parameters. |
| `queryRunner?` | `QueryRunner` | The query runner used to perform the database event. |

#### Returns

`any`

#### Implementation of

Logger.logQuerySlow

___

### logSchemaBuild

▸ **logSchemaBuild**(`message`, `queryRunner?`): `any`

Logs schema builder messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to be logged. |
| `queryRunner?` | `QueryRunner` | The query runner used to perform the database event. |

#### Returns

`any`

#### Implementation of

Logger.logSchemaBuild

___

### stringifyParams

▸ `Protected` **stringifyParams**(`parameters`): `string`

Stringify the parameters sent to the query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `any` | A list with parameters. |

#### Returns

`string`
