[OneBE Framework - v2.2.5](../README.md) / [Exports](../modules.md) / [Commands/JobCreateCommand](../modules/Commands_JobCreateCommand.md) / JobCreateCommand

# Class: JobCreateCommand

[Commands/JobCreateCommand](../modules/Commands_JobCreateCommand.md).JobCreateCommand

CLI Command to create a new job.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_JobCreateCommand.JobCreateCommand.md#constructor)

### Properties

- [command](Commands_JobCreateCommand.JobCreateCommand.md#command)
- [describe](Commands_JobCreateCommand.JobCreateCommand.md#describe)

### Methods

- [builder](Commands_JobCreateCommand.JobCreateCommand.md#builder)
- [handler](Commands_JobCreateCommand.JobCreateCommand.md#handler)

## Constructors

### constructor

• **new JobCreateCommand**()

## Properties

### command

• **command**: `string` = `"job:create <jobName>"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Creates a new job file."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `jobName`: `unknown`  } & { `override`: `boolean`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `jobName`: `unknown`  } & { `override`: `boolean`  }\>

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
