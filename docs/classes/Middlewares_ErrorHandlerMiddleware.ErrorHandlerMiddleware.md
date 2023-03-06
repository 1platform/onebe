[OneBE Framework - v2.6.11](../README.md) / [Exports](../modules.md) / [Middlewares/ErrorHandlerMiddleware](../modules/Middlewares_ErrorHandlerMiddleware.md) / ErrorHandlerMiddleware

# Class: ErrorHandlerMiddleware

[Middlewares/ErrorHandlerMiddleware](../modules/Middlewares_ErrorHandlerMiddleware.md).ErrorHandlerMiddleware

Middleware used to catch all the errors returned by the application and send
a consolidated object

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

A list of error handler functions to be run before the final Error Handler Middleware.

## Methods

### use

▸ **use**(`app`): `void`

Method used to attach the error handler to the Express instance.

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

Add an error handler function to be run before the final Error Handler Middleware.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ErrorHandlerFunction`](../modules/Middlewares_ErrorHandlerMiddleware.md#errorhandlerfunction) |

#### Returns

`void`
