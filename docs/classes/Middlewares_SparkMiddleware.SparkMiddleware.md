[Spark OneBE - v1.0.12](../README.md) / [Exports](../modules.md) / [Middlewares/SparkMiddleware](../modules/Middlewares_SparkMiddleware.md) / SparkMiddleware

# Class: SparkMiddleware

[Middlewares/SparkMiddleware](../modules/Middlewares_SparkMiddleware.md).SparkMiddleware

The Spark Middleware.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_SparkMiddleware.SparkMiddleware.md#constructor)

### Methods

- [use](Middlewares_SparkMiddleware.SparkMiddleware.md#use)

## Constructors

### constructor

• **new SparkMiddleware**()

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
