[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [MFA/AdvancedMFA](../modules/MFA_AdvancedMFA.md) / AdvancedMFA

# Class: AdvancedMFA

[MFA/AdvancedMFA](../modules/MFA_AdvancedMFA.md).AdvancedMFA

An advanced MFA authentication method.

## Table of contents

### Constructors

- [constructor](MFA_AdvancedMFA.AdvancedMFA.md#constructor)

### Methods

- [getMFAConfig](MFA_AdvancedMFA.AdvancedMFA.md#getmfaconfig)
- [getQRCode](MFA_AdvancedMFA.AdvancedMFA.md#getqrcode)
- [verifyAuthenticationCode](MFA_AdvancedMFA.AdvancedMFA.md#verifyauthenticationcode)

## Constructors

### constructor

• **new AdvancedMFA**()

## Methods

### getMFAConfig

▸ **getMFAConfig**(): [`IMFAConfiguration`](../interfaces/MFA_AdvancedMFA.IMFAConfiguration.md)

Returns an MFA Configuration.

#### Returns

[`IMFAConfiguration`](../interfaces/MFA_AdvancedMFA.IMFAConfiguration.md)

___

### getQRCode

▸ **getQRCode**(`otpAuthURL`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Buffer`\>

Generates a QR Code for the given OTPAuth URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otpAuthURL` | `string` | The OTPAuth URL we want to generate a QRCode for. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Buffer`\>

___

### verifyAuthenticationCode

▸ **verifyAuthenticationCode**(`authenticationCode`, `userSecretMFACode`): `boolean`

Verifies a given MFA Authentication Code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authenticationCode` | `string` | The code generated by the Authenticator application. |
| `userSecretMFACode` | `string` | The code use by the user to generate MFA codes. |

#### Returns

`boolean`
