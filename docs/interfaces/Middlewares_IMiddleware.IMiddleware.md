[OneBE Framework - v2.4.14](../README.md) / [Exports](../modules.md) / [Middlewares/IMiddleware](../modules/Middlewares_IMiddleware.md) / IMiddleware

# Interface: IMiddleware

[Middlewares/IMiddleware](../modules/Middlewares_IMiddleware.md).IMiddleware

An interface used to describe how a Middleware class should look like. When you
want to create a middleware or add support for an existing functionality into the
application, use this interface as the base and look into how the other middlewares
are loaded.

## Implemented by

- [`BodyParserMiddleware`](../classes/Middlewares_BodyParserMiddleware.BodyParserMiddleware.md)
- [`CORSMiddleware`](../classes/Middlewares_CORSMiddleware.CORSMiddleware.md)
- [`ErrorHandlerMiddleware`](../classes/Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md)
- [`I18nMiddleware`](../classes/Middlewares_I18NMiddleware.I18nMiddleware.md)
- [`LoggerMiddleware`](../classes/Middlewares_LoggerMiddleware.LoggerMiddleware.md)
- [`OneBEMiddleware`](../classes/Middlewares_OneBEMiddleware.OneBEMiddleware.md)
- [`PageInfoMiddleware`](../classes/Middlewares_PageInfoMiddleware.PageInfoMiddleware.md)
- [`PassportMiddleware`](../classes/Middlewares_PassportMiddleware.PassportMiddleware.md)
- [`SessionMiddleware`](../classes/Middlewares_SessionMiddleware.SessionMiddleware.md)

## Table of contents

### Methods

- [use](Middlewares_IMiddleware.IMiddleware.md#use)

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
