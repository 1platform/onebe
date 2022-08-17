[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Router](../modules/Router.md) / RouterBase

# Class: RouterBase

[Router](../modules/Router.md).RouterBase

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

▸ **add**(`controller`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Register a controller

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | [`Route`](Router_Route.Route.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### loadEndpoint

▸ `Protected` **loadEndpoint**(`basePath`, `endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |
| `endpoint` | [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\> |

#### Returns

`void`

___

### parseRoute

▸ **parseRoute**(`route`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `route` | [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md) |

#### Returns

`void`

___

### register

▸ **register**(`controllersPath`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Register the controllers in the given path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controllersPath` | `string` | The path from which we will import controllers. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
