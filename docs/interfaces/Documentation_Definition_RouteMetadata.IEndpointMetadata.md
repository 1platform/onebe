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
- [callback](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#callback)
- [isAuthenticated](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#isauthenticated)
- [methodName](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#methodname)
- [middlewares](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#middlewares)
- [passRequest](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#passrequest)
- [path](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#path)
- [throws](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#throws)
- [verb](Documentation_Definition_RouteMetadata.IEndpointMetadata.md#verb)

## Properties

### authenticationMethod

• `Optional` **authenticationMethod**: `string`

___

### callback

• **callback**: [`AppMethod`](../modules/Router_RouteTypes.md#appmethod)<`Request`, `Response`\>

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

### passRequest

• **passRequest**: `boolean`

___

### path

• **path**: `string`

___

### throws

• **throws**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), [`IEndpointThrowResponse`](Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\>\>

___

### verb

• **verb**: [`HTTPVerb`](../enums/HTTP_HTTPVerb.HTTPVerb.md)
