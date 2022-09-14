[OneBE Framework - v2.0.2](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/Modules/SwaggerRoutes](../modules/Documentation_Swagger_Modules_SwaggerRoutes.md) / SwaggerRoutes

# Class: SwaggerRoutes

[Documentation/Swagger/Modules/SwaggerRoutes](../modules/Documentation_Swagger_Modules_SwaggerRoutes.md).SwaggerRoutes

Swagger Routes Builder tool.

Using this class the Documentation system will create everything needed
by the OpenAPI 3 paths specification.

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

Method used to generate the OpenAPI 3 responses object for an endpoint based
on a list with Error Response metadata objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errors` | [`IEndpointThrowResponse`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\>[] | The list of errors that can be returned by the endpoint. |

#### Returns

`Record`<`string`, `any`\>

___

### getParameters

▸ `Protected` **getParameters**(`parameters`): `Record`<`string`, `unknown`\>[]

Method used to generate the OpenAPI 3 parameters object for an endpoint based
on an Endpoint Parameter metadata object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`IEndpointParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointParameter.md)[] | The list of URL parameters supported by the endpoint. |

#### Returns

`Record`<`string`, `unknown`\>[]

___

### getPath

▸ `Protected` **getPath**(`basePath`, `path`, `parameters`): `string`

Method used to generate the full path of the endpoint, from the route
base path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath` | `string`[] | The base path from the route. |
| `path` | `string` | The path of the endpoint. |
| `parameters` | `string`[] | The list of parameters that appear in the endpoint URL. |

#### Returns

`string`

___

### getQueryParameters

▸ `Protected` **getQueryParameters**(`queryParameters`): `Record`<`string`, `unknown`\>[]

Method used to generate the OpenAPI 3 parameters object for an endpoint based
on an Endpoint Query Parameter metadata object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryParameters` | [`IEndpointQuery`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointQuery.md)[] | The list of Query parameters supported by the endpoint. |

#### Returns

`Record`<`string`, `unknown`\>[]

___

### getRequestBody

▸ `Protected` **getRequestBody**(`bodyDefinition`): `Record`<`string`, `unknown`\>

Method used to generate the OpenAPI 3 request body object for an endpoint based
on a Predefined Entity exposed by the Entity Metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bodyDefinition` | [`IEndpointBody`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBody.md) | The body definition metadata information. |

#### Returns

`Record`<`string`, `unknown`\>

___

### getRequestBodyDefinition

▸ `Protected` **getRequestBodyDefinition**(`bodyDefinition`): `Record`<`string`, `unknown`\>

Method used to generate the OpenAPI 3 request body object for an endpoint based
on a list with Body Parameters Metadata objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bodyDefinition` | [`IEndpointBodyParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)[] | The list with body parameters. |

#### Returns

`Record`<`string`, `unknown`\>

___

### getResponseSchemas

▸ `Protected` **getResponseSchemas**(`responses`): `Record`<`string`, `Record`<`string`, `unknown`\>\>

Method used to generate the OpenAPI 3 responses object for an endpoint based
on an Endpoint Response metadata object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `responses` | [`IEndpointResponse`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointResponse.md)<`any`\>[] | The list of responses that can be returned by the endpoint. |

#### Returns

`Record`<`string`, `Record`<`string`, `unknown`\>\>

___

### getResponses

▸ `Protected` **getResponses**(`endpoint`): `Record`<`string`, `any`\>

Method used to generate the OpenAPI 3 responses object for an endpoint based
on its metadata information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\> | The endpoint metadata. |

#### Returns

`Record`<`string`, `any`\>

___

### getRoutes

▸ **getRoutes**(`routesMetadata`): `Record`<`string`, `unknown`\>

Method that extracts the routes from the route definition metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `routesMetadata` | [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[] | The list of documented routes from the metadata store. |

#### Returns

`Record`<`string`, `unknown`\>

___

### getStatusDescription

▸ `Protected` **getStatusDescription**(`status`, `defaultValue?`): `string`

Method used to convert the HTTP status to a string value that can be used
as a status description.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | `string` | The status we want to convert. |
| `defaultValue?` | `string` | A default value to be returned when the status isn't in the supported list. |

#### Returns

`string`

___

### getStatusesSchemas

▸ `Protected` **getStatusesSchemas**(`statuses`): `Record`<`string`, `Record`<`string`, `unknown`\>\>

Method used to generate the OpenAPI 3 responses object for an endpoint based
on a list with statuses and descriptions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statuses` | [`string`, `string`][] | The list of statuses that can be returned by the endpoint. |

#### Returns

`Record`<`string`, `Record`<`string`, `unknown`\>\>

___

### groupPaths

▸ `Protected` **groupPaths**(`route`): `Record`<`string`, `Record`<`string`, `Record`<`string`, `unknown`\>\>\>

Group the endpoint calls based on the Endpoint URL and the HTTP verb used
to access the code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md) | The route metadata for which we create the groups. |

#### Returns

`Record`<`string`, `Record`<`string`, `Record`<`string`, `unknown`\>\>\>

___

### parsePath

▸ `Protected` **parsePath**(`endpoint`, `controller`, `tags`): `Record`<`string`, `unknown`\>

Method used to parse the endpoint metadata information and generate
the OpenAPI 3 path specification object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\> | The endpoint metadata. |
| `controller` | `string` | The route where the endpoint is located. |
| `tags` | `string`[] | A list of tags that are used to group the endpoint. |

#### Returns

`Record`<`string`, `unknown`\>
