[OneBE Framework - v2.4.12](../README.md) / [Exports](../modules.md) / Middlewares/MulterMiddleware

# Module: Middlewares/MulterMiddleware

## Table of contents

### Type Aliases

- [UploadedFile](Middlewares_MulterMiddleware.md#uploadedfile)

### Functions

- [ArrayUpload](Middlewares_MulterMiddleware.md#arrayupload)
- [NamedFilesUpload](Middlewares_MulterMiddleware.md#namedfilesupload)
- [SingleUpload](Middlewares_MulterMiddleware.md#singleupload)
- [getDestinationFolder](Middlewares_MulterMiddleware.md#getdestinationfolder)

## Type Aliases

### UploadedFile

Ƭ **UploadedFile**: `Express.Multer.File`

Type used to describe how an uploaded file should look like.

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

▸ **NamedFilesUpload**(`...names`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

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

### getDestinationFolder

▸ **getDestinationFolder**(`...pathLike`): `string`

Function used to get the destination folder/file from the upload destination folder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...pathLike` | `string`[] | The list of path like elements. |

#### Returns

`string`
