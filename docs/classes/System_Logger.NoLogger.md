[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [System/Logger](../modules/System_Logger.md) / NoLogger

# Class: NoLogger

[System/Logger](../modules/System_Logger.md).NoLogger

The no logger logger that can be used in our application.

## Hierarchy

- [`Logger`](System_Logger.Logger.md)

  ↳ **`NoLogger`**

## Table of contents

### Constructors

- [constructor](System_Logger.NoLogger.md#constructor)

### Properties

- [\_log](System_Logger.NoLogger.md#_log)

### Accessors

- [log](System_Logger.NoLogger.md#log)

### Methods

- [debug](System_Logger.NoLogger.md#debug)
- [error](System_Logger.NoLogger.md#error)
- [info](System_Logger.NoLogger.md#info)
- [silly](System_Logger.NoLogger.md#silly)
- [verbose](System_Logger.NoLogger.md#verbose)
- [warn](System_Logger.NoLogger.md#warn)

## Constructors

### constructor

• **new NoLogger**()

The constructor of the logger class.

#### Overrides

[Logger](System_Logger.Logger.md).[constructor](System_Logger.Logger.md#constructor)

## Properties

### \_log

• `Protected` `Readonly` **\_log**: `Logger`

The logger object we will use for logging.

#### Inherited from

[Logger](System_Logger.Logger.md).[_log](System_Logger.Logger.md#_log)

## Accessors

### log

• `get` **log**(): `Logger`

Getter for the logger object.

#### Returns

`Logger`

#### Inherited from

Logger.log

## Methods

### debug

▸ **debug**(`message`, ...`meta`): `Logger`

Method to log a debug message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | The message to be logged. |
| `...meta` | `any`[] | Various other meta elements passed to the log method. |

#### Returns

`Logger`

#### Inherited from

[Logger](System_Logger.Logger.md).[debug](System_Logger.Logger.md#debug)

___

### error

▸ **error**(`message`, ...`meta`): `Logger`

Method to log a error message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | The message to be logged. |
| `...meta` | `any`[] | Various other meta elements passed to the log method. |

#### Returns

`Logger`

#### Inherited from

[Logger](System_Logger.Logger.md).[error](System_Logger.Logger.md#error)

___

### info

▸ **info**(`message`, ...`meta`): `Logger`

Method to log a info message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | The message to be logged. |
| `...meta` | `any`[] | Various other meta elements passed to the log method. |

#### Returns

`Logger`

#### Inherited from

[Logger](System_Logger.Logger.md).[info](System_Logger.Logger.md#info)

___

### silly

▸ **silly**(`message`, ...`meta`): `Logger`

Method to log a silly message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | The message to be logged. |
| `...meta` | `any`[] | Various other meta elements passed to the log method. |

#### Returns

`Logger`

#### Inherited from

[Logger](System_Logger.Logger.md).[silly](System_Logger.Logger.md#silly)

___

### verbose

▸ **verbose**(`message`, ...`meta`): `Logger`

Method to log a verbose message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | The message to be logged. |
| `...meta` | `any`[] | Various other meta elements passed to the log method. |

#### Returns

`Logger`

#### Inherited from

[Logger](System_Logger.Logger.md).[verbose](System_Logger.Logger.md#verbose)

___

### warn

▸ **warn**(`message`, ...`meta`): `Logger`

Method to log a warn message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | The message to be logged. |
| `...meta` | `any`[] | Various other meta elements passed to the log method. |

#### Returns

`Logger`

#### Inherited from

[Logger](System_Logger.Logger.md).[warn](System_Logger.Logger.md#warn)
