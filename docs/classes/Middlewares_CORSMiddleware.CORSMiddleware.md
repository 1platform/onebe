[Spark OneBE - v1.0.29](../README.md) / [Exports](../modules.md) / [Middlewares/CORSMiddleware](../modules/Middlewares_CORSMiddleware.md) / CORSMiddleware

# Class: CORSMiddleware

[Middlewares/CORSMiddleware](../modules/Middlewares_CORSMiddleware.md).CORSMiddleware

The CORS middleware.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_CORSMiddleware.CORSMiddleware.md#constructor)

### Methods

- [use](Middlewares_CORSMiddleware.CORSMiddleware.md#use)

## Constructors

### constructor

• **new CORSMiddleware**()

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
