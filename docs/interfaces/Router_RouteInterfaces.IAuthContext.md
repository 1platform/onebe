[Spark OneBE - v1.0.3](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IAuthContext

# Interface: IAuthContext

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).IAuthContext

The authentication context parameter.

## Indexable

▪ [key: `string`]: `any`

Indexer for any other authentication context option.

## Table of contents

### Properties

- [user](Router_RouteInterfaces.IAuthContext.md#user)

### Methods

- [isAuthenticated](Router_RouteInterfaces.IAuthContext.md#isauthenticated)

## Properties

### user

• `Optional` **user**: [`IUser`](Authentication_IUser.IUser.md)

The user object.

## Methods

### isAuthenticated

▸ `Optional` **isAuthenticated**(): `boolean`

Method to check if the user is authenticated or not.

#### Returns

`boolean`
