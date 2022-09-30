[OneBE Framework - v2.1.6](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / ICallbackExtracted

# Interface: ICallbackExtracted<Request, Response\>

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).ICallbackExtracted

The return object contents of the callback extractor function.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [callback](Router_RouteInterfaces.ICallbackExtracted.md#callback)
- [middlewares](Router_RouteInterfaces.ICallbackExtracted.md#middlewares)

## Properties

### callback

• **callback**: [`AppMethod`](../modules/Router_RouteTypes.md#appmethod)<`Request`, `Response`\>

The route endpoint callback.

___

### middlewares

• `Optional` **middlewares**: [`HTTPMiddleware`](../modules/HTTP_HTTPTypes.md#httpmiddleware)[]

A list of middlewares applied to the route endpoint.
