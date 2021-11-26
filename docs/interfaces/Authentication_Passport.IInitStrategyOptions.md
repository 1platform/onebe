[Spark OneBE - v1.0.8](../README.md) / [Exports](../modules.md) / [Authentication/Passport](../modules/Authentication_Passport.md) / IInitStrategyOptions

# Interface: IInitStrategyOptions

[Authentication/Passport](../modules/Authentication_Passport.md).IInitStrategyOptions

Passport strategy initialisation method options.

## Hierarchy

- **`IInitStrategyOptions`**

  ↳ [`IOneBEOptions`](index.IOneBEOptions.md)

## Table of contents

### Methods

- [basicAuth](Authentication_Passport.IInitStrategyOptions.md#basicauth)
- [deserializeUser](Authentication_Passport.IInitStrategyOptions.md#deserializeuser)
- [serializeUser](Authentication_Passport.IInitStrategyOptions.md#serializeuser)

## Methods

### basicAuth

▸ `Optional` **basicAuth**(`username`, `password`, `done`): `void`

The function used for basic authentication.

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |
| `done` | (`err`: `any`, `user?`: [`IUser`](Authentication_IUser.IUser.md)) => `void` |

#### Returns

`void`

___

### deserializeUser

▸ `Optional` **deserializeUser**(`payload`, `done`): `void`

The function used for Payload deserialization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`IPayload`](Authentication_IPayload.IPayload.md) |
| `done` | (`err`: `any`, `user?`: [`IUser`](Authentication_IUser.IUser.md)) => `void` |

#### Returns

`void`

___

### serializeUser

▸ `Optional` **serializeUser**(`user`): [`IPayload`](Authentication_IPayload.IPayload.md)

The function used for User serialization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUser`](Authentication_IUser.IUser.md) |

#### Returns

[`IPayload`](Authentication_IPayload.IPayload.md)
