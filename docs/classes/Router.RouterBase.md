[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Router](../modules/Router.md) / RouterBase

# Class: RouterBase

[Router](../modules/Router.md).RouterBase

Class used to define the Router base of the application.

Inside this class the magic happens:
- All the endpoints are registered under their specific path.
- All controllers are loaded where and when they should.

## Table of contents

### Constructors

- [constructor](Router.RouterBase.md#constructor)

### Properties

- [\_controllers](Router.RouterBase.md#_controllers)
- [\_router](Router.RouterBase.md#_router)

### Accessors

- [router](Router.RouterBase.md#router)

### Methods

- [add](Router.RouterBase.md#add)
- [loadEndpoint](Router.RouterBase.md#loadendpoint)
- [parseRoute](Router.RouterBase.md#parseroute)
- [register](Router.RouterBase.md#register)

## Constructors

### constructor

• **new RouterBase**()

## Properties

### \_controllers

• `Protected` **\_controllers**: [`Route`](Router_Route.Route.md)[] = `[]`

The list with controllers we want to register.

___

### \_router

• `Protected` **\_router**: `Router`

The base router that we are going to use.

## Accessors

### router

• `get` **router**(): `Router`

The getter for the base router we will use.

#### Returns

`Router`

## Methods

### add

▸ **add**(`controller`): `void`

Method used to manually register a controller in the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | [`Route`](Router_Route.Route.md) | The controller instance you want registered. |

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

### register

▸ **register**(`controllersPath`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Register the controllers under the given path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controllersPath` | `string` | The path from which we will import controllers. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
