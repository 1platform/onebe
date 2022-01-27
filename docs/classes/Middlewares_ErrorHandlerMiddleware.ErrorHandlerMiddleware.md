[Spark OneBE - v1.0.16](../README.md) / [Exports](../modules.md) / [Middlewares/ErrorHandlerMiddleware](../modules/Middlewares_ErrorHandlerMiddleware.md) / ErrorHandlerMiddleware

# Class: ErrorHandlerMiddleware

[Middlewares/ErrorHandlerMiddleware](../modules/Middlewares_ErrorHandlerMiddleware.md).ErrorHandlerMiddleware

The Error Handler Middleware.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md#constructor)

### Properties

- [\_beforeHandler](Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md#_beforehandler)

### Methods

- [use](Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md#use)
- [addBeforeHandler](Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md#addbeforehandler)

## Constructors

### constructor

• **new ErrorHandlerMiddleware**()

## Properties

### \_beforeHandler

▪ `Static` `Protected` **\_beforeHandler**: [`ErrorHandlerFunction`](../modules/Middlewares_ErrorHandlerMiddleware.md#errorhandlerfunction)[] = `[]`

A list of handlers to be ran before the Error Handler Middleware

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

___

### addBeforeHandler

▸ `Static` **addBeforeHandler**(`handler`): `void`

Add a handler to the before error handler array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ErrorHandlerFunction`](../modules/Middlewares_ErrorHandlerMiddleware.md#errorhandlerfunction) |

#### Returns

`void`
