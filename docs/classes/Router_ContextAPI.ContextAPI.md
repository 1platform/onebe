[OneBE Framework - v2.6.3](../README.md) / [Exports](../modules.md) / [Router/ContextAPI](../modules/Router_ContextAPI.md) / ContextAPI

# Class: ContextAPI<BodyRequest\>

[Router/ContextAPI](../modules/Router_ContextAPI.md).ContextAPI

Endpoint request Context information class.

Through this class you can interact with the data received from your users. This Context API allows
you to get data from the Parameters, Query Parameters or Body easily, through specific methods
and specific data types.

## Type parameters

| Name | Type |
| :------ | :------ |
| `BodyRequest` | `any` |

## Table of contents

### Constructors

- [constructor](Router_ContextAPI.ContextAPI.md#constructor)

### Accessors

- [appURL](Router_ContextAPI.ContextAPI.md#appurl)
- [body](Router_ContextAPI.ContextAPI.md#body)
- [files](Router_ContextAPI.ContextAPI.md#files)
- [headers](Router_ContextAPI.ContextAPI.md#headers)
- [language](Router_ContextAPI.ContextAPI.md#language)
- [pageURL](Router_ContextAPI.ContextAPI.md#pageurl)
- [parameters](Router_ContextAPI.ContextAPI.md#parameters)
- [queryParameters](Router_ContextAPI.ContextAPI.md#queryparameters)
- [request](Router_ContextAPI.ContextAPI.md#request)
- [response](Router_ContextAPI.ContextAPI.md#response)
- [sessionID](Router_ContextAPI.ContextAPI.md#sessionid)

### Methods

- [getBody](Router_ContextAPI.ContextAPI.md#getbody)
- [getBodyProperty](Router_ContextAPI.ContextAPI.md#getbodyproperty)
- [getFiles](Router_ContextAPI.ContextAPI.md#getfiles)
- [getHeader](Router_ContextAPI.ContextAPI.md#getheader)
- [getParameter](Router_ContextAPI.ContextAPI.md#getparameter)
- [getParameterNumber](Router_ContextAPI.ContextAPI.md#getparameternumber)
- [getQuery](Router_ContextAPI.ContextAPI.md#getquery)
- [getQueryArray](Router_ContextAPI.ContextAPI.md#getqueryarray)
- [getQueryBoolean](Router_ContextAPI.ContextAPI.md#getqueryboolean)
- [getQueryNumber](Router_ContextAPI.ContextAPI.md#getquerynumber)
- [getQueryString](Router_ContextAPI.ContextAPI.md#getquerystring)
- [setHeader](Router_ContextAPI.ContextAPI.md#setheader)
- [t](Router_ContextAPI.ContextAPI.md#t)
- [translate](Router_ContextAPI.ContextAPI.md#translate)

## Constructors

### constructor

• **new ContextAPI**<`BodyRequest`\>(`request`, `response`, `exposeRequest?`, `isGet?`)

Context API constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BodyRequest` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | `undefined` | The request object for which you need context. |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> | `undefined` | The response object for which you need context. |
| `exposeRequest?` | `boolean` | `false` | Flag to let the Context API know if you need the request object exposed in the endpoint method or not. |
| `isGet?` | `boolean` | `false` | Flag to let the Context API know that the request is a GET request. |

## Accessors

### appURL

• `get` **appURL**(): `string`

Getter for the Application URL from the request.

#### Returns

`string`

___

### body

• `get` **body**(): `BodyRequest`

Getter for the Body of the request. If the request is a GET one, then it will return undefined.

#### Returns

`BodyRequest`

___

### files

• `get` **files**(): `File`[]

Getter for the list of files uploaded through the Endpoint.

#### Returns

`File`[]

___

### headers

• `get` **headers**(): `Record`<`string`, `string`\>

Getter for the list of Headers exposed by the endpoint.

#### Returns

`Record`<`string`, `string`\>

___

### language

• `get` **language**(): `string`

Getter for the language used in the request.

#### Returns

`string`

___

### pageURL

• `get` **pageURL**(): `string`

Getter for the Page URL from the request.

#### Returns

`string`

___

### parameters

• `get` **parameters**(): `Record`<`string`, `string`\>

Getter for the list of URL Parameters exposed by the endpoint.

#### Returns

`Record`<`string`, `string`\>

___

### queryParameters

• `get` **queryParameters**(): `ParsedQs`

Getter for the list of Query Parameters exposed by the endpoint.

#### Returns

`ParsedQs`

___

### request

• `get` **request**(): `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

Getter for the request object. If the flag `exposeRequest` is set to false, the getter will
return undefined.

#### Returns

`Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

___

### response

• `get` **response**(): `Response`<`any`, `Record`<`string`, `any`\>\>

Getter for the response object. If the flag `exposeRequest` is set to false, the getter will
return undefined.

#### Returns

`Response`<`any`, `Record`<`string`, `any`\>\>

___

### sessionID

• `get` **sessionID**(): `string`

Getter for the session ID of the request.

#### Returns

`string`

## Methods

### getBody

▸ **getBody**(): `BodyRequest`

Method used to get the contents of the body as the given type passed when defining the endpoint.

#### Returns

`BodyRequest`

___

### getBodyProperty

▸ **getBodyProperty**<`T`\>(`property`): `T`

Method used to get a property from the body using a name and a specific type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | The property we want from the body. |

#### Returns

`T`

___

### getFiles

▸ **getFiles**(`fileName?`): `File` \| `File`[]

Method used to get a file by its name from the request. When using the single upload
middleware, you can skip the fileName parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName?` | `string` | The name of the file. When using the single file upload middleware, you can skip the parameter. |

#### Returns

`File` \| `File`[]

___

### getHeader

▸ **getHeader**(`headerName`): `string`

Method used to get the header value from the request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `headerName` | `string` | The name of the header value needed. |

#### Returns

`string`

___

### getParameter

▸ **getParameter**(`name`): `string`

Method used to get the value of a URL Parameter by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter. |

#### Returns

`string`

___

### getParameterNumber

▸ **getParameterNumber**(`name`): `number`

Method used to get a numeric URL Parameter by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter. |

#### Returns

`number`

___

### getQuery

▸ **getQuery**(`name`, `defaultValue?`): `ParsedQs`

Method used to get the value of a Query Parameter by its name.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the parameter. |
| `defaultValue` | `string` | `""` | The default value of the parameter. |

#### Returns

`ParsedQs`

___

### getQueryArray

▸ **getQueryArray**<`T`\>(`name`): `T`[]

Method used to get the array value of a Query Parameter by its name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `ParsedQs` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter. |

#### Returns

`T`[]

___

### getQueryBoolean

▸ **getQueryBoolean**(`name`): `boolean`

Method used to get the boolean value of a Query Parameter by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter. |

#### Returns

`boolean`

___

### getQueryNumber

▸ **getQueryNumber**(`name`, `defaultValue?`): `number`

Method used to get the numeric value of a Query Parameter by its name.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the parameter. |
| `defaultValue` | `number` | `0` | The default value of the parameter. |

#### Returns

`number`

___

### getQueryString

▸ **getQueryString**(`name`, `defaultValue?`): `string`

Method used to get the string value of a Query Parameter by its name.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the parameter. |
| `defaultValue` | `string` | `""` | The default value of the parameter. |

#### Returns

`string`

___

### setHeader

▸ **setHeader**(`headerName`, `value`): `void`

Method used to set a header value for the response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `headerName` | `string` | The name of the header for which you set the value. |
| `value` | `string` \| `string`[] | The value you want to set. |

#### Returns

`void`

___

### t

▸ **t**(`key`, `options?`): `string`

Method used to translate a message with parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The message to be returned to the user. |
| `options?` | `TOptions`<`StringMap`\> | A map with parameters that is going to be applied to the message. |

#### Returns

`string`

___

### translate

▸ **translate**(`key`, `options?`): `string`

Method used to translate a message with parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The message to be returned to the user. |
| `options?` | `TOptions`<`StringMap`\> | A map with parameters that is going to be applied to the message. |

#### Returns

`string`
