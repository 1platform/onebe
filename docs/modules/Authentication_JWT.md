[Spark OneBE - v1.0.24](../README.md) / [Exports](../modules.md) / Authentication/JWT

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
| `token` | `string` | The token to be token. |

#### Returns

[`IPayload`](../interfaces/Authentication_IPayload.IPayload.md) \| `string`

___

### extractToken

▸ **extractToken**(`req`): `string`

Extracts the token from the request object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | The request object. |

#### Returns

`string`

___

### shortLiveToken

▸ **shortLiveToken**(`payload`): `string`

Signs in an application with the given payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `string` \| [`IPayload`](../interfaces/Authentication_IPayload.IPayload.md) | The payload to authenticate. |

#### Returns

`string`

___

### sign

▸ **sign**(`payload`, `rememberMe?`): `string`

Signs in a user with the given payload.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `payload` | `string` \| [`IPayload`](../interfaces/Authentication_IPayload.IPayload.md) | `undefined` | The payload to authenticate. |
| `rememberMe` | `boolean` | `false` | Should the token be remembered for a longer period. |

#### Returns

`string`

___

### verify

▸ **verify**(`token`): `boolean`

Verifies if the given token is valid or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The token to be verified. |

#### Returns

`boolean`
