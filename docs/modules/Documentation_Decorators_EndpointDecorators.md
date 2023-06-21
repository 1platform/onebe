[OneBE Framework - v2.6.21](../README.md) / [Exports](../modules.md) / Documentation/Decorators/EndpointDecorators

# Module: Documentation/Decorators/EndpointDecorators

## Table of contents

### References

- [RequestDocs](Documentation_Decorators_EndpointDecorators.md#requestdocs)
- [ResponseDocs](Documentation_Decorators_EndpointDecorators.md#responsedocs)

### Functions

- [AdditionalInformation](Documentation_Decorators_EndpointDecorators.md#additionalinformation)
- [Endpoint](Documentation_Decorators_EndpointDecorators.md#endpoint)
- [EndpointDescription](Documentation_Decorators_EndpointDecorators.md#endpointdescription)
- [EndpointSummary](Documentation_Decorators_EndpointDecorators.md#endpointsummary)

## References

### RequestDocs

Renames and re-exports [Documentation/Decorators/Endpoint/RequestDecorators](Documentation_Decorators_Endpoint_RequestDecorators.md)

___

### ResponseDocs

Renames and re-exports [Documentation/Decorators/Endpoint/ResponseDecorators](Documentation_Decorators_Endpoint_ResponseDecorators.md)

## Functions

### AdditionalInformation

▸ **AdditionalInformation**(`info`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Add additional information to the endpoint.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `string` | The additional information you want to add to the endpoint. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### Endpoint

▸ **Endpoint**(`options`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to fully document an endpoint.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IEndpointDocumentation`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointDocumentation.md) | A list of options that describe the endpoint. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### EndpointDescription

▸ **EndpointDescription**(`description?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to add a description to an endpoint.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description?` | `string` | A short description of the controller. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### EndpointSummary

▸ **EndpointSummary**(`summary?`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator used to add a summary to an endpoint.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `summary?` | `string` | A short description of the controller. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)
