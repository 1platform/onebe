[OneBE Framework - v2.4.3](../README.md) / [Exports](../modules.md) / [Router/Router](../modules/Router_Router.md) / Router

# Class: Router

[Router/Router](../modules/Router_Router.md).Router

Class used to define the Router base of the application.

Inside this class the magic happens:
- All the endpoints are registered under their specific path.
- All routes are loaded where and when they should.

## Table of contents

### Constructors

- [constructor](Router_Router.Router.md#constructor)

### Properties

- [\_extraMiddlewares](Router_Router.Router.md#_extramiddlewares)
- [\_router](Router_Router.Router.md#_router)
- [\_routes](Router_Router.Router.md#_routes)

### Accessors

- [router](Router_Router.Router.md#router)

### Methods

- [add](Router_Router.Router.md#add)
- [loadEndpoint](Router_Router.Router.md#loadendpoint)
- [parseRoute](Router_Router.Router.md#parseroute)
- [preRunMiddleware](Router_Router.Router.md#prerunmiddleware)
- [register](Router_Router.Router.md#register)

## Constructors

### constructor

• **new Router**()

## Properties

### \_extraMiddlewares

• `Protected` **\_extraMiddlewares**: [`HTTPMiddleware`](../modules/HTTP_HTTPTypes.md#httpmiddleware)[] = `[]`

___

### \_router

• `Protected` **\_router**: `Router`

The base router that we are going to use.

___

### \_routes

• `Protected` **\_routes**: [`Route`](Router_Route.Route.md)[] = `[]`

The list with routes we want to register.

## Accessors

### router

• `get` **router**(): `Router`

The getter for the base router we will use.

#### Returns

`Router`

## Methods

### add

▸ **add**(`route`): `void`

Method used to manually register a route in the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [`Route`](Router_Route.Route.md) | The route instance you want registered. |

#### Returns

`void`

___

### loadEndpoint

▸ `Protected` **loadEndpoint**(`basePath`, `endpoint`): `void`

Method used to register endpoints in the router under a given base path and with the
given endpoint metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath` | `string` | The base path under which the application registers the endpoint. |
| `endpoint` | [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\> | The endpoint metadata you need to be registered. |

#### Returns

`void`

___

### parseRoute

▸ **parseRoute**(`route`): `void`

Method used to parse the given route metadata and register all the endpoints under that
router.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md) | The route metadata we want to load. |

#### Returns

`void`

___

### preRunMiddleware

▸ **preRunMiddleware**(`...middlewares`): `void`

Add extra middlewares to be run before the actual code of each endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...middlewares` | [`HTTPMiddleware`](../modules/HTTP_HTTPTypes.md#httpmiddleware)[] | A list with middlewares to be ran. |

#### Returns

`void`

___

### register

▸ **register**(`routesPath`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Register the routes under the given path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `routesPath` | `string` | The path from which we will import routes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
