[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IContext

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
- [request](Router_RouteInterfaces.IContext.md#request)
- [response](Router_RouteInterfaces.IContext.md#response)

### Methods

- [getBody](Router_RouteInterfaces.IContext.md#getbody)
- [getParam](Router_RouteInterfaces.IContext.md#getparam)
- [getParamNumber](Router_RouteInterfaces.IContext.md#getparamnumber)
- [getQuery](Router_RouteInterfaces.IContext.md#getquery)
- [getQueryArray](Router_RouteInterfaces.IContext.md#getqueryarray)
- [getQueryBoolean](Router_RouteInterfaces.IContext.md#getqueryboolean)
- [getQueryNumber](Router_RouteInterfaces.IContext.md#getquerynumber)

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

### request

• `Optional` **request**: `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

The request object.

___

### response

• `Optional` **response**: `Response`<`any`, `Record`<`string`, `any`\>\>

The response object.

## Methods

### getBody

▸ `Optional` **getBody**(): `TRequest`

Get the query parameter as an array.

#### Returns

`TRequest`

___

### getParam

▸ `Optional` **getParam**(`key`, `defaultValue?`): `string`

Get the router parameter as a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key we need from the query string. |
| `defaultValue?` | `string` | - |

#### Returns

`string`

___

### getParamNumber

▸ `Optional` **getParamNumber**(`key`, `defaultValue?`): `number`

Get the route parameter as a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key we need from the query string. |
| `defaultValue?` | `number` | - |

#### Returns

`number`

___

### getQuery

▸ `Optional` **getQuery**(`key`, `defaultValue?`): `string`

Get the query parameter as a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key we need from the query string. |
| `defaultValue?` | `string` | - |

#### Returns

`string`

___

### getQueryArray

▸ `Optional` **getQueryArray**(`key`, `defaultValue?`): `string`[]

Get the query parameter as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key we need from the query string. |
| `defaultValue?` | `string`[] | - |

#### Returns

`string`[]

___

### getQueryBoolean

▸ `Optional` **getQueryBoolean**(`key`): `boolean`

Get the query parameter as a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key we need from the query string. |

#### Returns

`boolean`

___

### getQueryNumber

▸ `Optional` **getQueryNumber**(`key`, `defaultValue?`): `number`

Get the query parameter as a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key we need from the query string. |
| `defaultValue?` | `number` | - |

#### Returns

`number`
