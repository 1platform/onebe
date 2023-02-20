[OneBE Framework - v2.6.2](../README.md) / [Exports](../modules.md) / [Authentication/Passport](../modules/Authentication_Passport.md) / IInitStrategyOptions

# Interface: IInitStrategyOptions

[Authentication/Passport](../modules/Authentication_Passport.md).IInitStrategyOptions

Definition of the Passport strategy initialization options.

## Hierarchy

- **`IInitStrategyOptions`**

  ↳ [`IInitOptions`](custom.IInitOptions.md)

## Table of contents

### Properties

- [basicAuth](Authentication_Passport.IInitStrategyOptions.md#basicauth)
- [deserializeUser](Authentication_Passport.IInitStrategyOptions.md#deserializeuser)
- [serializeUser](Authentication_Passport.IInitStrategyOptions.md#serializeuser)

## Properties

### basicAuth

• `Optional` **basicAuth**: (`username`: `string`, `password`: `string`, `done`: (`err`: `any`, `user?`: [`IUser`](Authentication_IUser.IUser.md)) => `void`) => `void`

#### Type declaration

▸ (`username`, `password`, `done`): `void`

The function used for basic authentication.

##### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |
| `done` | (`err`: `any`, `user?`: [`IUser`](Authentication_IUser.IUser.md)) => `void` |

##### Returns

`void`

___

### deserializeUser

• `Optional` **deserializeUser**: (`payload`: [`IPayload`](Authentication_IPayload.IPayload.md), `done`: (`err`: `any`, `user?`: [`IUser`](Authentication_IUser.IUser.md)) => `void`) => `void`

#### Type declaration

▸ (`payload`, `done`): `void`

The function used for Payload deserialization.

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`IPayload`](Authentication_IPayload.IPayload.md) |
| `done` | (`err`: `any`, `user?`: [`IUser`](Authentication_IUser.IUser.md)) => `void` |

##### Returns

`void`

___

### serializeUser

• `Optional` **serializeUser**: (`user`: [`IUser`](Authentication_IUser.IUser.md)) => [`IPayload`](Authentication_IPayload.IPayload.md)

#### Type declaration

▸ (`user`): [`IPayload`](Authentication_IPayload.IPayload.md)

The function used for User serialization.

##### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUser`](Authentication_IUser.IUser.md) |

##### Returns

[`IPayload`](Authentication_IPayload.IPayload.md)
