[Spark OneBE - v1.0.28](../README.md) / [Exports](../modules.md) / [Authentication/Passport](../modules/Authentication_Passport.md) / [passport](../modules/Authentication_Passport.passport.md) / Authenticator

# Interface: Authenticator<InitializeRet, AuthenticateRet, AuthorizeRet, AuthorizeOptions\>

[Authentication/Passport](../modules/Authentication_Passport.md).[passport](../modules/Authentication_Passport.passport.md).Authenticator

## Type parameters

| Name | Type |
| :------ | :------ |
| `InitializeRet` | `express.Handler` |
| `AuthenticateRet` | `any` |
| `AuthorizeRet` | `AuthenticateRet` |
| `AuthorizeOptions` | [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md) |

## Hierarchy

- **`Authenticator`**

  ↳ [`PassportStatic`](Authentication_Passport.passport.PassportStatic.md)

## Table of contents

### Methods

- [authenticate](Authentication_Passport.passport.Authenticator.md#authenticate)
- [authorize](Authentication_Passport.passport.Authenticator.md#authorize)
- [deserializeUser](Authentication_Passport.passport.Authenticator.md#deserializeuser)
- [framework](Authentication_Passport.passport.Authenticator.md#framework)
- [initialize](Authentication_Passport.passport.Authenticator.md#initialize)
- [serializeUser](Authentication_Passport.passport.Authenticator.md#serializeuser)
- [session](Authentication_Passport.passport.Authenticator.md#session)
- [transformAuthInfo](Authentication_Passport.passport.Authenticator.md#transformauthinfo)
- [unuse](Authentication_Passport.passport.Authenticator.md#unuse)
- [use](Authentication_Passport.passport.Authenticator.md#use)

## Methods

### authenticate

▸ **authenticate**(`strategy`, `callback?`): `AuthenticateRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] \| [`Strategy`](Authentication_Passport.passport.Strategy.md) |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`AuthenticateRet`

▸ **authenticate**(`strategy`, `options`, `callback?`): `AuthenticateRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] \| [`Strategy`](Authentication_Passport.passport.Strategy.md) |
| `options` | [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md) |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`AuthenticateRet`

___

### authorize

▸ **authorize**(`strategy`, `callback?`): `AuthorizeRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`AuthorizeRet`

▸ **authorize**(`strategy`, `options`, `callback?`): `AuthorizeRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] |
| `options` | `AuthorizeOptions` |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`AuthorizeRet`

___

### deserializeUser

▸ **deserializeUser**<`TID`\>(`fn`): `void`

#### Type parameters

| Name |
| :------ |
| `TID` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`id`: `TID`, `done`: (`err`: `any`, `user?`: ``false`` \| `User`) => `void`) => `void` |

#### Returns

`void`

▸ **deserializeUser**<`TID`, `TR`\>(`fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TID` | `TID` |
| `TR` | extends `IncomingMessage`<`TR`\> = `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`req`: `TR`, `id`: `TID`, `done`: (`err`: `any`, `user?`: ``false`` \| `User`) => `void`) => `void` |

#### Returns

`void`

___

### framework

▸ **framework**<`X`, `Y`, `Z`\>(`fw`): [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`X`, `Y`, `Z`, [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md)\>

#### Type parameters

| Name |
| :------ |
| `X` |
| `Y` |
| `Z` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fw` | [`Framework`](Authentication_Passport.passport.Framework.md)<`X`, `Y`, `Z`\> |

#### Returns

[`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`X`, `Y`, `Z`, [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md)\>

___

### initialize

▸ **initialize**(`options?`): `InitializeRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.userProperty` | `string` |

#### Returns

`InitializeRet`

___

### serializeUser

▸ **serializeUser**<`TID`\>(`fn`): `void`

#### Type parameters

| Name |
| :------ |
| `TID` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`user`: `User`, `done`: (`err`: `any`, `id?`: `TID`) => `void`) => `void` |

#### Returns

`void`

▸ **serializeUser**<`TID`, `TR`\>(`fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TID` | `TID` |
| `TR` | extends `IncomingMessage`<`TR`\> = `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`req`: `TR`, `user`: `User`, `done`: (`err`: `any`, `id?`: `TID`) => `void`) => `void` |

#### Returns

`void`

___

### session

▸ **session**(`options?`): `AuthenticateRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.pauseStream` | `boolean` |

#### Returns

`AuthenticateRet`

___

### transformAuthInfo

▸ **transformAuthInfo**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`info`: `any`, `done`: (`err`: `any`, `info`: `any`) => `void`) => `void` |

#### Returns

`void`

___

### unuse

▸ **unuse**(`name`): [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, `AuthorizeOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, `AuthorizeOptions`\>

___

### use

▸ **use**(`strategy`): [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, `AuthorizeOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`Strategy`](Authentication_Passport.passport.Strategy.md) |

#### Returns

[`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, `AuthorizeOptions`\>

▸ **use**(`name`, `strategy`): [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, `AuthorizeOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `strategy` | [`Strategy`](Authentication_Passport.passport.Strategy.md) |

#### Returns

[`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, `AuthorizeOptions`\>
