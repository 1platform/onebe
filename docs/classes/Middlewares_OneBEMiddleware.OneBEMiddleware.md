[Spark OneBE - v2.0.0](../README.md) / [Exports](../modules.md) / [Middlewares/OneBEMiddleware](../modules/Middlewares_OneBEMiddleware.md) / OneBEMiddleware

# Class: OneBEMiddleware

[Middlewares/OneBEMiddleware](../modules/Middlewares_OneBEMiddleware.md).OneBEMiddleware

Middleware used to add information about the framework.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_OneBEMiddleware.OneBEMiddleware.md#constructor)

### Methods

- [use](Middlewares_OneBEMiddleware.OneBEMiddleware.md#use)

## Constructors

### constructor

• **new OneBEMiddleware**()

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
