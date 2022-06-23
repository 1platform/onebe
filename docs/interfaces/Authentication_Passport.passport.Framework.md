[Spark OneBE - v1.0.29](../README.md) / [Exports](../modules.md) / [Authentication/Passport](../modules/Authentication_Passport.md) / [passport](../modules/Authentication_Passport.passport.md) / Framework

# Interface: Framework<InitializeRet, AuthenticateRet, AuthorizeRet\>

[Authentication/Passport](../modules/Authentication_Passport.md).[passport](../modules/Authentication_Passport.passport.md).Framework

## Type parameters

| Name | Type |
| :------ | :------ |
| `InitializeRet` | `any` |
| `AuthenticateRet` | `any` |
| `AuthorizeRet` | `AuthenticateRet` |

## Table of contents

### Methods

- [authenticate](Authentication_Passport.passport.Framework.md#authenticate)
- [authorize](Authentication_Passport.passport.Framework.md#authorize)
- [initialize](Authentication_Passport.passport.Framework.md#initialize)

## Methods

### authenticate

▸ **authenticate**(`passport`, `name`, `options?`, `callback?`): (...`args`: `any`[]) => `AuthenticateRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passport` | [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md)\> |
| `name` | `string` |
| `options?` | `any` |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`fn`

▸ (...`args`): `AuthenticateRet`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`AuthenticateRet`

___

### authorize

▸ `Optional` **authorize**(`passport`, `name`, `options?`, `callback?`): (...`args`: `any`[]) => `AuthorizeRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passport` | [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md)\> |
| `name` | `string` |
| `options?` | `any` |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`fn`

▸ (...`args`): `AuthorizeRet`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`AuthorizeRet`

___

### initialize

▸ **initialize**(`passport`, `options?`): (...`args`: `any`[]) => `InitializeRet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passport` | [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`InitializeRet`, `AuthenticateRet`, `AuthorizeRet`, [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md)\> |
| `options?` | `any` |

#### Returns

`fn`

▸ (...`args`): `InitializeRet`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`InitializeRet`
