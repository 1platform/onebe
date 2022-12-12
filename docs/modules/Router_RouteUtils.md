[OneBE Framework - v2.2.4](../README.md) / [Exports](../modules.md) / Router/RouteUtils

# Module: Router/RouteUtils

## Table of contents

### Functions

- [defineMiddleware](Router_RouteUtils.md#definemiddleware)
- [defineMiddlewareWithInformation](Router_RouteUtils.md#definemiddlewarewithinformation)
- [getPath](Router_RouteUtils.md#getpath)

## Functions

### defineMiddleware

▸ **defineMiddleware**(`...middlewares`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Function used to create a middleware decorator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...middlewares` | [`HTTPMiddleware`](HTTP_HTTPTypes.md#httpmiddleware)[] | A list of middlewares you want to apply on the route. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### defineMiddlewareWithInformation

▸ **defineMiddlewareWithInformation**(`information`, `...middlewares`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Function used to create a middleware decorator with additional documentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `information` | `string` | The additional information to be sent to the documentation engine. |
| `...middlewares` | [`HTTPMiddleware`](HTTP_HTTPTypes.md#httpmiddleware)[] | A list of middlewares you want to apply on the route. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### getPath

▸ **getPath**(`...pathElements`): `string`

Function used to get the full URL based on the given partial URL path elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...pathElements` | `string`[] | The list of path elements to be converted to a valid URL path. |

#### Returns

`string`
