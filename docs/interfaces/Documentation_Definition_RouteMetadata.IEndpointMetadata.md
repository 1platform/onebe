[OneBE Framework - v2.2.3](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointMetadata

# Interface: IEndpointMetadata<Request, Response\>

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointMetadata

Interface describing an object used to hold the metadata information
about an endpoint from a route (controller).

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [additionalInfo](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#additionalinfo)
- [authenticationMethod](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#authenticationmethod)
- [body](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#body)
- [bodyParameters](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#bodyparameters)
- [callback](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#callback)
- [description](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#description)
- [isAuthenticated](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#isauthenticated)
- [methodName](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#methodname)
- [middlewares](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#middlewares)
- [parameters](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#parameters)
- [passRequest](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#passrequest)
- [path](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#path)
- [query](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#query)
- [responses](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#responses)
- [signed](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#signed)
- [statuses](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#statuses)
- [summary](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#summary)
- [throws](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#throws)
- [upload](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#upload)
- [verb](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#verb)

## Properties

### additionalInfo

• `Optional` **additionalInfo**: `string`[]

Additional information that should be added to the description of the endpoint.

___

### authenticationMethod

• `Optional` **authenticationMethod**: `string`

The authentication method used on this endpoint.

___

### body

• `Optional` **body**: [`IEndpointBody`](Documentation_Definition_RouteMetadata.IEndpointBody.md)

The entity used to describe the properties available in the body of the request.
When this is filled, the `bodyParameters` property will be deleted and the other way around.

___

### bodyParameters

• `Optional` **bodyParameters**: `Record`<`string`, [`IEndpointBodyParameter`](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)\>

A list of Body Parameters that can be passed to the endpoint. When this is
filled, the `body` property will be deleted and the other way around.

___

### callback

• **callback**: [`AppMethod`](../modules/Router_RouteTypes.md#appmethod)<`Request`, `Response`\>

The code that will run when accessing the endpoint.

___

### description

• `Optional` **description**: `string`

A description of what the endpoint does.

___

### isAuthenticated

• **isAuthenticated**: `boolean`

Flag to mark the request as authenticated. Used together with the `authenticationMethod`
property, the framework knows what to generate in the final documentation for you
to easily access the endpoint.

___

### methodName

• **methodName**: `string`

The name of the method that is called when accessing the endpoint.

___

### middlewares

• **middlewares**: [`HTTPMiddleware`](../modules/HTTP_HTTPTypes.md#httpmiddleware)[]

A list of middlewares that will run before the code of the endpoint.

___

### parameters

• **parameters**: `Record`<`string`, [`IEndpointParameter`](Documentation_Definition_RouteMetadata.IEndpointParameter.md)\>

A list of URL Parameters that can be passed to the endpoint.

___

### passRequest

• **passRequest**: `boolean`

Flag to mark if the request and response objects are needed in the ContextAPI object.

___

### path

• **path**: `string`

The path used to access the endpoint.

___

### query

• **query**: `Record`<`string`, [`IEndpointQuery`](Documentation_Definition_RouteMetadata.IEndpointQuery.md)\>

A list of Query Parameters that can be passed to the endpoint.

___

### responses

• **responses**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), [`IEndpointResponse`](Documentation_Definition_RouteMetadata.IEndpointResponse.md)<`any`\>\>

A list of Responses returned by the endpoint.

___

### signed

• `Optional` **signed**: `boolean`

Flag used to describe the endpoint as protected by a Signed URL.

___

### statuses

• **statuses**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), `string`\>

A list of HTTP Statuses returned by the endpoint.

___

### summary

• `Optional` **summary**: `string`

A short description of what the endpoint does.

___

### throws

• **throws**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), [`IEndpointThrowResponse`](Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\>\>

A list of error thrown by the endpoint.

___

### upload

• `Optional` **upload**: `string`

If filled, lists the support for upload and how many files can be uploaded through the endpoint.

___

### verb

• **verb**: [`HTTPVerb`](../enums/HTTP_HTTPVerb.HTTPVerb.md)

The HTTP Verb/Method used to access the endpoint.
