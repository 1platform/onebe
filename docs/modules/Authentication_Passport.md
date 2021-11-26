[Spark OneBE - v1.0.10](../README.md) / [Exports](../modules.md) / Authentication/Passport

# Module: Authentication/Passport

## Table of contents

### Namespaces

- [passport](Authentication_Passport.passport.md)

### Interfaces

- [IInitStrategyOptions](../interfaces/Authentication_Passport.IInitStrategyOptions.md)

### Variables

- [passport](Authentication_Passport.md#passport)

### Functions

- [initPassportStrategy](Authentication_Passport.md#initpassportstrategy)

## Variables

### passport

• **passport**: [`PassportStatic`](../interfaces/Authentication_Passport.passport.PassportStatic.md)

The passport instance used throughout the framework.

## Functions

### initPassportStrategy

▸ **initPassportStrategy**(`props`): `void`

Passport strategies and serialization/deserialization initialisation function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`IInitStrategyOptions`](../interfaces/Authentication_Passport.IInitStrategyOptions.md) | The properties passed to the init function. |

#### Returns

`void`
