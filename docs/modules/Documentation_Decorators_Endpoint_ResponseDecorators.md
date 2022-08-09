[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Documentation/Decorators/Endpoint/ResponseDecorators

# Module: Documentation/Decorators/Endpoint/ResponseDecorators

## Table of contents

### Functions

- [Throws](Documentation_Decorators_Endpoint_ResponseDecorators.md#throws)

## Functions

### Throws

▸ **Throws**<`Response`\>(`errorCode`, `description`, `response?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) |
| `description` | `string` |
| `response?` | [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`Response`\> |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)
