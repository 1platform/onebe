[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/RouteDefinition](../modules/Documentation_RouteDefinition.md) / RouteDefinition

# Class: RouteDefinition

[Documentation/RouteDefinition](../modules/Documentation_RouteDefinition.md).RouteDefinition

## Table of contents

### Constructors

- [constructor](Documentation_RouteDefinition.RouteDefinition.md#constructor)

### Accessors

- [list](Documentation_RouteDefinition.RouteDefinition.md#list)

### Methods

- [add](Documentation_RouteDefinition.RouteDefinition.md#add)
- [callbackExtractor](Documentation_RouteDefinition.RouteDefinition.md#callbackextractor)
- [endpoint](Documentation_RouteDefinition.RouteDefinition.md#endpoint)
- [endpointAuth](Documentation_RouteDefinition.RouteDefinition.md#endpointauth)
- [endpointThrows](Documentation_RouteDefinition.RouteDefinition.md#endpointthrows)
- [getEndpoint](Documentation_RouteDefinition.RouteDefinition.md#getendpoint)
- [group](Documentation_RouteDefinition.RouteDefinition.md#group)
- [markAsAPI](Documentation_RouteDefinition.RouteDefinition.md#markasapi)
- [markAsCustom](Documentation_RouteDefinition.RouteDefinition.md#markascustom)
- [route](Documentation_RouteDefinition.RouteDefinition.md#route)
- [setName](Documentation_RouteDefinition.RouteDefinition.md#setname)
- [update](Documentation_RouteDefinition.RouteDefinition.md#update)

## Constructors

### constructor

• **new RouteDefinition**()

## Accessors

### list

• `get` **list**(): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[]

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[]

## Methods

### add

▸ **add**(`controller`, `basePath?`, `description?`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `basePath?` | `string` |
| `description?` | `string` |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### callbackExtractor

▸ `Protected` **callbackExtractor**<`Request`, `Response`\>(`fn`): [`ICallbackExtracted`](../interfaces/Router_RouteInterfaces.ICallbackExtracted.md)<`Request`, `Response`\>

Function used to extract the Route callback from the middlewares list.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`CallbackExtractorParameter`](../modules/Router_RouteTypes.md#callbackextractorparameter)<`Request`, `Response`\> | The middlewares lists. |

#### Returns

[`ICallbackExtracted`](../interfaces/Router_RouteInterfaces.ICallbackExtracted.md)<`Request`, `Response`\>

___

### endpoint

▸ **endpoint**<`Request`, `Response`\>(`controller`, `options`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `options` | [`IEndpointOptions`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointOptions.md) |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointAuth

▸ **endpointAuth**(`controller`, `methodName`, `method`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `methodName` | `string` |
| `method` | `string` |

#### Returns

`void`

___

### endpointThrows

▸ **endpointThrows**(`controller`, `methodName`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `any` |
| `methodName` | `any` |
| `options` | [`IEndpointThrowResponse`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\> |

#### Returns

`void`

___

### getEndpoint

▸ `Protected` **getEndpoint**<`Request`, `Response`\>(`controller`, `methodName`, `options?`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`Request`, `Response`\>

#### Type parameters

| Name |
| :------ |
| `Request` |
| `Response` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `any` |
| `methodName` | `any` |
| `options?` | [`IEndpointOptions`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointOptions.md) |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`Request`, `Response`\>

___

### group

▸ **group**(`controller`, `groupName`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `groupName` | `string` |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### markAsAPI

▸ **markAsAPI**(`controller`, `basePath`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `basePath` | `string` |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### markAsCustom

▸ **markAsCustom**(`controller`, `basePath`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `basePath` | `string` |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### route

▸ **route**(`controller`): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

___

### setName

▸ **setName**(`controller`, `name`): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `name` | `string` |

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

___

### update

▸ **update**(`controller`, `basePath?`, `description?`): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `string` |
| `basePath?` | `string` |
| `description?` | `string` |

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)
