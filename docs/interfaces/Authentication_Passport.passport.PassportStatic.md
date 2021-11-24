[Spark OneBE - v1.0.4](../README.md) / [Exports](../modules.md) / [Authentication/Passport](../modules/Authentication_Passport.md) / [passport](../modules/Authentication_Passport.passport.md) / PassportStatic

# Interface: PassportStatic

[Authentication/Passport](../modules/Authentication_Passport.md).[passport](../modules/Authentication_Passport.passport.md).PassportStatic

## Hierarchy

- [`Authenticator`](Authentication_Passport.passport.Authenticator.md)

  ↳ **`PassportStatic`**

## Table of contents

### Properties

- [Authenticator](Authentication_Passport.passport.PassportStatic.md#authenticator)
- [Passport](Authentication_Passport.passport.PassportStatic.md#passport)
- [Strategy](Authentication_Passport.passport.PassportStatic.md#strategy)

### Methods

- [authenticate](Authentication_Passport.passport.PassportStatic.md#authenticate)
- [authorize](Authentication_Passport.passport.PassportStatic.md#authorize)
- [deserializeUser](Authentication_Passport.passport.PassportStatic.md#deserializeuser)
- [framework](Authentication_Passport.passport.PassportStatic.md#framework)
- [initialize](Authentication_Passport.passport.PassportStatic.md#initialize)
- [serializeUser](Authentication_Passport.passport.PassportStatic.md#serializeuser)
- [session](Authentication_Passport.passport.PassportStatic.md#session)
- [transformAuthInfo](Authentication_Passport.passport.PassportStatic.md#transformauthinfo)
- [unuse](Authentication_Passport.passport.PassportStatic.md#unuse)
- [use](Authentication_Passport.passport.PassportStatic.md#use)

## Properties

### Authenticator

• **Authenticator**: () => [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`Handler`, `any`, `any`, [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md)\>

#### Type declaration

• **new PassportStatic**()

___

### Passport

• **Passport**: () => [`Authenticator`](Authentication_Passport.passport.Authenticator.md)<`Handler`, `any`, `any`, [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md)\>

#### Type declaration

• **new PassportStatic**()

___

### Strategy

• **Strategy**: () => [`Strategy`](Authentication_Passport.passport.Strategy.md) & [`StrategyCreatedStatic`](Authentication_Passport.passport.StrategyCreatedStatic.md)

#### Type declaration

• **new PassportStatic**()

## Methods

### authenticate

▸ **authenticate**(`strategy`, `callback?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] \| [`Strategy`](Authentication_Passport.passport.Strategy.md) |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`any`

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[authenticate](Authentication_Passport.passport.Authenticator.md#authenticate)

▸ **authenticate**(`strategy`, `options`, `callback?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] \| [`Strategy`](Authentication_Passport.passport.Strategy.md) |
| `options` | [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md) |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`any`

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[authenticate](Authentication_Passport.passport.Authenticator.md#authenticate)

___

### authorize

▸ **authorize**(`strategy`, `callback?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`any`

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[authorize](Authentication_Passport.passport.Authenticator.md#authorize)

▸ **authorize**(`strategy`, `options`, `callback?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` \| `string`[] |
| `options` | [`AuthenticateOptions`](Authentication_Passport.passport.AuthenticateOptions.md) |
| `callback?` | (...`args`: `any`[]) => `any` |

#### Returns

`any`

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[authorize](Authentication_Passport.passport.Authenticator.md#authorize)

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

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[deserializeUser](Authentication_Passport.passport.Authenticator.md#deserializeuser)

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

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[deserializeUser](Authentication_Passport.passport.Authenticator.md#deserializeuser)

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

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[framework](Authentication_Passport.passport.Authenticator.md#framework)

___

### initialize

▸ **initialize**(`options?`): `Handler`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.userProperty` | `string` |

#### Returns

`Handler`

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[initialize](Authentication_Passport.passport.Authenticator.md#initialize)

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

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[serializeUser](Authentication_Passport.passport.Authenticator.md#serializeuser)

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

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[serializeUser](Authentication_Passport.passport.Authenticator.md#serializeuser)

___

### session

▸ **session**(`options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.pauseStream` | `boolean` |

#### Returns

`any`

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[session](Authentication_Passport.passport.Authenticator.md#session)

___

### transformAuthInfo

▸ **transformAuthInfo**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`info`: `any`, `done`: (`err`: `any`, `info`: `any`) => `void`) => `void` |

#### Returns

`void`

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[transformAuthInfo](Authentication_Passport.passport.Authenticator.md#transformauthinfo)

___

### unuse

▸ **unuse**(`name`): [`PassportStatic`](Authentication_Passport.passport.PassportStatic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`PassportStatic`](Authentication_Passport.passport.PassportStatic.md)

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[unuse](Authentication_Passport.passport.Authenticator.md#unuse)

___

### use

▸ **use**(`strategy`): [`PassportStatic`](Authentication_Passport.passport.PassportStatic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`Strategy`](Authentication_Passport.passport.Strategy.md) |

#### Returns

[`PassportStatic`](Authentication_Passport.passport.PassportStatic.md)

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[use](Authentication_Passport.passport.Authenticator.md#use)

▸ **use**(`name`, `strategy`): [`PassportStatic`](Authentication_Passport.passport.PassportStatic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `strategy` | [`Strategy`](Authentication_Passport.passport.Strategy.md) |

#### Returns

[`PassportStatic`](Authentication_Passport.passport.PassportStatic.md)

#### Inherited from

[Authenticator](Authentication_Passport.passport.Authenticator.md).[use](Authentication_Passport.passport.Authenticator.md#use)
