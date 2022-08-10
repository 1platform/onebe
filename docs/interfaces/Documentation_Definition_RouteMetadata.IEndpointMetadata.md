[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointMetadata

# Interface: IEndpointMetadata<Request, Response\>

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointMetadata

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

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
- [statuses](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#statuses)
- [summary](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#summary)
- [throws](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#throws)
- [verb](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#verb)

## Properties

### authenticationMethod

• `Optional` **authenticationMethod**: `string`

___

### body

• `Optional` **body**: [`IEndpointBody`](Documentation_Definition_RouteMetadata.IEndpointBody.md)

___

### bodyParameters

• `Optional` **bodyParameters**: `Record`<`string`, [`IEndpointBodyParameter`](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)\>

___

### callback

• **callback**: [`AppMethod`](../modules/Router_RouteTypes.md#appmethod)<`Request`, `Response`\>

___

### description

• `Optional` **description**: `string`

___

### isAuthenticated

• **isAuthenticated**: `boolean`

___

### methodName

• **methodName**: `string`

___

### middlewares

• **middlewares**: [`HTTPMiddleware`](../modules/HTTP_HTTPTypes.md#httpmiddleware)[]

___

### parameters

• **parameters**: `Record`<`string`, [`IEndpointParameter`](Documentation_Definition_RouteMetadata.IEndpointParameter.md)\>

___

### passRequest

• **passRequest**: `boolean`

___

### path

• **path**: `string`

___

### query

• **query**: `Record`<`string`, [`IEndpointQuery`](Documentation_Definition_RouteMetadata.IEndpointQuery.md)\>

___

### responses

• **responses**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), [`IEndpointResponse`](Documentation_Definition_RouteMetadata.IEndpointResponse.md)<`any`\>\>

___

### statuses

• **statuses**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), `string`\>

___

### summary

• `Optional` **summary**: `string`

___

### throws

• **throws**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), [`IEndpointThrowResponse`](Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\>\>

___

### verb

• **verb**: [`HTTPVerb`](../enums/HTTP_HTTPVerb.HTTPVerb.md)
