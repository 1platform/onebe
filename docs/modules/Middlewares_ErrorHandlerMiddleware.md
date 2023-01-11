[OneBE Framework - v2.4.7](../README.md) / [Exports](../modules.md) / Middlewares/ErrorHandlerMiddleware

# Module: Middlewares/ErrorHandlerMiddleware

## Table of contents

### Classes

- [ErrorHandlerMiddleware](../classes/Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md)

### Type Aliases

- [ErrorHandlerFunction](Middlewares_ErrorHandlerMiddleware.md#errorhandlerfunction)

## Type Aliases

### ErrorHandlerFunction

Ƭ **ErrorHandlerFunction**: (`error`: `any`, `request`: `IncomingMessage`, `response`: `ServerResponse`, `next`: (`error`: `any`) => `void`) => `void`

#### Type declaration

▸ (`error`, `request`, `response`, `next`): `void`

Type declaration for a function that can be used as an error handler.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | The error to be returned. |
| `request` | `IncomingMessage` | The request object. |
| `response` | `ServerResponse` | The response object |
| `next` | (`error`: `any`) => `void` | Callback for the next function to be called. |

##### Returns

`void`
