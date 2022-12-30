[OneBE Framework - v2.4.4](../README.md) / [Exports](../modules.md) / [Middlewares/I18NMiddleware](../modules/Middlewares_I18NMiddleware.md) / I18nMiddleware

# Class: I18nMiddleware

[Middlewares/I18NMiddleware](../modules/Middlewares_I18NMiddleware.md).I18nMiddleware

Middleware used to enable the Internationalisation (i18n) support for the application endpoints.
Since you might want to have the messages translated to the language chosen by the user
when the request was made, the i18n support needs to be added to the request object.

## Implements

- [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middlewares_I18NMiddleware.I18nMiddleware.md#constructor)

### Methods

- [use](Middlewares_I18NMiddleware.I18nMiddleware.md#use)

## Constructors

### constructor

• **new I18nMiddleware**()

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
