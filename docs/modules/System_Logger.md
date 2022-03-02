[Spark OneBE - v1.0.25](../README.md) / [Exports](../modules.md) / System/Logger

# Module: System/Logger

## Table of contents

### Classes

- [ConsoleLogger](../classes/System_Logger.ConsoleLogger.md)
- [FileLogger](../classes/System_Logger.FileLogger.md)
- [Logger](../classes/System_Logger.Logger.md)
- [NoLogger](../classes/System_Logger.NoLogger.md)

### Functions

- [getDefaultLogger](System_Logger.md#getdefaultlogger)
- [setDefaultLogger](System_Logger.md#setdefaultlogger)

## Functions

### getDefaultLogger

▸ **getDefaultLogger**(): [`Logger`](../classes/System_Logger.Logger.md)

Function used to get the default logger of the application.

#### Returns

[`Logger`](../classes/System_Logger.Logger.md)

___

### setDefaultLogger

▸ **setDefaultLogger**(`newLogger`): `void`

Function used to change the default logger of the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newLogger` | [`Logger`](../classes/System_Logger.Logger.md) | The new logger instance. |

#### Returns

`void`
