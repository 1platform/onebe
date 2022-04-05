[Spark OneBE - v1.0.28](../README.md) / [Exports](../modules.md) / [Utils/OtherUtils](../modules/Utils_OtherUtils.md) / [QRCode](../modules/Utils_OtherUtils.QRCode.md) / QRCodeRenderersOptions

# Interface: QRCodeRenderersOptions

[Utils/OtherUtils](../modules/Utils_OtherUtils.md).[QRCode](../modules/Utils_OtherUtils.QRCode.md).QRCodeRenderersOptions

## Hierarchy

- [`QRCodeOptions`](Utils_OtherUtils.QRCode.QRCodeOptions.md)

  ↳ **`QRCodeRenderersOptions`**

  ↳↳ [`QRCodeToDataURLOptions`](Utils_OtherUtils.QRCode.QRCodeToDataURLOptions.md)

  ↳↳ [`QRCodeToStringOptions`](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md)

  ↳↳ [`QRCodeToFileOptions`](Utils_OtherUtils.QRCode.QRCodeToFileOptions.md)

  ↳↳ [`QRCodeToFileStreamOptions`](Utils_OtherUtils.QRCode.QRCodeToFileStreamOptions.md)

  ↳↳ [`QRCodeToBufferOptions`](Utils_OtherUtils.QRCode.QRCodeToBufferOptions.md)

## Table of contents

### Properties

- [color](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#color)
- [errorCorrectionLevel](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#errorcorrectionlevel)
- [margin](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#margin)
- [scale](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#scale)
- [toSJISFunc](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#tosjisfunc)
- [version](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#version)
- [width](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md#width)

## Properties

### color

• `Optional` **color**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dark?` | `string` | Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than color.light. Default: #000000ff |
| `light?` | `string` | Color of light module. Value must be in hex format (RGBA). Default: #ffffffff |

___

### errorCorrectionLevel

• `Optional` **errorCorrectionLevel**: [`QRCodeErrorCorrectionLevel`](../modules/Utils_OtherUtils.QRCode.md#qrcodeerrorcorrectionlevel)

Error correction level.
Possible values are low, medium, quartile, high or L, M, Q, H.
Default: M

#### Inherited from

[QRCodeOptions](Utils_OtherUtils.QRCode.QRCodeOptions.md).[errorCorrectionLevel](Utils_OtherUtils.QRCode.QRCodeOptions.md#errorcorrectionlevel)

___

### margin

• `Optional` **margin**: `number`

Define how much wide the quiet zone should be.
Default: 4

___

### scale

• `Optional` **scale**: `number`

Scale factor. A value of 1 means 1px per modules (black dots).
Default: 4

___

### toSJISFunc

• `Optional` **toSJISFunc**: (`codePoint`: `string`) => `number`

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

[QRCodeOptions](Utils_OtherUtils.QRCode.QRCodeOptions.md).[toSJISFunc](Utils_OtherUtils.QRCode.QRCodeOptions.md#tosjisfunc)

___

### version

• `Optional` **version**: `number`

QR Code version. If not specified the more suitable value will be calculated.

#### Inherited from

[QRCodeOptions](Utils_OtherUtils.QRCode.QRCodeOptions.md).[version](Utils_OtherUtils.QRCode.QRCodeOptions.md#version)

___

### width

• `Optional` **width**: `number`

Forces a specific width for the output image.
If width is too small to contain the qr symbol, this option will be ignored.
Takes precedence over scale.
