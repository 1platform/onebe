[OneBE Framework - v2.4.8](../README.md) / [Exports](../modules.md) / System/Logger

# Module: System/Logger

## Table of contents

### References

- [LogLevel](System_Logger.md#loglevel)
- [LoggerType](System_Logger.md#loggertype)

### Classes

- [ConsoleLogger](../classes/System_Logger.ConsoleLogger.md)
- [FileLogger](../classes/System_Logger.FileLogger.md)
- [JSONLogger](../classes/System_Logger.JSONLogger.md)
- [Logger](../classes/System_Logger.Logger.md)
- [NoLogger](../classes/System_Logger.NoLogger.md)

### Functions

- [getDefaultLogger](System_Logger.md#getdefaultlogger)
- [setDefaultLogger](System_Logger.md#setdefaultlogger)

## References

### LogLevel

Re-exports [LogLevel](../enums/System_LogLevel.LogLevel.md)

___

### LoggerType

Re-exports [LoggerType](../enums/System_LoggerType.LoggerType.md)

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
