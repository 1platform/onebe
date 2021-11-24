[Spark OneBE - v0.9.15](../README.md) / [Exports](../modules.md) / Middlewares/ErrorHandlerMiddleware

# Module: Middlewares/ErrorHandlerMiddleware

## Table of contents

### Classes

- [ErrorHandlerMiddleware](../classes/Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md)

### Type aliases

- [ErrorHandlerFunction](Middlewares_ErrorHandlerMiddleware.md#errorhandlerfunction)

## Type aliases

### ErrorHandlerFunction

Ƭ **ErrorHandlerFunction**: (`error`: `any`, `req`: `IncomingMessage`, `res`: `ServerResponse`, `next`: (`error`: `any`) => `void`) => `void`

#### Type declaration

▸ (`error`, `req`, `res`, `next`): `void`

The type of the error handler function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | The error to be shown. |
| `req` | `IncomingMessage` | The request object. |
| `res` | `ServerResponse` | The response object |
| `next` | (`error`: `any`) => `void` | The function with the next callback. |

##### Returns

`void`
