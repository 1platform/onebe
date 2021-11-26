[Spark OneBE - v1.0.9](../README.md) / [Exports](../modules.md) / [Utils/OtherUtils](../modules/Utils_OtherUtils.md) / [QRCode](../modules/Utils_OtherUtils.QRCode.md) / QRCodeOptions

# Interface: QRCodeOptions

[Utils/OtherUtils](../modules/Utils_OtherUtils.md).[QRCode](../modules/Utils_OtherUtils.QRCode.md).QRCodeOptions

## Hierarchy

- **`QRCodeOptions`**

  ↳ [`QRCodeRenderersOptions`](Utils_OtherUtils.QRCode.QRCodeRenderersOptions.md)

## Table of contents

### Properties

- [errorCorrectionLevel](Utils_OtherUtils.QRCode.QRCodeOptions.md#errorcorrectionlevel)
- [toSJISFunc](Utils_OtherUtils.QRCode.QRCodeOptions.md#tosjisfunc)
- [version](Utils_OtherUtils.QRCode.QRCodeOptions.md#version)

## Properties

### errorCorrectionLevel

• `Optional` **errorCorrectionLevel**: [`QRCodeErrorCorrectionLevel`](../modules/Utils_OtherUtils.QRCode.md#qrcodeerrorcorrectionlevel)

Error correction level.
Possible values are low, medium, quartile, high or L, M, Q, H.
Default: M

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

___

### version

• `Optional` **version**: `number`

QR Code version. If not specified the more suitable value will be calculated.
