[OneBE Framework - v2.4.9](../README.md) / [Exports](../modules.md) / [Router/AuthContextAPI](../modules/Router_AuthContextAPI.md) / AuthContextAPI

# Class: AuthContextAPI

[Router/AuthContextAPI](../modules/Router_AuthContextAPI.md).AuthContextAPI

A class used to expose the Authentication Context information from a request.

This context will handle everything related to the authentication and
authorisation part of your application.

## Table of contents

### Constructors

- [constructor](Router_AuthContextAPI.AuthContextAPI.md#constructor)

### Accessors

- [isAuthenticated](Router_AuthContextAPI.AuthContextAPI.md#isauthenticated)
- [token](Router_AuthContextAPI.AuthContextAPI.md#token)
- [user](Router_AuthContextAPI.AuthContextAPI.md#user)

### Methods

- [get](Router_AuthContextAPI.AuthContextAPI.md#get)
- [logout](Router_AuthContextAPI.AuthContextAPI.md#logout)
- [set](Router_AuthContextAPI.AuthContextAPI.md#set)

## Constructors

### constructor

• **new AuthContextAPI**(`request`, `baseStore?`)

Authentication Context constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | The Request for which we serve the Authentication Context. |
| `baseStore?` | `Record`<`string`, `unknown`\> | The store with Authentication Data. |

## Accessors

### isAuthenticated

• `get` **isAuthenticated**(): `boolean`

Getter for the isAuthenticated flag.

#### Returns

`boolean`

___

### token

• `get` **token**(): `string`

Getter for the Bearer token.

#### Returns

`string`

___

### user

• `get` **user**(): `User`

Getter for the User object from the request.

#### Returns

`User`

## Methods

### get

▸ **get**<`T`\>(`key`): `T`

Getter function for elements from the authentication store.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for which you need information. |

#### Returns

`T`

___

### logout

▸ **logout**(): `void`

Method used to log the user out from the application.

#### Returns

`void`

___

### set

▸ **set**<`T`\>(`key`, `value`): `void`

Setter function for elements into the authentication store.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key on which you set information. |
| `value` | `T` | The value which you want to store. |

#### Returns

`void`
