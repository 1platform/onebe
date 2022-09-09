[OneBE Framework - v2.0.1](../README.md) / [Exports](../modules.md) / [System/Config](../modules/System_Config.md) / Configuration

# Class: Configuration

[System/Config](../modules/System_Config.md).Configuration

Configuration store, used to fetch (and store) configuration parameters that
can be used to enable/disable or setup various functionalities of the
application.

## Table of contents

### Constructors

- [constructor](System_Config.Configuration.md#constructor)

### Properties

- [\_config](System_Config.Configuration.md#_config)

### Methods

- [all](System_Config.Configuration.md#all)
- [array](System_Config.Configuration.md#array)
- [boolean](System_Config.Configuration.md#boolean)
- [clear](System_Config.Configuration.md#clear)
- [get](System_Config.Configuration.md#get)
- [init](System_Config.Configuration.md#init)
- [load](System_Config.Configuration.md#load)
- [number](System_Config.Configuration.md#number)
- [object](System_Config.Configuration.md#object)
- [string](System_Config.Configuration.md#string)

## Constructors

### constructor

• **new Configuration**()

Constructor of the configuration class.

## Properties

### \_config

• `Protected` **\_config**: [`IConfig`](../interfaces/System_IConfig.IConfig.md) = `{}`

The internal configuration store.

## Methods

### all

▸ **all**(): [`IConfig`](../interfaces/System_IConfig.IConfig.md)

Returns all the configuration properties.

#### Returns

[`IConfig`](../interfaces/System_IConfig.IConfig.md)

___

### array

▸ **array**(`key`, `defaultValue?`): `unknown`[]

Returns the array value of the given configuration key.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | The configuration key. |
| `defaultValue` | `any` | `null` | The default value if the configuration key doesn't exists. |

#### Returns

`unknown`[]

___

### boolean

▸ **boolean**(`key`): `boolean`

Returns the boolean value of the given configuration key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The configuration key. |

#### Returns

`boolean`

___

### clear

▸ **clear**(): `void`

Clears the internal configuration store.

#### Returns

`void`

___

### get

▸ **get**(`key`, `defaultValue?`): `string`

Returns the string value of the given configuration key.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | The configuration key. |
| `defaultValue` | `any` | `null` | The default value if the configuration key doesn't exists. |

#### Returns

`string`

___

### init

▸ **init**(`configFolder?`): `void`

Initializes the configuration object with values from the
configuration folder.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `configFolder` | `string` | `"./config"` | The folder containing the configuration files. |

#### Returns

`void`

___

### load

▸ **load**(`configStore`): `void`

Loads configuration items into our application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configStore` | [`IConfig`](../interfaces/System_IConfig.IConfig.md) | The configuration store that we want to merge into the local config. |

#### Returns

`void`

___

### number

▸ **number**(`key`, `defaultValue?`): `number`

Returns the numeric value of the given configuration key.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | The configuration key. |
| `defaultValue` | `number` | `0` | The default value if the configuration key doesn't exists. |

#### Returns

`number`

___

### object

▸ **object**(`key`, `defaultValue?`): `Record`<`string`, `unknown`\>

Returns the object value of the given configuration key.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | The configuration key. |
| `defaultValue` | `any` | `null` | The default value if the configuration key doesn't exists. |

#### Returns

`Record`<`string`, `unknown`\>

___

### string

▸ **string**(`key`, `defaultValue?`): `string`

Returns the string value of the given configuration key.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | The configuration key. |
| `defaultValue` | `string` | `""` | The default value if the configuration key doesn't exists. |

#### Returns

`string`
