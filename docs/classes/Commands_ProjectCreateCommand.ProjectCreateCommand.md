[OneBE Framework - v2.6.0](../README.md) / [Exports](../modules.md) / [Commands/ProjectCreateCommand](../modules/Commands_ProjectCreateCommand.md) / ProjectCreateCommand

# Class: ProjectCreateCommand

[Commands/ProjectCreateCommand](../modules/Commands_ProjectCreateCommand.md).ProjectCreateCommand

CLI Command to create a new project.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_ProjectCreateCommand.ProjectCreateCommand.md#constructor)

### Properties

- [command](Commands_ProjectCreateCommand.ProjectCreateCommand.md#command)
- [describe](Commands_ProjectCreateCommand.ProjectCreateCommand.md#describe)

### Methods

- [builder](Commands_ProjectCreateCommand.ProjectCreateCommand.md#builder)
- [handler](Commands_ProjectCreateCommand.ProjectCreateCommand.md#handler)

## Constructors

### constructor

• **new ProjectCreateCommand**()

## Properties

### command

• **command**: `string` = `"project:create [projectName]"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Creates a new project."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `projectName`: `unknown`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `projectName`: `unknown`  }\>

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
