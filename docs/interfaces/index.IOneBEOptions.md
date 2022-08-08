[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / IOneBEOptions

# Interface: IOneBEOptions

[index](../modules/index.md).IOneBEOptions

Framework configuration options.

## Hierarchy

- [`IInitStrategyOptions`](Authentication_Passport.IInitStrategyOptions.md)

  ↳ **`IOneBEOptions`**

## Table of contents

### Properties

- [basicAuth](index.IOneBEOptions.md#basicauth)
- [configDir](index.IOneBEOptions.md#configdir)
- [controllersDir](index.IOneBEOptions.md#controllersdir)
- [currentDir](index.IOneBEOptions.md#currentdir)
- [deserializeUser](index.IOneBEOptions.md#deserializeuser)
- [noDBConnection](index.IOneBEOptions.md#nodbconnection)
- [serializeUser](index.IOneBEOptions.md#serializeuser)

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

#### Inherited from

[IInitStrategyOptions](Authentication_Passport.IInitStrategyOptions.md).[basicAuth](Authentication_Passport.IInitStrategyOptions.md#basicauth)

___

### configDir

• `Optional` **configDir**: `string`

The configuration directory.

___

### controllersDir

• `Optional` **controllersDir**: `string`

The controllers directory.

___

### currentDir

• `Optional` **currentDir**: `string`

The folder in which the application runs.

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

#### Inherited from

[IInitStrategyOptions](Authentication_Passport.IInitStrategyOptions.md).[deserializeUser](Authentication_Passport.IInitStrategyOptions.md#deserializeuser)

___

### noDBConnection

• `Optional` **noDBConnection**: `boolean`

Should the Database connection be made.

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

#### Inherited from

[IInitStrategyOptions](Authentication_Passport.IInitStrategyOptions.md).[serializeUser](Authentication_Passport.IInitStrategyOptions.md#serializeuser)
