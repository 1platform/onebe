[OneBE Framework - v2.4.4](../README.md) / [Exports](../modules.md) / Authentication/JWT

# Module: Authentication/JWT

## Table of contents

### Functions

- [decode](Authentication_JWT.md#decode)
- [extractToken](Authentication_JWT.md#extracttoken)
- [shortLiveToken](Authentication_JWT.md#shortlivetoken)
- [sign](Authentication_JWT.md#sign)
- [verify](Authentication_JWT.md#verify)

## Functions

### decode

▸ **decode**(`token`): [`IPayload`](../interfaces/Authentication_IPayload.IPayload.md) \| `string`

Decodes the given token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The token to be decoded. |

#### Returns

[`IPayload`](../interfaces/Authentication_IPayload.IPayload.md) \| `string`

___

### extractToken

▸ **extractToken**(`request`): `string`

Extracts the token from the request object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | The request object. |

#### Returns

`string`

___

### shortLiveToken

▸ **shortLiveToken**(`payload`): `string`

Creates a short timed signed JWT Token that can be sent to the user and used
for the Bearer authentication method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `string` \| [`IPayload`](../interfaces/Authentication_IPayload.IPayload.md) | The payload we want to sign. |

#### Returns

`string`

___

### sign

▸ **sign**(`payload`, `rememberMe?`): `string`

Creates a signed JWT Token that can be sent to the user and used
for the Bearer authentication method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `payload` | `string` \| [`IPayload`](../interfaces/Authentication_IPayload.IPayload.md) | `undefined` | The payload we want to sign. |
| `rememberMe` | `boolean` | `false` | Should the token be valid for a longer period. |

#### Returns

`string`

___

### verify

▸ **verify**(`token`): `boolean`

Checks if the given token is valid or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The token to be verified. |

#### Returns

`boolean`
