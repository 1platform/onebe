[Spark OneBE - v1.0.8](../README.md) / [Exports](../modules.md) / Router/RouteTypes

# Module: Router/RouteTypes

## Table of contents

### Type aliases

- [AppMethod](Router_RouteTypes.md#appmethod)
- [CallbackExtractorParameter](Router_RouteTypes.md#callbackextractorparameter)
- [Constructor](Router_RouteTypes.md#constructor)
- [ControllerDecorator](Router_RouteTypes.md#controllerdecorator)
- [ControllerDecoratorFunction](Router_RouteTypes.md#controllerdecoratorfunction)
- [EntityDecorator](Router_RouteTypes.md#entitydecorator)
- [HeaderMethod](Router_RouteTypes.md#headermethod)
- [ResponseValue](Router_RouteTypes.md#responsevalue)
- [RouteCallback](Router_RouteTypes.md#routecallback)
- [RouteCallbacks](Router_RouteTypes.md#routecallbacks)
- [RouteDecorator](Router_RouteTypes.md#routedecorator)
- [RouteHooksCallbacks](Router_RouteTypes.md#routehookscallbacks)

## Type aliases

### AppMethod

Ƭ **AppMethod**<`TRequest`, `TResponse`\>: (`context`: [`IContext`](../interfaces/Router_RouteInterfaces.IContext.md)<`TRequest`\>, `authContext?`: [`IAuthContext`](../interfaces/Router_RouteInterfaces.IAuthContext.md)) => [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`TResponse`\>

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
| `context` | [`IContext`](../interfaces/Router_RouteInterfaces.IContext.md)<`TRequest`\> | The request contact of the application. It can contain the request and response object that are used by express. |
| `authContext?` | [`IAuthContext`](../interfaces/Router_RouteInterfaces.IAuthContext.md) | The authentication context, used by the application, that contains the authentication information (user, isAuthenticated etc.) |

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

### Constructor

Ƭ **Constructor**: `Object`

Type used to define a Class with a constructor.

___

### ControllerDecorator

Ƭ **ControllerDecorator**<`T`\>: `T`

Type used to define a Controller Decorator return value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Router_RouteTypes.md#constructor) |

___

### ControllerDecoratorFunction

Ƭ **ControllerDecoratorFunction**<`T`\>: (`Class`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Router_RouteTypes.md#constructor) |

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

### EntityDecorator

Ƭ **EntityDecorator**<`T`\>: (`target`: `T`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Router_RouteTypes.md#constructor) |

#### Type declaration

▸ (`target`, `propertyKey`, `descriptor`): `void`

Type used to define a Entity Decorator function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target on which we apply the decorator. |
| `propertyKey` | `string` | The property on which we apply the decorator. |
| `descriptor` | `PropertyDescriptor` | The property descriptor of the property we want to apply the decorator on. |

##### Returns

`void`

___

### HeaderMethod

Ƭ **HeaderMethod**: (`header`: `string`) => `string` \| `undefined`

#### Type declaration

▸ (`header`): `string` \| `undefined`

Type used to define a method/function used to fetch information from the header.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `header` | `string` | The header element from which we want information. |

##### Returns

`string` \| `undefined`

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

### RouteCallbacks

Ƭ **RouteCallbacks**: [`RouteCallback`](Router_RouteTypes.md#routecallback)[]

Array of Route Callback

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

___

### RouteHooksCallbacks

Ƭ **RouteHooksCallbacks**: (`props`: [`IRouteHookParameter`](../interfaces/Router_RouteInterfaces.IRouteHookParameter.md)) => `void`[]

Array of Route Hook Callbacks.
