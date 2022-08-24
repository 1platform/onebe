[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Authentication/Passport

# Module: Authentication/Passport

## Table of contents

### Interfaces

- [IInitStrategyOptions](../interfaces/Authentication_Passport.IInitStrategyOptions.md)

### Functions

- [initPassportStrategy](Authentication_Passport.md#initpassportstrategy)

## Functions

### initPassportStrategy

▸ **initPassportStrategy**(`props`): `void`

Function used to initialise the passport strategies that are used in the application.

This function will perform some initialisation calls for the serialization and
deserialization of the User object based on the Payload object. Also, it initialises
all the authentication methods exposed by the framework: bearer and basic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`IInitStrategyOptions`](../interfaces/Authentication_Passport.IInitStrategyOptions.md) | The properties used to initialise the passport strategies. |

#### Returns

`void`
