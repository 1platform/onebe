[Spark OneBE - v1.0.17](../README.md) / [Exports](../modules.md) / [System/Env](../modules/System_Env.md) / Environment

# Class: Environment

[System/Env](../modules/System_Env.md).Environment

The environment handling class. Use the object exported
by the module to get various environment variable values.

## Table of contents

### Constructors

- [constructor](System_Env.Environment.md#constructor)

### Methods

- [boolean](System_Env.Environment.md#boolean)
- [flag](System_Env.Environment.md#flag)
- [get](System_Env.Environment.md#get)
- [int](System_Env.Environment.md#int)
- [number](System_Env.Environment.md#number)
- [string](System_Env.Environment.md#string)

## Constructors

### constructor

• **new Environment**()

## Methods

### boolean

▸ **boolean**(`field`): `boolean`

Returns the boolean value of a given environment variable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `string` | The name of the flag. |

#### Returns

`boolean`

___

### flag

▸ **flag**(`flagName`): `boolean`

An alias for the Env.bool method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flagName` | `string` | The name of the flag. |

#### Returns

`boolean`

___

### get

▸ **get**(`field`, `defaultValue?`): `string`

Returns the value of a given environment variable.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `field` | `string` | `undefined` | The name of the environmental variable. |
| `defaultValue` | `any` | `null` | The default value if the variable doesn't exists. |

#### Returns

`string`

___

### int

▸ **int**(`field`, `defaultValue?`): `number`

Returns the integer value of a given environment variable.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `field` | `string` | `undefined` | The name of the environmental variable. |
| `defaultValue` | `number` | `0` | The default value if the variable doesn't exists. |

#### Returns

`number`

___

### number

▸ **number**(`field`, `defaultValue?`): `number`

Returns the number value of a given environment variable.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `field` | `string` | `undefined` | The name of the environmental variable. |
| `defaultValue` | `number` | `0` | The default value if the variable doesn't exists. |

#### Returns

`number`

___

### string

▸ **string**(`field`, `defaultValue?`): `string`

An alias for the Env.get method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `field` | `string` | `undefined` | The name of the environmental variable. |
| `defaultValue` | `string` | `""` | The default value if the variable doesn't exists. |

#### Returns

`string`
