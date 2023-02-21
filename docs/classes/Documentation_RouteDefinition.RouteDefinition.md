[OneBE Framework - v2.6.5](../README.md) / [Exports](../modules.md) / [Documentation/RouteDefinition](../modules/Documentation_RouteDefinition.md) / RouteDefinition

# Class: RouteDefinition

[Documentation/RouteDefinition](../modules/Documentation_RouteDefinition.md).RouteDefinition

Route Definition Metadata store.

In this class the framework store information about all the routes exposed
by your application, like: the base path, the name of the route, the
endpoints that are exposed by the route etc.

## Table of contents

### Constructors

- [constructor](Documentation_RouteDefinition.RouteDefinition.md#constructor)

### Accessors

- [list](Documentation_RouteDefinition.RouteDefinition.md#list)

### Methods

- [add](Documentation_RouteDefinition.RouteDefinition.md#add)
- [additionalInformation](Documentation_RouteDefinition.RouteDefinition.md#additionalinformation)
- [callbackExtractor](Documentation_RouteDefinition.RouteDefinition.md#callbackextractor)
- [endpoint](Documentation_RouteDefinition.RouteDefinition.md#endpoint)
- [endpointAuth](Documentation_RouteDefinition.RouteDefinition.md#endpointauth)
- [endpointBody](Documentation_RouteDefinition.RouteDefinition.md#endpointbody)
- [endpointBodyParameters](Documentation_RouteDefinition.RouteDefinition.md#endpointbodyparameters)
- [endpointDescription](Documentation_RouteDefinition.RouteDefinition.md#endpointdescription)
- [endpointDocumentation](Documentation_RouteDefinition.RouteDefinition.md#endpointdocumentation)
- [endpointParameter](Documentation_RouteDefinition.RouteDefinition.md#endpointparameter)
- [endpointQuery](Documentation_RouteDefinition.RouteDefinition.md#endpointquery)
- [endpointResponse](Documentation_RouteDefinition.RouteDefinition.md#endpointresponse)
- [endpointStatus](Documentation_RouteDefinition.RouteDefinition.md#endpointstatus)
- [endpointSummary](Documentation_RouteDefinition.RouteDefinition.md#endpointsummary)
- [endpointThrows](Documentation_RouteDefinition.RouteDefinition.md#endpointthrows)
- [getEndpoint](Documentation_RouteDefinition.RouteDefinition.md#getendpoint)
- [group](Documentation_RouteDefinition.RouteDefinition.md#group)
- [isDocs](Documentation_RouteDefinition.RouteDefinition.md#isdocs)
- [isSigned](Documentation_RouteDefinition.RouteDefinition.md#issigned)
- [isUpload](Documentation_RouteDefinition.RouteDefinition.md#isupload)
- [markAsAPI](Documentation_RouteDefinition.RouteDefinition.md#markasapi)
- [markAsCustom](Documentation_RouteDefinition.RouteDefinition.md#markascustom)
- [markAsDocs](Documentation_RouteDefinition.RouteDefinition.md#markasdocs)
- [route](Documentation_RouteDefinition.RouteDefinition.md#route)
- [routeParameter](Documentation_RouteDefinition.RouteDefinition.md#routeparameter)
- [setDescription](Documentation_RouteDefinition.RouteDefinition.md#setdescription)
- [setName](Documentation_RouteDefinition.RouteDefinition.md#setname)
- [update](Documentation_RouteDefinition.RouteDefinition.md#update)

## Constructors

### constructor

• **new RouteDefinition**()

## Accessors

### list

• `get` **list**(): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[]

Getter for the list of routes available in the application.

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[]

## Methods

### add

▸ **add**(`controller`, `basePath?`, `description?`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

Method used to add a new Route into the Route Metadata store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to add. |
| `basePath?` | `string` | The basePath of the controller. |
| `description?` | `string` | A short description of the controller. |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### additionalInformation

▸ **additionalInformation**(`controller`, `methodName`, `information`): `void`

Method used to add additional information to the description.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `information` | `string` | Additional information to be added to the description. |

#### Returns

`void`

___

### callbackExtractor

▸ `Protected` **callbackExtractor**<`Request`, `Response`\>(`fn`): [`ICallbackExtracted`](../interfaces/Router_RouteInterfaces.ICallbackExtracted.md)<`Request`, `Response`\>

Method used to extract the Route callback from the middlewares list of an endpoint.

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

Method used to create (or update) an endpoint of a route.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `options` | [`IEndpointOptions`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointOptions.md) | Options used to define an endpoint. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointAuth

▸ **endpointAuth**(`controller`, `methodName`, `authenticationMethod`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set the authentication method to an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `authenticationMethod` | `string` | The authentication method used on the endpoint. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointBody

▸ **endpointBody**(`controller`, `methodName`, `options`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set details about the request body of an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `options` | [`IEndpointBody`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBody.md) | Information about the used entity as the body request of the endpoint. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointBodyParameters

▸ **endpointBodyParameters**(`controller`, `methodName`, `parameters`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set details about the request body of an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `parameters` | [`IEndpointBodyParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)[] | A list with parameters found in the request body. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointDescription

▸ **endpointDescription**<`Request`, `Response`\>(`controller`, `methodName`, `description?`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set a description to an endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `description?` | `string` | Detailed information about what the endpoint does. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointDocumentation

▸ **endpointDocumentation**(`controller`, `methodName`, `options`): `void`

Method used to set all the documentation details of the endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update.sn |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `options` | [`IEndpointDocumentation`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointDocumentation.md) | A list of options used for documenting the endpoint directly, without using multiple decorators. |

#### Returns

`void`

___

### endpointParameter

▸ **endpointParameter**(`controller`, `methodName`, `options`): `void`

Method used to set information about a URL parameter of an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `options` | [`IEndpointParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointParameter.md) | Information about the parameter received by the endpoint. |

#### Returns

`void`

___

### endpointQuery

▸ **endpointQuery**(`controller`, `methodName`, `options`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set information about a Query parameter of an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `options` | [`IEndpointQuery`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointQuery.md) | Information about the parameter received by the endpoint. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointResponse

▸ **endpointResponse**(`controller`, `methodName`, `options`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set information about a response of an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `options` | [`IEndpointResponse`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointResponse.md)<`any`\> | Information about the response object returned by the endpoint. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointStatus

▸ **endpointStatus**(`controller`, `methodName`, `statusCode`, `description?`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set information about a status of an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `statusCode` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | The status code returned by the endpoint. |
| `description?` | `string` | A short description of the returned status code. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointSummary

▸ **endpointSummary**<`Request`, `Response`\>(`controller`, `methodName`, `summary?`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set a summary to an endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `summary?` | `string` | A short description of the endpoint |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### endpointThrows

▸ **endpointThrows**(`controller`, `methodName`, `options`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

Method used to set information about an error thrown by an endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `options` | [`IEndpointThrowResponse`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\> | A list with options related to the error thrown. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>

___

### getEndpoint

▸ `Protected` **getEndpoint**<`Request`, `Response`\>(`controller`, `methodName`, `options?`): [`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`Request`, `Response`\>

Method used to get metadata information about an endpoint. Using this method the
documentation system will check if the endpoint exists in the route. If it doesn't exist,
the endpoint is created with the given default values.

#### Type parameters

| Name |
| :------ |
| `Request` |
| `Response` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |
| `options?` | [`IEndpointOptions`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointOptions.md) | A list of endpoint metadata information used as the base for creation when it doesn't exist. |

#### Returns

[`IEndpointMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`Request`, `Response`\>

___

### group

▸ **group**(`controller`, `groupName`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

Defines the group the route is a member of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `groupName` | `string` | A list of groups the route is member of. |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### isDocs

▸ **isDocs**(`controller`): `boolean`

Checks if a route is a Documentation one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |

#### Returns

`boolean`

___

### isSigned

▸ **isSigned**(`controller`, `methodName`): `void`

Method used to mark an endpoint as protected by a Signed URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `methodName` | `string` | The name of the method on which we want to add information. |

#### Returns

`void`

___

### isUpload

▸ **isUpload**(`controller`, `methodName`, `isMultiFile?`): `void`

Method used to mark an endpoint as one that accepts files for upload.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `controller` | `string` | `undefined` | The controller we want to update. |
| `methodName` | `string` | `undefined` | The name of the method on which we want to add information. |
| `isMultiFile?` | `boolean` | `false` | The endpoint supports single or multiple file upload. |

#### Returns

`void`

___

### markAsAPI

▸ **markAsAPI**(`controller`, `basePath`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

Method used to mark a route as an API route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `basePath` | `string` | The base path we want to prepend to the controller base path. |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### markAsCustom

▸ **markAsCustom**(`controller`, `basePath`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

Method used to mark a route as a Custom route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `basePath` | `string` | The base path we want to prepend to the controller base path. |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### markAsDocs

▸ **markAsDocs**(`controller`): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

Method used to mark a route as a Documentation route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### route

▸ **route**(`controller`): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

Method used to get (and create if it doesn't exist yet) a route from
the metadata store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

___

### routeParameter

▸ **routeParameter**(`controller`, `options`): `void`

Method used to set information about a URL parameter of a route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `options` | [`IEndpointParameter`](../interfaces/Documentation_Definition_RouteMetadata.IEndpointParameter.md) | Information about the parameter received by the endpoint. |

#### Returns

`void`

___

### setDescription

▸ **setDescription**(`controller`, `description?`): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

Method used to set the description of a route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `description?` | `string` | A short description of the controller. |

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

___

### setName

▸ **setName**(`controller`, `name`): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

Method used to set the name of a route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `name` | `string` | The name of the route. |

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

___

### update

▸ **update**(`controller`, `basePath?`, `description?`): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)

Method used to update Route information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | The controller we want to update. |
| `basePath?` | `string` | The basePath of the controller. |
| `description?` | `string` | A short description of the controller. |

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)
