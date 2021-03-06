[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Utils/StringUtils

# Module: Utils/StringUtils

## Table of contents

### Namespaces

- [formatter](Utils_StringUtils.formatter.md)

### Functions

- [comparePassword](Utils_StringUtils.md#comparepassword)
- [encryptPassword](Utils_StringUtils.md#encryptpassword)
- [formatter](Utils_StringUtils.md#formatter)
- [shortid](Utils_StringUtils.md#shortid)
- [stripHTML](Utils_StringUtils.md#striphtml)
- [uuidV1](Utils_StringUtils.md#uuidv1)
- [uuidV4](Utils_StringUtils.md#uuidv4)

## Functions

### comparePassword

▸ **comparePassword**(`password`, `encryptedPassword`): `boolean`

Compares an encrypted password with the one entered by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` | The password to be compared. |
| `encryptedPassword` | `string` | The encrypted password, |

#### Returns

`boolean`

___

### encryptPassword

▸ **encryptPassword**(`password`, `saltSize?`): `string`

Encrypt a password using the hash function from bcryptjs.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `password` | `string` | `undefined` | The password to be encrypted. |
| `saltSize` | `number` | `10` | The size of the salt. |

#### Returns

`string`

___

### formatter

▸ **formatter**(`template`, ...`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |
| `...args` | (`string` \| { `[k: string]`: `any`;  })[] |

#### Returns

`string`

___

### shortid

▸ **shortid**(): `string`

Generates a ShortID that can be used for various things.

#### Returns

`string`

___

### stripHTML

▸ **stripHTML**(`text`): `string`

Strips the HTML tags from a given text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to be striped. |

#### Returns

`string`

___

### uuidV1

▸ **uuidV1**(): `string`

Generate an UUID V1 code.

#### Returns

`string`

___

### uuidV4

▸ **uuidV4**(): `string`

Generate an UUID V4 code.

#### Returns

`string`
