[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IAuthContext

# Interface: IAuthContext

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).IAuthContext

The authentication context parameter.

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [isAuthenticated](Router_RouteInterfaces.IAuthContext.md#isauthenticated)
- [logout](Router_RouteInterfaces.IAuthContext.md#logout)
- [token](Router_RouteInterfaces.IAuthContext.md#token)
- [user](Router_RouteInterfaces.IAuthContext.md#user)

## Properties

### isAuthenticated

• `Optional` **isAuthenticated**: () => `boolean`

#### Type declaration

▸ (): `boolean`

Method to check if the user is authenticated or not.

##### Returns

`boolean`

___

### logout

• `Optional` **logout**: () => `void`

#### Type declaration

▸ (): `void`

Logs a user out of the application.

##### Returns

`void`

___

### token

• `Optional` **token**: `string`

The token received from the bearer authorization header.

___

### user

• `Optional` **user**: [`IUser`](Authentication_IUser.IUser.md)

The user object.
