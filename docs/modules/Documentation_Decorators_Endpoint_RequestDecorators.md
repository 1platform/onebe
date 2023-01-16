[OneBE Framework - v2.4.9](../README.md) / [Exports](../modules.md) / Documentation/Decorators/Endpoint/RequestDecorators

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

Decorator used to describe the body of a request for an endpoint using a
list of body parameters.

If you don't think that you might reuse the request body parameters in
another endpoint, you could use this decorator to describe the items
of the body.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`IEndpointBodyParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md) \| [`IEndpointBodyParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)[] | A list of body parameters that you expect from a user. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Parameter

▸ **Parameter**(`parameter`, `isNumeric?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe a parameter (:parameter) used in the endpoint URL.

When you have parameters in the endpoint URL, documenting the type of
the parameter (if it is a number or a string) and adding a short description
to it will help the developers that will use the exposed REST API endpoint
in their interaction with your application.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `parameter` | `string` | `undefined` | The name of the parameter we want to document. |
| `isNumeric?` | `boolean` | `false` | Should the value be a numeric one or not. |
| `description?` | `string` | `undefined` | A short description of the parameter. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Query

▸ **Query**(`parameter`, `type?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe a query parameter used in the endpoint URL.

When you have query parameters in the endpoint URL, documenting the type of
the parameter and adding a short description to it will help the developers
that will use the exposed REST API endpoint in their interaction with your application.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `parameter` | `string` | `undefined` | The name of the query parameter we want to document. |
| `type?` | [`QueryParameterType`](../enums/Documentation_Definition_DataTypes.QueryParameterType.md) | `QueryParameterType.STRING` | The data type of the query parameter. |
| `description?` | `string` | `undefined` | A short description of the query parameter. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Request

▸ **Request**(`entity`, `isArray?`, `description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to describe the body of a request for an endpoint using a predefined entity.

The easiest way to document the body of a request for an endpoint is by using
a predefined entity, created from models or by using the Entity decorators on
the custom Entities you created in the application.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The name of the entity we want to use as the body of request. |
| `isArray?` | `boolean` | Is the body an array or not. |
| `description?` | `string` | A short description of the body of a request. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)
