[OneBE Framework - v2.6.17](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IResponse

# Interface: IResponse<TResponse\>

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).IResponse

The response object that can be returned from an endpoint method.

## Type parameters

| Name |
| :------ |
| `TResponse` |

## Table of contents

### Properties

- [body](Router_RouteInterfaces.IResponse.md#body)
- [contentType](Router_RouteInterfaces.IResponse.md#contenttype)
- [file](Router_RouteInterfaces.IResponse.md#file)
- [fileName](Router_RouteInterfaces.IResponse.md#filename)
- [statusCode](Router_RouteInterfaces.IResponse.md#statuscode)

## Properties

### body

• `Optional` **body**: `TResponse`

The response body.

___

### contentType

• `Optional` **contentType**: `string`

The content type of the response.

___

### file

• `Optional` **file**: `boolean`

The file a user can download.

___

### fileName

• `Optional` **fileName**: `string`

The name of the file to be downloaded.

___

### statusCode

• `Optional` **statusCode**: `number`

Status code of the response.
