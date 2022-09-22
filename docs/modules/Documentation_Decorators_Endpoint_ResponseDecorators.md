[OneBE Framework - v2.1.0](../README.md) / [Exports](../modules.md) / Documentation/Decorators/Endpoint/ResponseDecorators

# Module: Documentation/Decorators/Endpoint/ResponseDecorators

## Table of contents

### Functions

- [Array](Documentation_Decorators_Endpoint_ResponseDecorators.md#array)
- [ArraySchema](Documentation_Decorators_Endpoint_ResponseDecorators.md#arrayschema)
- [Return](Documentation_Decorators_Endpoint_ResponseDecorators.md#return)
- [Schema](Documentation_Decorators_Endpoint_ResponseDecorators.md#schema)
- [Status](Documentation_Decorators_Endpoint_ResponseDecorators.md#status)
- [Throws](Documentation_Decorators_Endpoint_ResponseDecorators.md#throws)

## Functions

### Array

▸ **Array**(`type`, `statusCode?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe what does an array endpoint response. This decorator
should be used only for primitive return values: `string`, `number`, `boolean`,
`null`, `undefined`.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | The data type of the response value. |
| `statusCode?` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.OK` | The HTTP Status code used for the response. |
| `description?` | `string` | `undefined` | A short description of the returned response. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### ArraySchema

▸ **ArraySchema**(`type`, `statusCode?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe an entity based array response for an endpoint. If you
want to reuse a response, we recommend to use this decorator and define an entity.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | The name of the entity used to describe the response. |
| `statusCode?` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.OK` | The HTTP Status code used for the response. |
| `description?` | `string` | `undefined` | A short description of the returned response. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Return

▸ **Return**(`type`, `statusCode?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe what does an endpoint response. This decorator
should be used only for primitive return values: `string`, `number`, `boolean`,
`null`, `undefined`.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | The data type of the response value. |
| `statusCode?` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.OK` | The HTTP Status code used for the response. |
| `description?` | `string` | `undefined` | A short description of the returned response. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Schema

▸ **Schema**(`type`, `statusCode?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe an entity based response for an endpoint. If you
want to reuse a response, we recommend to use this decorator and define an entity.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | The name of the entity used to describe the response. |
| `statusCode?` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.OK` | The HTTP Status code used for the response. |
| `description?` | `string` | `undefined` | A short description of the returned response. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Status

▸ **Status**(`statusCode`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe the status code that can be returned by the
endpoint.

This decorator only describes the status code without a body attached
to the status.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statusCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | The HTTP Status error code used for the response. |
| `description?` | `string` | A short description of the returned error. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Throws

▸ **Throws**<`Response`\>(`errorCode`, `description?`, `response?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe an error thrown by your endpoint. The
thrown error should always have an HTTP Status code attached to it.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | The HTTP Status error code used for the response. |
| `description?` | `string` | A short description of the returned error. |
| `response?` | [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`Response`\> | A sample message sent to the user with the error. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)
