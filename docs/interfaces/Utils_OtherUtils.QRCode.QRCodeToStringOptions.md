[Spark OneBE - v1.0.1](../README.md) / [Exports](../modules.md) / [Utils/OtherUtils](../modules/Utils_OtherUtils.md) / [QRCode](../modules/Utils_OtherUtils.QRCode.md) / QRCodeToStringOptions

# Interface: QRCodeToStringOptions

[Utils/OtherUtils](../modules/Utils_OtherUtils.md).[QRCode](../modules/Utils_OtherUtils.QRCode.md).QRCodeToStringOptions

## Hierarchy

- [`QRCodeRenderersOptions`](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md)

  ↳ **`QRCodeToStringOptions`**

## Table of contents

### Properties

- [color](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#color)
- [errorCorrectionLevel](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#errorcorrectionlevel)
- [margin](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#margin)
- [scale](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#scale)
- [toSJISFunc](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#tosjisfunc)
- [type](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#type)
- [version](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#version)
- [width](Utils_OtherUtils.QRCode.QRCodeToStringOptions.md#width)

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

• `Optional` **type**: ``"utf8"`` \| ``"svg"`` \| ``"terminal"``

Output format.
Default: utf8

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
