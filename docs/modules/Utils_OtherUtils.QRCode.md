[Spark OneBE - v1.0.9](../README.md) / [Exports](../modules.md) / [Utils/OtherUtils](Utils_OtherUtils.md) / QRCode

# Namespace: QRCode

[Utils/OtherUtils](Utils_OtherUtils.md).QRCode

## Table of contents

### Interfaces

- [QRCode](../interfaces/Utils_OtherUtils.QRCode.QRCode.md)
- [QRCodeOptions](../interfaces/Utils_OtherUtils.QRCode.QRCodeOptions.md)
- [QRCodeRenderersOptions](../interfaces/Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md)
- [QRCodeSegment](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)
- [QRCodeToBufferOptions](../interfaces/Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md)
- [QRCodeToDataURLOptions](../interfaces/Utils_OtherUtils.QRCode.QRCodeToDataURLOptions.md)
- [QRCodeToFileOptions](../interfaces/Utils_OtherUtils.QRCode.QRCodeToFileOptions.md)
- [QRCodeToFileStreamOptions](../interfaces/Utils_OtherUtils.QRCode.QRCodeToFileStreamOptions.md)
- [QRCodeToStringOptions](../interfaces/Utils_OtherUtils.QRCode.QRCodeToStringOptions.md)

### Type aliases

