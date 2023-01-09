[OneBE Framework - v2.4.5](../README.md) / [Exports](../modules.md) / Utils/StringUtils

# Module: Utils/StringUtils

## Table of contents

### Functions

- [abbreviate](Utils_StringUtils.md#abbreviate)
- [camelCase](Utils_StringUtils.md#camelcase)
- [comparePassword](Utils_StringUtils.md#comparepassword)
- [encryptPassword](Utils_StringUtils.md#encryptpassword)
- [shortid](Utils_StringUtils.md#shortid)
- [slugify](Utils_StringUtils.md#slugify)
- [snakeCase](Utils_StringUtils.md#snakecase)
- [stripHTML](Utils_StringUtils.md#striphtml)
- [titleCase](Utils_StringUtils.md#titlecase)
- [uuidV1](Utils_StringUtils.md#uuidv1)
- [uuidV4](Utils_StringUtils.md#uuidv4)

## Functions

### abbreviate

▸ **abbreviate**(`str`, `abbrLettersCount?`): `string`

Builds abbreviated string from given string;

**`See`**

https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | The string to be abbreviated. |
| `abbrLettersCount` | `number` | `1` | How many letters to be used for the abbreviation. |

#### Returns

`string`

___

### camelCase

▸ **camelCase**(`str`, `firstCapital?`): `string`

Converts string into camelCase.

**`See`**

https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | The string to be Camel Cased. |
| `firstCapital` | `boolean` | `false` | Flag to mark the first letter as a capital one. |

#### Returns

`string`

___

### comparePassword

▸ **comparePassword**(`password`, `encryptedPassword`): `boolean`

Method used to compare an encrypted password with the one entered by the user.

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

Method used to encrypt a password using the hash function from bcryptjs.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `password` | `string` | `undefined` | The password to be encrypted. |
| `saltSize` | `number` | `10` | The size of the salt. |

#### Returns

`string`

___

### shortid

▸ **shortid**(): `string`

Generator for a ShortID that can be used for various things.

#### Returns

`string`

___

### slugify

▸ **slugify**(`str`): `string`

Generate a slug based on the given string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to be converted to a slug. |

#### Returns

`string`

___

### snakeCase

▸ **snakeCase**(`str`, `separator?`): `string`

Converts string into snake_case.

**`See`**

https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | The string to be Snake Cased. |
| `separator?` | `string` | `"_"` | A separator to be used when converting to snake_case. |

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

### titleCase

▸ **titleCase**(`str`): `string`

Converts string into Title Case.

**`See`**

https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to be Title Cased |

#### Returns

`string`

___

### uuidV1

▸ **uuidV1**(): `string`

Generator for a UUID V1 code.

#### Returns

`string`

___

### uuidV4

▸ **uuidV4**(): `string`

Generator for a UUID V4 code.

#### Returns

`string`
