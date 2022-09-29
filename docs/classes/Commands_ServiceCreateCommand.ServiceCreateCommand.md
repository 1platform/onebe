[OneBE Framework - v2.1.5](../README.md) / [Exports](../modules.md) / [Commands/ServiceCreateCommand](../modules/Commands_ServiceCreateCommand.md) / ServiceCreateCommand

# Class: ServiceCreateCommand

[Commands/ServiceCreateCommand](../modules/Commands_ServiceCreateCommand.md).ServiceCreateCommand

CLI Command to create a new service.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_ServiceCreateCommand.ServiceCreateCommand.md#constructor)

### Properties

- [command](Commands_ServiceCreateCommand.ServiceCreateCommand.md#command)
- [describe](Commands_ServiceCreateCommand.ServiceCreateCommand.md#describe)

### Methods

- [builder](Commands_ServiceCreateCommand.ServiceCreateCommand.md#builder)
- [handler](Commands_ServiceCreateCommand.ServiceCreateCommand.md#handler)

## Constructors

### constructor

• **new ServiceCreateCommand**()

## Properties

### command

• **command**: `string` = `"service:create <serviceName>"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Creates a new service file."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `serviceName`: `unknown`  } & { `validator`: `boolean`  } & { `repository`: `string`  } & { `type`: `string`  } & { `override`: `boolean`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `serviceName`: `unknown`  } & { `validator`: `boolean`  } & { `repository`: `string`  } & { `type`: `string`  } & { `override`: `boolean`  }\>

#### Implementation of

CommandModule.builder

___

### handler

▸ **handler**(`args`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to run the command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `any` | A list with arguments and options sent by the user to the command. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Implementation of

CommandModule.handler
