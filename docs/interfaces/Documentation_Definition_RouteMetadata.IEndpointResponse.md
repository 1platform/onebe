[OneBE Framework - v2.6.12](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointResponse

# Interface: IEndpointResponse<Response\>

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointResponse

Interface describing an object that holds metadata information
about an error thrown by an endpoint.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `any` |

## Table of contents

### Properties

- [contentType](Documentation_Definition_RouteMetadata.IEndpointResponse.md#contenttype)
- [description](Documentation_Definition_RouteMetadata.IEndpointResponse.md#description)
- [isArray](Documentation_Definition_RouteMetadata.IEndpointResponse.md#isarray)
- [isBinary](Documentation_Definition_RouteMetadata.IEndpointResponse.md#isbinary)
- [isSchema](Documentation_Definition_RouteMetadata.IEndpointResponse.md#isschema)
- [schema](Documentation_Definition_RouteMetadata.IEndpointResponse.md#schema)
- [statusCode](Documentation_Definition_RouteMetadata.IEndpointResponse.md#statuscode)

## Properties

### contentType

• `Optional` **contentType**: `string`

The content type of the response.

___

### description

• `Optional` **description**: `string`

A description of what the response represents.

___

### isArray

• `Optional` **isArray**: `boolean`

Flag used to mark the endpoint response as an array response.

___

### isBinary

• `Optional` **isBinary**: `boolean`

Flag used to mark the endpoint response as a binary response.

___

### isSchema

• `Optional` **isSchema**: `boolean`

Flag used to mark the endpoint response as an object schema.

___

### schema

• **schema**: `string`

The schema or datatype used for describing the response.

___

### statusCode

• **statusCode**: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md)

The HTTP Status code used for the response.
