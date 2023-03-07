[OneBE Framework - v2.6.15](../README.md) / [Exports](../modules.md) / [Middlewares/PageInfoMiddleware](../modules/Middlewares_PageInfoMiddleware.md) / PageInfoMiddleware

# Class: PageInfoMiddleware

[Middlewares/PageInfoMiddleware](../modules/Middlewares_PageInfoMiddleware.md).PageInfoMiddleware

Middleware that adds additional information to the request object. Through this
middleware you get access to the full App URL string and to the specific path your user
tried to access.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_PageInfoMiddleware.PageInfoMiddleware.md#constructor)

### Methods

- [use](Middlewares_PageInfoMiddleware.PageInfoMiddleware.md#use)

## Constructors

### constructor

• **new PageInfoMiddleware**()

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
