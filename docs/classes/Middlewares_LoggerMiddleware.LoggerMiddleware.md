[OneBE Framework - v2.6.21](../README.md) / [Exports](../modules.md) / [Middlewares/LoggerMiddleware](../modules/Middlewares_LoggerMiddleware.md) / LoggerMiddleware

# Class: LoggerMiddleware

[Middlewares/LoggerMiddleware](../modules/Middlewares_LoggerMiddleware.md).LoggerMiddleware

Middleware used to add logging support to the Express application.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_LoggerMiddleware.LoggerMiddleware.md#constructor)

### Methods

- [use](Middlewares_LoggerMiddleware.LoggerMiddleware.md#use)

## Constructors

### constructor

• **new LoggerMiddleware**()

## Methods

### use

▸ **use**(`app`): `void`

The middleware initialization method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Application` | The express application on which we apply the middleware. |

#### Returns

`void`

#### Implementation of

[IMiddleware](../interfaces/Middlewares_IMiddleware.IMiddleware.md).[use](../interfaces/Middlewares_IMiddleware.IMiddleware.md#use)