- [QRCodeErrorCorrectionLevel](Utils_OtherUtils.QRCode.md#qrcodeerrorcorrectionlevel)

### Functions

- [create](Utils_OtherUtils.QRCode.md#create)
- [toBuffer](Utils_OtherUtils.QRCode.md#tobuffer)
- [toCanvas](Utils_OtherUtils.QRCode.md#tocanvas)
- [toDataURL](Utils_OtherUtils.QRCode.md#todataurl)
- [toFile](Utils_OtherUtils.QRCode.md#tofile)
- [toFileStream](Utils_OtherUtils.QRCode.md#tofilestream)
- [toString](Utils_OtherUtils.QRCode.md#tostring)

## Type aliases

### QRCodeErrorCorrectionLevel

Ƭ **QRCodeErrorCorrectionLevel**: ``"low"`` \| ``"medium"`` \| ``"quartile"`` \| ``"high"`` \| ``"L"`` \| ``"M"`` \| ``"Q"`` \| ``"H"``

## Functions

### create

▸ **create**(`text`, `options`): [`QRCode`](../interfaces/Utils_OtherUtils.QRCode.QRCode.md)

Creates QR Code symbol and returns a qrcode object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeOptions.md) |

#### Returns

[`QRCode`](../interfaces/Utils_OtherUtils.QRCode.QRCode.md)

___

### toBuffer

▸ **toBuffer**(`text`, `callback`): `void`

Returns a Buffer containing a representation of the QR Code image. Only works with png format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `buffer`: `Buffer`) => `void` |

#### Returns

`void`

▸ **toBuffer**(`text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Buffer`\>

Returns a Buffer containing a representation of the QR Code image. Only works with png format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeToBufferOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Buffer`\>

▸ **toBuffer**(`text`, `options`, `callback`): `void`

Returns a Buffer containing a representation of the QR Code image. Only works with png format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeToBufferOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `buffer`: `Buffer`) => `void` |

#### Returns

`void`

___

### toCanvas

▸ **toCanvas**(`canvasElement`, `text`, `callback`): `void`

Draws qr code symbol to canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasElement` | [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement ) |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

▸ **toCanvas**(`canvasElement`, `text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Draws qr code symbol to canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasElement` | [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement ) |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeRenderersOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

▸ **toCanvas**(`canvasElement`, `text`, `options`, `callback`): `void`

Draws qr code symbol to canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasElement` | [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement ) |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeRenderersOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

▸ **toCanvas**(`text`, `callback`): `void`

Draws qr code symbol to canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `canvas`: [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement )) => `void` |

#### Returns

`void`

▸ **toCanvas**(`text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Draws qr code symbol to canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeRenderersOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

▸ **toCanvas**(`text`, `options`, `callback`): `void`

Draws qr code symbol to canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeRenderersOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `canvas`: [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement )) => `void` |

#### Returns

`void`

▸ **toCanvas**(`canvas`, `text`, `callback`): `void`

Draws qr code symbol to node canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

▸ **toCanvas**(`canvas`, `text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Draws qr code symbol to node canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeRenderersOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

▸ **toCanvas**(`canvas`, `text`, `options`, `callback`): `void`

Draws qr code symbol to node canvas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeRenderersOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

___

### toDataURL

▸ **toDataURL**(`canvasElement`, `text`, `callback`): `void`

Returns a Data URI containing a representation of the QR Code image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasElement` | [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement ) |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `url`: `string`) => `void` |

#### Returns

`void`

▸ **toDataURL**(`canvasElement`, `text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns a Data URI containing a representation of the QR Code image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasElement` | [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement ) |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeToDataURLOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToDataURLOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

▸ **toDataURL**(`canvasElement`, `text`, `options`, `callback`): `void`

Returns a Data URI containing a representation of the QR Code image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasElement` | [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement ) |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeToDataURLOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToDataURLOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `url`: `string`) => `void` |

#### Returns

`void`

▸ **toDataURL**(`text`, `callback`): `void`

Returns a Data URI containing a representation of the QR Code image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `url`: `string`) => `void` |

#### Returns

`void`

▸ **toDataURL**(`text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns a Data URI containing a representation of the QR Code image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeToDataURLOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToDataURLOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

▸ **toDataURL**(`text`, `options`, `callback`): `void`

Returns a Data URI containing a representation of the QR Code image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeToDataURLOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToDataURLOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `url`: `string`) => `void` |

#### Returns

`void`

___

### toFile

▸ **toFile**(`path`, `text`, `callback`): `void`

Saves QR Code to image file.
If options.type is not specified, the format will be guessed from file extension.
Recognized extensions are png, svg, txt.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

▸ **toFile**(`path`, `text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Saves QR Code to image file.
If options.type is not specified, the format will be guessed from file extension.
Recognized extensions are png, svg, txt.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeToFileOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToFileOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

▸ **toFile**(`path`, `text`, `options`, `callback`): `void`

Saves QR Code to image file.
If options.type is not specified, the format will be guessed from file extension.
Recognized extensions are png, svg, txt.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeToFileOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToFileOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

___

### toFileStream

▸ **toFileStream**(`stream`, `text`, `callback`): `void`

Writes QR Code image to stream. Only works with png format for now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Writable` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

▸ **toFileStream**(`stream`, `text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Writes QR Code image to stream. Only works with png format for now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Writable` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeToFileStreamOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToFileStreamOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

▸ **toFileStream**(`stream`, `text`, `options`, `callback`): `void`

Writes QR Code image to stream. Only works with png format for now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Writable` |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeToFileStreamOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToFileStreamOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )) => `void` |

#### Returns

`void`

___

### toString

▸ **toString**(`text`, `callback`): `void`

Returns a string representation of the QR Code.
If choosen output format is svg it will returns a string containing xml code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `string`: `string`) => `void` |

#### Returns

`void`

▸ **toString**(`text`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns a string representation of the QR Code.
If choosen output format is svg it will returns a string containing xml code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options?` | [`QRCodeToStringOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToStringOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

▸ **toString**(`text`, `options`, `callback`): `void`

Returns a string representation of the QR Code.
If choosen output format is svg it will returns a string containing xml code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| [`QRCodeSegment`](../interfaces/Utils_OtherUtils.QRCode.QRCodeSegment.md)[] |
| `options` | [`QRCodeToStringOptions`](../interfaces/Utils_OtherUtils.QRCode.QRCodeToStringOptions.md) |
| `callback` | (`error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `string`: `string`) => `void` |

#### Returns

`void`
