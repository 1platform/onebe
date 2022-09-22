[OneBE Framework - v2.1.2](../README.md) / [Exports](../modules.md) / [Middlewares/PassportMiddleware](../modules/Middlewares_PassportMiddleware.md) / PassportMiddleware

# Class: PassportMiddleware

[Middlewares/PassportMiddleware](../modules/Middlewares_PassportMiddleware.md).PassportMiddleware

Middleware used to initialize the passport engine for the authentication
in the application.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_PassportMiddleware.PassportMiddleware.md#constructor)

### Methods

- [use](Middlewares_PassportMiddleware.PassportMiddleware.md#use)

## Constructors

### constructor

• **new PassportMiddleware**()

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
