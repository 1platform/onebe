[OneBE Framework - v2.6.5](../README.md) / [Exports](../modules.md) / [custom](../modules/custom.md) / IInitOptions

# Interface: IInitOptions

[custom](../modules/custom.md).IInitOptions

Framework initialisation options.

When starting the application, you need to pass some information
for configuring the startup procedures of the framework.

## Hierarchy

- [`IInitStrategyOptions`](Authentication_Passport.IInitStrategyOptions.md)

  ↳ **`IInitOptions`**

## Table of contents

### Properties

- [basicAuth](custom.IInitOptions.md#basicauth)
- [configFolder](custom.IInitOptions.md#configfolder)
- [currentFolder](custom.IInitOptions.md#currentfolder)
- [deserializeUser](custom.IInitOptions.md#deserializeuser)
- [noDBConnection](custom.IInitOptions.md#nodbconnection)
- [routesFolder](custom.IInitOptions.md#routesfolder)
- [serializeUser](custom.IInitOptions.md#serializeuser)

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

### configFolder

• `Optional` **configFolder**: `string`

The location of the configuration files. The framework needs only a
relative path to be provided, relative to the `currentFolder` parameter
specified above.

___

### currentFolder

• `Optional` **currentFolder**: `string`

The folder in which the application runs. Based on this folder,
some configuration for various other files and subsystems is generated
and used. For example, the Configuration loader and Internationalisation
file loader are started and made to look for various files starting from
the current folder.

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

Flag to mark if you need a database connection to be initialised
on startup or not. This flag is used when launching the TypeORM
migration system.

___

### routesFolder

• `Optional` **routesFolder**: `string`

The location of the controllers used in the application. The framework
needs only a relative path to be provided, relative to the `currentFolder`
parameter specified above.

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
