[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [System/Logger](../modules/System_Logger.md) / Logger

# Class: Logger

[System/Logger](../modules/System_Logger.md).Logger

The base logger class.

## Hierarchy

- **`Logger`**

  ↳ [`ConsoleLogger`](System_Logger.ConsoleLogger.md)

  ↳ [`FileLogger`](System_Logger.FileLogger.md)

  ↳ [`NoLogger`](System_Logger.NoLogger.md)

## Table of contents

### Constructors

- [constructor](System_Logger.Logger.md#constructor)

### Properties

- [\_log](System_Logger.Logger.md#_log)

### Accessors

- [log](System_Logger.Logger.md#log)

### Methods

- [debug](System_Logger.Logger.md#debug)
- [error](System_Logger.Logger.md#error)
- [info](System_Logger.Logger.md#info)
- [silly](System_Logger.Logger.md#silly)
- [verbose](System_Logger.Logger.md#verbose)
- [warn](System_Logger.Logger.md#warn)

## Constructors

### constructor

• **new Logger**(`logLevel`, `transport`)

The constructor of the logger class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logLevel` | [`LogLevel`](../enums/System_LogLevel.LogLevel.md) | The level of logging we will use in our application. |
| `transport` | `TransportStream` | The transport used for the winston logger. |

## Properties

### \_log

• `Protected` `Readonly` **\_log**: `Logger`

The logger object we will use for logging.

## Accessors

### log

• `get` **log**(): `Logger`

Getter for the logger object.

#### Returns

`Logger`

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
