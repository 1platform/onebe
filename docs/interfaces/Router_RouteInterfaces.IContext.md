[Spark OneBE - v1.0.3](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IContext

# Interface: IContext<TRequest\>

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).IContext

The request context parameter definition.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | `any` |

## Table of contents

### Properties

- [body](Router_RouteInterfaces.IContext.md#body)
- [file](Router_RouteInterfaces.IContext.md#file)
- [files](Router_RouteInterfaces.IContext.md#files)
- [header](Router_RouteInterfaces.IContext.md#header)
- [params](Router_RouteInterfaces.IContext.md#params)
- [query](Router_RouteInterfaces.IContext.md#query)
- [req](Router_RouteInterfaces.IContext.md#req)
- [res](Router_RouteInterfaces.IContext.md#res)

## Properties

### body

• `Optional` **body**: `Record`<`string`, `unknown`\> \| `TRequest`

The body of the request.

___

### file

• `Optional` **file**: `File`

The file request object.

___

### files

• `Optional` **files**: `File`[] \| `Record`<`string`, `File`[]\>

A list with uploaded files from the request.

___

### header

• **header**: [`HeaderMethod`](../modules/Router_RouteTypes.md#headermethod)

The header data extractor function.

___

### params

• **params**: `Record`<`string`, `string`\>

A map with all the route parameters.

___

### query

• `Optional` **query**: `string` \| `ParsedQs` \| `string`[] \| `ParsedQs`[]

A list with all the query parameters.

___

### req

• `Optional` **req**: `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

The request object.

___

### res

• `Optional` **res**: `Response`<`any`, `Record`<`string`, `any`\>\>

The response object.
