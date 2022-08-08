[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Middlewares/MulterMiddleware

# Module: Middlewares/MulterMiddleware

## Table of contents

### Type Aliases

- [SignMethodOptions](Middlewares_MulterMiddleware.md#signmethodoptions)

### Variables

- [signURL](Middlewares_MulterMiddleware.md#signurl)

### Functions

- [getDestinationFolder](Middlewares_MulterMiddleware.md#getdestinationfolder)
- [namedFiles](Middlewares_MulterMiddleware.md#namedfiles)
- [singleUpload](Middlewares_MulterMiddleware.md#singleupload)
- [verifierURL](Middlewares_MulterMiddleware.md#verifierurl)

## Type Aliases

### SignMethodOptions

Ƭ **SignMethodOptions**: `Object`

Sign method options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addr?` | `string` | if set, only request from this address will be allowed |
| `exp?` | `number` | Expiration timestamp (if ttl isn't specified) |
| `method?` | `string` \| `string`[] | if specified, only this method will be allowed may be string of few methods separated by comma, or array of strings |
| `ttl?` | `number` | URL time to live. |

## Variables

### signURL

• `Const` **signURL**: `any`

Function used to create signed URLs.

**`Param`**

The URL to be signed.

**`Param`**

The options used for the URL signing.

## Functions

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

### namedFiles

▸ **namedFiles**(...`names`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Multiple file upload middleware.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...names` | `string`[] | The names of the fields in the file uploader. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### singleUpload

▸ **singleUpload**(`fieldName`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Single file upload middleware.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldName` | `string` | The name of the field in the file uploader. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### verifierURL

▸ **verifierURL**(`target`, `propertyKey`, `descriptor`): `void`

Type used to define a Route Decorator function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the decorator. |
| `propertyKey` | `string` | The property on which we apply the decorator. |
| `descriptor` | `PropertyDescriptor` | The property descriptor of the property we want to apply the decorator on. |

#### Returns

`void`
