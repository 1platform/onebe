[Spark OneBE - v0.9.15](../README.md) / [Exports](../modules.md) / [Utils/OtherUtils](../modules/Utils_OtherUtils.md) / [QRCode](../modules/Utils_OtherUtils.QRCode.md) / QRCodeToBufferOptions

# Interface: QRCodeToBufferOptions

[Utils/OtherUtils](../modules/Utils_OtherUtils.md).[QRCode](../modules/Utils_OtherUtils.QRCode.md).QRCodeToBufferOptions

## Hierarchy

- [`QRCodeRenderersOptions`](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md)

  ↳ **`QRCodeToBufferOptions`**

## Table of contents

### Properties

- [color](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#color)
- [errorCorrectionLevel](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#errorcorrectionlevel)
- [margin](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#margin)
- [rendererOpts](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#rendereropts)
- [scale](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#scale)
- [toSJISFunc](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#tosjisfunc)
- [type](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#type)
- [version](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#version)
- [width](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md#width)

## Properties

### color

• `Optional` **color**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dark?` | `string` | Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than color.light. Default: #000000ff |
| `light?` | `string` | Color of light module. Value must be in hex format (RGBA). Default: #ffffffff |

#### Inherited from

[QRCodeRenderersOptions](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md).[color](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#color)

___

### errorCorrectionLevel

• `Optional` **errorCorrectionLevel**: [`QRCodeErrorCorrectionLevel`](../modules/Utils_OtherUtils.QRCode.md#qrcodeerrorcorrectionlevel)

Error correction level.
Possible values are low, medium, quartile, high or L, M, Q, H.
Default: M

#### Inherited from

[QRCodeRenderersOptions](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md).[errorCorrectionLevel](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#errorcorrectionlevel)

___

### margin

• `Optional` **margin**: `number`

Define how much wide the quiet zone should be.
Default: 4

#### Inherited from

[QRCodeRenderersOptions](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md).[margin](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#margin)

___

### rendererOpts

• `Optional` **rendererOpts**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deflateLevel?` | `number` | Compression level for deflate. Default: 9 |
| `deflateStrategy?` | `number` | Compression strategy for deflate. Default: 3 |

___

### scale

• `Optional` **scale**: `number`

Scale factor. A value of 1 means 1px per modules (black dots).
Default: 4

#### Inherited from

[QRCodeRenderersOptions](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md).[scale](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#scale)

___

### toSJISFunc

• `Optional` **toSJISFunc**: (`codePoint`: `string`) => `number`

Helper function used internally to convert a kanji to its Shift JIS value.
Provide this function if you need support for Kanji mode.

#### Type declaration

▸ (`codePoint`): `number`

Helper function used internally to convert a kanji to its Shift JIS value.
Provide this function if you need support for Kanji mode.

##### Parameters

| Name | Type |
| :------ | :------ |
| `codePoint` | `string` |

##### Returns

`number`

#### Inherited from

[QRCodeRenderersOptions](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md).[toSJISFunc](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#tosjisfunc)

___

### type

• `Optional` **type**: ``"png"``

Output format. Only png supported for Buffer.

___

### version

• `Optional` **version**: `number`

QR Code version. If not specified the more suitable value will be calculated.

#### Inherited from

[QRCodeRenderersOptions](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md).[version](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#version)

___

### width

• `Optional` **width**: `number`

Forces a specific width for the output image.
If width is too small to contain the qr symbol, this option will be ignored.
Takes precedence over scale.

#### Inherited from

[QRCodeRenderersOptions](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md).[width](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#width)
