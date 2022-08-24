[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Middlewares/MulterMiddleware

# Module: Middlewares/MulterMiddleware

## Table of contents

### Type Aliases

- [SignMethodOptions](Middlewares_MulterMiddleware.md#signmethodoptions)

### Functions

- [ArrayUpload](Middlewares_MulterMiddleware.md#arrayupload)
- [NamedFilesUpload](Middlewares_MulterMiddleware.md#namedfilesupload)
- [SingleUpload](Middlewares_MulterMiddleware.md#singleupload)
- [VerifyURL](Middlewares_MulterMiddleware.md#verifyurl)
- [getDestinationFolder](Middlewares_MulterMiddleware.md#getdestinationfolder)
- [signURL](Middlewares_MulterMiddleware.md#signurl)

## Type Aliases

### SignMethodOptions

Ƭ **SignMethodOptions**: `Object`

A list with all the options that you can pass to the sign method.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | `string` | If specified, the URL will be valid only when this Address parameter is specified. |
| `expireAt?` | `number` | If you don't specify the Time To Live (TTL) parameter, you can specify a timestamp at which the URL will not be valid. |
| `method?` | `string` \| `string`[] | The method or a list of methods allowed to access the endpoint secured by the signed URL. |
| `timeToLive?` | `number` | How many seconds should the URL be valid. |

## Functions

### ArrayUpload

▸ **ArrayUpload**(`fieldName`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator to add the Multiple file upload under the same name middleware.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldName` | `string` | The name of the field in the file uploader. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### NamedFilesUpload

▸ **NamedFilesUpload**(...`names`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator to add the Multiple file upload with different names middleware.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...names` | `string`[] | The names of the fields in the file uploader. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### SingleUpload

▸ **SingleUpload**(`fieldName`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Decorator to add the Single file upload middleware.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldName` | `string` | The name of the field in the file uploader. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### VerifyURL

▸ **VerifyURL**(): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Middleware used to verify if a signed URL is valid.

**`Decorator`**

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### getDestinationFolder

▸ **getDestinationFolder**(...`pathLike`): `string`

Function used to get the destination folder/file from the upload destination folder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...pathLike` | `string`[] | The list of path like elements. |

#### Returns

`string`

___

### signURL

▸ **signURL**(`url`, `options?`): `string`

Function used to create signed URLs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to be signed. |
| `options?` | [`SignMethodOptions`](Middlewares_MulterMiddleware.md#signmethodoptions) | The options used for the URL signing. |

#### Returns

`string`
