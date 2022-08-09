[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/Helpers/ContextAPI](../modules/Documentation_Helpers_ContextAPI.md) / ContextAPI

# Class: ContextAPI<BodyRequest\>

[Documentation/Helpers/ContextAPI](../modules/Documentation_Helpers_ContextAPI.md).ContextAPI

## Type parameters

| Name | Type |
| :------ | :------ |
| `BodyRequest` | `any` |

## Table of contents

### Constructors

- [constructor](Documentation_Helpers_ContextAPI.ContextAPI.md#constructor)

### Accessors

- [appURL](Documentation_Helpers_ContextAPI.ContextAPI.md#appurl)
- [body](Documentation_Helpers_ContextAPI.ContextAPI.md#body)
- [files](Documentation_Helpers_ContextAPI.ContextAPI.md#files)
- [headers](Documentation_Helpers_ContextAPI.ContextAPI.md#headers)
- [pageURL](Documentation_Helpers_ContextAPI.ContextAPI.md#pageurl)
- [parameters](Documentation_Helpers_ContextAPI.ContextAPI.md#parameters)
- [queryParameters](Documentation_Helpers_ContextAPI.ContextAPI.md#queryparameters)
- [request](Documentation_Helpers_ContextAPI.ContextAPI.md#request)
- [response](Documentation_Helpers_ContextAPI.ContextAPI.md#response)
- [sessionID](Documentation_Helpers_ContextAPI.ContextAPI.md#sessionid)

### Methods

- [getBody](Documentation_Helpers_ContextAPI.ContextAPI.md#getbody)
- [getBodyProperty](Documentation_Helpers_ContextAPI.ContextAPI.md#getbodyproperty)
- [getFiles](Documentation_Helpers_ContextAPI.ContextAPI.md#getfiles)
- [getHeader](Documentation_Helpers_ContextAPI.ContextAPI.md#getheader)
- [getParameter](Documentation_Helpers_ContextAPI.ContextAPI.md#getparameter)
- [getParameterNumber](Documentation_Helpers_ContextAPI.ContextAPI.md#getparameternumber)
- [getQuery](Documentation_Helpers_ContextAPI.ContextAPI.md#getquery)
- [getQueryArray](Documentation_Helpers_ContextAPI.ContextAPI.md#getqueryarray)
- [getQueryBoolean](Documentation_Helpers_ContextAPI.ContextAPI.md#getqueryboolean)
- [getQueryNumber](Documentation_Helpers_ContextAPI.ContextAPI.md#getquerynumber)
- [getQueryString](Documentation_Helpers_ContextAPI.ContextAPI.md#getquerystring)
- [setHeader](Documentation_Helpers_ContextAPI.ContextAPI.md#setheader)

## Constructors

### constructor

• **new ContextAPI**<`BodyRequest`\>(`request`, `response`, `exposeRequest?`, `isGet?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BodyRequest` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | `undefined` |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> | `undefined` |
| `exposeRequest` | `boolean` | `false` |
| `isGet` | `boolean` | `false` |

## Accessors

### appURL

• `get` **appURL**(): `string`

#### Returns

`string`

___

### body

• `get` **body**(): `BodyRequest`

#### Returns

`BodyRequest`

___

### files

• `get` **files**(): `File`[]

#### Returns

`File`[]

___

### headers

• `get` **headers**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

___

### pageURL

• `get` **pageURL**(): `string`

#### Returns

`string`

___

### parameters

• `get` **parameters**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

___

### queryParameters

• `get` **queryParameters**(): `ParsedQs`

#### Returns

`ParsedQs`

___

### request

• `get` **request**(): `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Returns

`Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

___

### response

• `get` **response**(): `Response`<`any`, `Record`<`string`, `any`\>\>

#### Returns

`Response`<`any`, `Record`<`string`, `any`\>\>

___

### sessionID

• `get` **sessionID**(): `string`

#### Returns

`string`

## Methods

### getBody

▸ **getBody**(): `BodyRequest`

#### Returns

`BodyRequest`

___

### getBodyProperty

▸ **getBodyProperty**<`T`\>(`property`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

`T`

___

### getFiles

▸ **getFiles**(`fileName?`): `File` \| `File`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName?` | `string` |

#### Returns

`File` \| `File`[]

___

### getHeader

▸ **getHeader**(`headerName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName` | `string` |

#### Returns

`string`

___

### getParameter

▸ **getParameter**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

___

### getParameterNumber

▸ **getParameterNumber**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

___

### getQuery

▸ **getQuery**(`name`, `defaultValue?`): `ParsedQs`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `string` | `""` |

#### Returns

`ParsedQs`

___

### getQueryArray

▸ **getQueryArray**<`T`\>(`name`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `ParsedQs` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`T`[]

___

### getQueryBoolean

▸ **getQueryBoolean**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### getQueryNumber

▸ **getQueryNumber**(`name`, `defaultValue?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `number` | `0` |

#### Returns

`number`

___

### getQueryString

▸ **getQueryString**(`name`, `defaultValue?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `string` | `""` |

#### Returns

`string`

___

### setHeader

▸ **setHeader**(`headerName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName` | `string` |
| `value` | `string` \| `string`[] |

#### Returns

`void`
