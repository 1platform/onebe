[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Documentation/Decorators/Endpoint/ResponseDecorators

# Module: Documentation/Decorators/Endpoint/ResponseDecorators

## Table of contents

### Functions

- [Response](Documentation_Decorators_Endpoint_ResponseDecorators.md#response)
- [ResponseArray](Documentation_Decorators_Endpoint_ResponseDecorators.md#responsearray)
- [Status](Documentation_Decorators_Endpoint_ResponseDecorators.md#status)
- [Throws](Documentation_Decorators_Endpoint_ResponseDecorators.md#throws)

## Functions

### Response

▸ **Response**(`type`, `statusCode?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator to add a response to a method.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | The type of the response |
| `statusCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.OK` | The status code of the response |
| `description?` | `string` | `undefined` | The description of the response |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### ResponseArray

▸ **ResponseArray**(`type`, `statusCode?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` | `undefined` |
| `statusCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.OK` |
| `description?` | `string` | `undefined` |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Status

▸ **Status**(`errorCode`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) |
| `description?` | `string` |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Throws

▸ **Throws**<`Response`\>(`errorCode`, `description?`, `response?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) |
| `description?` | `string` |
| `response?` | [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`Response`\> |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)
