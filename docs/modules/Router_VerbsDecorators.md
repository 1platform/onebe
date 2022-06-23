[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Router/VerbsDecorators

# Module: Router/VerbsDecorators

## Table of contents

### Functions

- [DELETE](Router_VerbsDecorators.md#delete)
- [GET](Router_VerbsDecorators.md#get)
- [PATCH](Router_VerbsDecorators.md#patch)
- [POST](Router_VerbsDecorators.md#post)
- [PUT](Router_VerbsDecorators.md#put)
- [del](Router_VerbsDecorators.md#del)
- [get](Router_VerbsDecorators.md#get-1)
- [patch](Router_VerbsDecorators.md#patch-1)
- [post](Router_VerbsDecorators.md#post-1)
- [put](Router_VerbsDecorators.md#put-1)

## Functions

### DELETE

▸ **DELETE**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a DELETE endpoint. This is an alias for the `delete` decorator.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### GET

▸ **GET**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a GET endpoint. This is an alias for the `get` decorator.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### PATCH

▸ **PATCH**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a PATCH endpoint. This is an alias for the `patch` decorator.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### POST

▸ **POST**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a POST endpoint. This is an alias for the `post` decorator.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### PUT

▸ **PUT**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a PUT endpoint. This is an alias for the `put` decorator.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### del

▸ **del**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a DELETE endpoint.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### get

▸ **get**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a GET endpoint.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### patch

▸ **patch**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a PATCH endpoint.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### post

▸ **post**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a POST endpoint.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### put

▸ **put**<`Request`, `Response`\>(`path`, `passRequest?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to define a PUT endpoint.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | The path on which we will register the routes of this controller. |
| `passRequest` | `boolean` | `false` | Should we pass the request and response objects to the route method. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)
