[OneBE Framework - v2.6.16](../README.md) / [Exports](../modules.md) / MFA/SimpleMFA

# Module: MFA/SimpleMFA

## Table of contents

### Functions

- [generateAlfaCode](MFA_SimpleMFA.md#generatealfacode)
- [generateNumericCode](MFA_SimpleMFA.md#generatenumericcode)

## Functions

### generateAlfaCode

▸ **generateAlfaCode**(): `string`

Function used to generate a random string code that can be used as a way
to check if the real user tried to perform an action or log into their
account.

#### Returns

`string`

___

### generateNumericCode

▸ **generateNumericCode**(`size?`): `string`

Function used to generate a random numeric code that can be used as a way
to check if the real user tried to perform an action or log into their
account.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `size?` | `number` | `6` | The length of the MFA code. |

#### Returns

`string`
