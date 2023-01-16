[OneBE Framework - v2.4.10](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointThrowResponse

# Interface: IEndpointThrowResponse<Response\>

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointThrowResponse

Interface describing an object that holds metadata information
about an error thrown by an endpoint.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `any` |

## Table of contents

### Properties

- [description](Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md#description)
- [response](Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md#response)
- [statusCode](Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md#statuscode)

## Properties

### description

• `Optional` **description**: `string`

A description of what the status represents.

___

### response

• `Optional` **response**: [`ResponseValue`](../modules/Router_RouteTypes.md#responsevalue)<`Response`\>

The text of the error message returned to the user.

___

### statusCode

• **statusCode**: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md)

The HTTP Status code used for the response.
