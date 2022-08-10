[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/Helpers/AuthContextAPI](../modules/Documentation_Helpers_AuthContextAPI.md) / AuthContextAPI

# Class: AuthContextAPI

[Documentation/Helpers/AuthContextAPI](../modules/Documentation_Helpers_AuthContextAPI.md).AuthContextAPI

## Table of contents

### Constructors

- [constructor](Documentation_Helpers_AuthContextAPI.AuthContextAPI.md#constructor)

### Accessors

- [isAuthenticated](Documentation_Helpers_AuthContextAPI.AuthContextAPI.md#isauthenticated)
- [token](Documentation_Helpers_AuthContextAPI.AuthContextAPI.md#token)
- [user](Documentation_Helpers_AuthContextAPI.AuthContextAPI.md#user)

### Methods

- [get](Documentation_Helpers_AuthContextAPI.AuthContextAPI.md#get)
- [logout](Documentation_Helpers_AuthContextAPI.AuthContextAPI.md#logout)
- [set](Documentation_Helpers_AuthContextAPI.AuthContextAPI.md#set)

## Constructors

### constructor

• **new AuthContextAPI**(`request`, `baseStore?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `baseStore?` | `Record`<`string`, `unknown`\> |

## Accessors

### isAuthenticated

• `get` **isAuthenticated**(): `boolean`

#### Returns

`boolean`

___

### token

• `get` **token**(): `string`

#### Returns

`string`

___

### user

• `get` **user**(): `User`

#### Returns

`User`

## Methods

### get

▸ **get**<`T`\>(`key`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

___

### set

▸ **set**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`