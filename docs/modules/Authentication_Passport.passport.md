[Spark OneBE - v1.0.19](../README.md) / [Exports](../modules.md) / [Authentication/Passport](Authentication_Passport.md) / passport

# Namespace: passport

[Authentication/Passport](Authentication_Passport.md).passport

The passport instance used throughout the framework.

## Table of contents

### Interfaces

- [AuthenticateOptions](../interfaces/Authentication_Passport.passport.AuthenticateOptions.md)
- [Authenticator](../interfaces/Authentication_Passport.passport.Authenticator.md)
- [Framework](../interfaces/Authentication_Passport.passport.Framework.md)
- [PassportStatic](../interfaces/Authentication_Passport.passport.PassportStatic.md)
- [Profile](../interfaces/Authentication_Passport.passport.Profile.md)
- [Strategy](../interfaces/Authentication_Passport.passport.Strategy.md)
- [StrategyCreatedStatic](../interfaces/Authentication_Passport.passport.StrategyCreatedStatic.md)

### Type aliases

- [StrategyCreated](Authentication_Passport.passport.md#strategycreated)

## Type aliases

### StrategyCreated

Ƭ **StrategyCreated**<`T`, `O`\>: { [P in keyof O]: O[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | `T` & [`StrategyCreatedStatic`](../interfaces/Authentication_Passport.passport.StrategyCreatedStatic.md) |
