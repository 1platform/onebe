[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Router/RouteUtils

# Module: Router/RouteUtils

## Table of contents

### Functions

- [defineMiddleware](Router_RouteUtils.md#definemiddleware)
- [getPath](Router_RouteUtils.md#getpath)

## Functions

### defineMiddleware

▸ **defineMiddleware**(...`middlewares`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Function used to define a middleware decorator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...middlewares` | [`HTTPMiddleware`](HTTP_HTTPTypes.md#httpmiddleware)[] | A list of middlewares you want to apply on the route. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### getPath

▸ **getPath**(...`pathElements`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...pathElements` | `string`[] |

#### Returns

`string`
