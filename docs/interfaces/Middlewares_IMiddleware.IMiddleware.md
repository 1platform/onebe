[Spark OneBE - v1.0.24](../README.md) / [Exports](../modules.md) / [Middlewares/IMiddleware](../modules/Middlewares_IMiddleware.md) / IMiddleware

# Interface: IMiddleware

[Middlewares/IMiddleware](../modules/Middlewares_IMiddleware.md).IMiddleware

The base definition of a middleware class.

## Implemented by

- [`BodyParserMiddleware`](../classes/Middlewares_BodyParserMiddleware.BodyParserMiddleware.md)
- [`CORSMiddleware`](../classes/Middlewares_CORSMiddleware.CORSMiddleware.md)
- [`ErrorHandlerMiddleware`](../classes/Middlewares_ErrorHandlerMiddleware.ErrorHandlerMiddleware.md)
- [`I18nMiddleware`](../classes/Middlewares_I18NMiddleware.I18nMiddleware.md)
- [`LoggerMiddleware`](../classes/Middlewares_LoggerMiddleware.LoggerMiddleware.md)
- [`PageInfoMiddleware`](../classes/Middlewares_PageInfoMiddleware.PageInfoMiddleware.md)
- [`PassportMiddleware`](../classes/Middlewares_PassportMiddleware.PassportMiddleware.md)
- [`SessionMiddleware`](../classes/Middlewares_SessionMiddleware.SessionMiddleware.md)
- [`SparkMiddleware`](../classes/Middlewares_SparkMiddleware.SparkMiddleware.md)

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
