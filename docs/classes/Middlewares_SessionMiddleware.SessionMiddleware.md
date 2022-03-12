[Spark OneBE - v1.0.27](../README.md) / [Exports](../modules.md) / [Middlewares/SessionMiddleware](../modules/Middlewares_SessionMiddleware.md) / SessionMiddleware

# Class: SessionMiddleware

[Middlewares/SessionMiddleware](../modules/Middlewares_SessionMiddleware.md).SessionMiddleware

Session middleware.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_SessionMiddleware.SessionMiddleware.md#constructor)

### Accessors

- [store](Middlewares_SessionMiddleware.SessionMiddleware.md#store)

### Methods

- [use](Middlewares_SessionMiddleware.SessionMiddleware.md#use)

## Constructors

### constructor

• **new SessionMiddleware**()

## Accessors

### store

• `Static` `set` **store**(`newStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newStore` | `Store` |

#### Returns

`void`

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
