[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Documentation/Decorators/Endpoint/RequestDecorators

# Module: Documentation/Decorators/Endpoint/RequestDecorators

## Table of contents

### Functions

- [Body](Documentation_Decorators_Endpoint_RequestDecorators.md#body)
- [Parameter](Documentation_Decorators_Endpoint_RequestDecorators.md#parameter)
- [Query](Documentation_Decorators_Endpoint_RequestDecorators.md#query)
- [Request](Documentation_Decorators_Endpoint_RequestDecorators.md#request)

## Functions

### Body

▸ **Body**(`parameters`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEndpointBodyParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md) \| [`IEndpointBodyParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)[] |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Parameter

▸ **Parameter**(`parameter`, `isNumeric?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parameter` | `string` | `undefined` |
| `isNumeric` | `boolean` | `false` |
| `description?` | `string` | `undefined` |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Query

▸ **Query**(`parameter`, `type?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parameter` | `string` | `undefined` |
| `type` | [`QueryParameterType`](../enums/Documentation_Definition_DataTypes.QueryParameterType.md) | `QueryParameterType.STRING` |
| `description?` | `string` | `undefined` |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Request

▸ **Request**(`entity`, `isArray?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `isArray?` | `boolean` |
| `description?` | `string` |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)
