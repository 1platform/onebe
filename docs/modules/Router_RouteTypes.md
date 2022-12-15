[OneBE Framework - v2.2.5](../README.md) / [Exports](../modules.md) / Router/RouteTypes

# Module: Router/RouteTypes

## Table of contents

### Type Aliases

- [AppMethod](Router_RouteTypes.md#appmethod)
- [CallbackExtractorParameter](Router_RouteTypes.md#callbackextractorparameter)
- [ControllerDecorator](Router_RouteTypes.md#controllerdecorator)
- [ControllerDecoratorFunction](Router_RouteTypes.md#controllerdecoratorfunction)
- [ResponseValue](Router_RouteTypes.md#responsevalue)
- [RouteCallback](Router_RouteTypes.md#routecallback)
- [RouteDecorator](Router_RouteTypes.md#routedecorator)

## Type Aliases

### AppMethod

Ƭ **AppMethod**<`TRequest`, `TResponse`\>: (`context`: [`ContextAPI`](../classes/Router_ContextAPI.ContextAPI.md)<`TRequest`\>, `authContext?`: [`AuthContextAPI`](../classes/Router_AuthContextAPI.AuthContextAPI.md)) => [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`TResponse`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | `any` |
| `TResponse` | `any` |

#### Type declaration

▸ (`context`, `authContext?`): [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`TResponse`\>

Type used to define the method/function used to define an endpoint.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`ContextAPI`](../classes/Router_ContextAPI.ContextAPI.md)<`TRequest`\> | The request contact of the application. It can contain the request and response object that are used by express. |
| `authContext?` | [`AuthContextAPI`](../classes/Router_AuthContextAPI.AuthContextAPI.md) | The authentication context, used by the application, that contains the authentication information (user, isAuthenticated etc.) |

##### Returns

[`ResponseValue`](Router_RouteTypes.md#responsevalue)<`TResponse`\>

___

### CallbackExtractorParameter

Ƭ **CallbackExtractorParameter**<`Request`, `Response`\>: ([`HTTPMiddleware`](HTTP_HTTPTypes.md#httpmiddleware) \| [`AppMethod`](Router_RouteTypes.md#appmethod)<`Request`, `Response`\>)[] \| [`HTTPMiddleware`](HTTP_HTTPTypes.md#httpmiddleware) \| [`AppMethod`](Router_RouteTypes.md#appmethod)<`Request`, `Response`\>

Type used to define the callback extractor parameter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

___

### ControllerDecorator

Ƭ **ControllerDecorator**<`T`\>: `T`

Type used to define a Controller Decorator return value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor) |

___

### ControllerDecoratorFunction

Ƭ **ControllerDecoratorFunction**<`T`\>: (`Class`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Type declaration

▸ (`Class`): `T`

Type used to define a Controller Decorator function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Class` | `T` | The target on which we apply the decorator. |

##### Returns

`T`

___

### ResponseValue

Ƭ **ResponseValue**<`TResponse`\>: `string` \| `number` \| `boolean` \| `any`[] \| `Record`<`string`, `unknown`\> \| [`IResponse`](../interfaces/Router_RouteInterfaces.IResponse.md)<`TResponse`\> \| [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md)

Type used to define the response returned by an endpoint to the user.

#### Type parameters

| Name |
| :------ |
| `TResponse` |

___

### RouteCallback

Ƭ **RouteCallback**: (`basePath`: `string`, `groupName`: `string`) => `void`

#### Type declaration

▸ (`basePath`, `groupName`): `void`

A function used to define a route callback.

##### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |
| `groupName` | `string` |

##### Returns

`void`

___

### RouteDecorator

Ƭ **RouteDecorator**<`T`\>: (`target`: `T`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Route`](../classes/Router_Route.Route.md) |

#### Type declaration

▸ (`target`, `propertyKey`, `descriptor`): `void`

Type used to define a Route Decorator function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target on which we apply the decorator. |
| `propertyKey` | `string` | The property on which we apply the decorator. |
| `descriptor` | `PropertyDescriptor` | The property descriptor of the property we want to apply the decorator on. |

##### Returns

`void`
