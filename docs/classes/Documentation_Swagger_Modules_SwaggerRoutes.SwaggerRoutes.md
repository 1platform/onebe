[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/Modules/SwaggerRoutes](../modules/Documentation_Swagger_Modules_SwaggerRoutes.md) / SwaggerRoutes

# Class: SwaggerRoutes

[Documentation/Swagger/Modules/SwaggerRoutes](../modules/Documentation_Swagger_Modules_SwaggerRoutes.md).SwaggerRoutes

## Table of contents

### Constructors

- [constructor](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#constructor)

### Methods

- [getErrors](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#geterrors)
- [getParameters](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getparameters)
- [getPath](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getpath)
- [getQueryParameters](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getqueryparameters)
- [getRequestBody](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getrequestbody)
- [getRequestBodyDefinition](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getrequestbodydefinition)
- [getResponseSchemas](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getresponseschemas)
- [getResponses](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getresponses)
- [getRoutes](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getroutes)
- [getStatusDescription](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getstatusdescription)
- [getStatusesSchemas](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#getstatusesschemas)
- [groupPaths](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#grouppaths)
- [parsePath](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md#parsepath)

## Constructors

### constructor

• **new SwaggerRoutes**()

## Methods

### getErrors

▸ `Protected` **getErrors**(`errors`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | [`IEndpointThrowResponse`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\>[] |

#### Returns

`Record`<`string`, `any`\>

___

### getParameters

▸ `Protected` **getParameters**(`parameters`): `Record`<`string`, `unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEndpointParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointParameter.md)[] |

#### Returns

`Record`<`string`, `unknown`\>[]

___

### getPath

▸ `Protected` **getPath**(`basePath`, `path`, `parameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string`[] |
| `path` | `string` |
| `parameters` | `string`[] |

#### Returns

`string`

___

### getQueryParameters

▸ `Protected` **getQueryParameters**(`queryParameters`): `Record`<`string`, `unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`IEndpointQuery`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointQuery.md)[] |

#### Returns

`Record`<`string`, `unknown`\>[]

___

### getRequestBody

▸ `Protected` **getRequestBody**(`bodyDefinition`): `Record`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyDefinition` | [`IEndpointBody`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBody.md) |

#### Returns

`Record`<`string`, `unknown`\>

___

### getRequestBodyDefinition

▸ `Protected` **getRequestBodyDefinition**(`bodyDefinition`): `Record`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyDefinition` | [`IEndpointBodyParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)[] |

#### Returns

`Record`<`string`, `unknown`\>

___

### getResponseSchemas

▸ `Protected` **getResponseSchemas**(`responses`): `Record`<`string`, `Record`<`string`, `unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `responses` | [`IEndpointResponse`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointResponse.md)<`any`\>[] |

#### Returns

`Record`<`string`, `Record`<`string`, `unknown`\>\>

___

### getResponses

▸ `Protected` **getResponses**(`endpoint`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\> |

#### Returns

`Record`<`string`, `any`\>

___

### getRoutes

▸ **getRoutes**(`routesMetadata`): `Record`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `routesMetadata` | [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[] |

#### Returns

`Record`<`string`, `unknown`\>

___

### getStatusDescription

▸ `Protected` **getStatusDescription**(`status`, `defaultValue?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `string` |
| `defaultValue?` | `string` |

#### Returns

`string`

___

### getStatusesSchemas

▸ `Protected` **getStatusesSchemas**(`statuses`): `Record`<`string`, `Record`<`string`, `unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `statuses` | [`string`, `string`][] |

#### Returns

`Record`<`string`, `Record`<`string`, `unknown`\>\>

___

### groupPaths

▸ `Protected` **groupPaths**(`route`): `Record`<`string`, `Record`<`string`, `Record`<`string`, `unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `route` | [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md) |

#### Returns

`Record`<`string`, `Record`<`string`, `Record`<`string`, `unknown`\>\>\>

___

### parsePath

▸ `Protected` **parsePath**(`endpoint`, `controller`, `tags`): `Record`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\> |
| `controller` | `string` |
| `tags` | `string`[] |

#### Returns

`Record`<`string`, `unknown`\>
