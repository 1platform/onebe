[Spark OneBE - v1.0.0](../README.md) / [Exports](../modules.md) / [Authentication/Passport](../modules/Authentication_Passport.md) / [passport](../modules/Authentication_Passport.passport.md) / StrategyCreatedStatic

# Interface: StrategyCreatedStatic

[Authentication/Passport](../modules/Authentication_Passport.md).[passport](../modules/Authentication_Passport.passport.md).StrategyCreatedStatic

## Table of contents

### Methods

- [error](Authentication_Passport.passport.StrategyCreatedStatic.md#error)
- [fail](Authentication_Passport.passport.StrategyCreatedStatic.md#fail)
- [pass](Authentication_Passport.passport.StrategyCreatedStatic.md#pass)
- [redirect](Authentication_Passport.passport.StrategyCreatedStatic.md#redirect)
- [success](Authentication_Passport.passport.StrategyCreatedStatic.md#success)

## Methods

### error

▸ **error**(`err`): `void`

Internal error while performing authentication.

Strategies should call this function when an internal error occurs
during the process of performing authentication; for example, if the
user directory is not available.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

___

### fail

▸ **fail**(`challenge?`, `status?`): `void`

Fail authentication, with optional `challenge` and `status`, defaulting
to 401.

Strategies should call this function to fail an authentication attempt.

#### Parameters

| Name | Type |
| :------ | :------ |
| `challenge?` | `string` \| `number` |
| `status?` | `number` |

#### Returns

`void`

___

### pass

▸ **pass**(): `void`

Pass without making a success or fail decision.

Under most circumstances, Strategies should not need to call this
function.  It exists primarily to allow previous authentication state
to be restored, for example from an HTTP session.

#### Returns

`void`

___

### redirect

▸ **redirect**(`url`, `status?`): `void`

Redirect to `url` with optional `status`, defaulting to 302.

Strategies should call this function to redirect the user (via their
user agent) to a third-party website for authentication.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `status?` | `number` |

#### Returns

`void`

___

### success

▸ **success**(`user`, `info?`): `void`

Authenticate `user`, with optional `info`.

Strategies should call this function to successfully authenticate a
user.  `user` should be an object supplied by the application after it
has been given an opportunity to verify credentials.  `info` is an
optional argument containing additional user information.  This is
useful for third-party authentication strategies to pass profile
details.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `User` |
| `info?` | `object` |

#### Returns

`void`
