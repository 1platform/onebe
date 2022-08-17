[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Authentication/Passport](Authentication_Passport.md) / passport

# Namespace: passport

[Authentication/Passport](Authentication_Passport.md).passport

Since we want to use only one passport instance throughout the application,
we export the passport instance used in the framework. To learn more about
this, go to: https://www.passportjs.org/. If you need additional authentication
methods, please create a new issue in GitHub.

**`Link`**

https://www.passportjs.org/

## Table of contents

### Interfaces

- [AuthenticateOptions](../interfaces/Authentication_Passport.passport.AuthenticateOptions.md)
- [Authenticator](../interfaces/Authentication_Passport.passport.Authenticator.md)
- [Framework](../interfaces/Authentication_Passport.passport.Framework.md)
- [PassportStatic](../interfaces/Authentication_Passport.passport.PassportStatic.md)
- [Profile](../interfaces/Authentication_Passport.passport.Profile.md)
- [Strategy](../interfaces/Authentication_Passport.passport.Strategy.md)
- [StrategyCreatedStatic](../interfaces/Authentication_Passport.passport.StrategyCreatedStatic.md)

### Type Aliases

- [StrategyCreated](Authentication_Passport.passport.md#strategycreated)

## Type Aliases

### StrategyCreated

Ƭ **StrategyCreated**<`T`, `O`\>: { [P in keyof O]: O[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | `T` & [`StrategyCreatedStatic`](../interfaces/Authentication_Passport.passport.StrategyCreatedStatic.md) |
