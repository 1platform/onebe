[OneBE Framework - v2.0.1](../README.md) / [Exports](../modules.md) / [Commands/MigrationRunCommand](../modules/Commands_MigrationRunCommand.md) / MigrationRunCommand

# Class: MigrationRunCommand

[Commands/MigrationRunCommand](../modules/Commands_MigrationRunCommand.md).MigrationRunCommand

CLI Command to apply all pending migrations onto the database.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_MigrationRunCommand.MigrationRunCommand.md#constructor)

### Properties

- [command](Commands_MigrationRunCommand.MigrationRunCommand.md#command)
- [describe](Commands_MigrationRunCommand.MigrationRunCommand.md#describe)

### Methods

- [builder](Commands_MigrationRunCommand.MigrationRunCommand.md#builder)
- [handler](Commands_MigrationRunCommand.MigrationRunCommand.md#handler)

## Constructors

### constructor

• **new MigrationRunCommand**()

## Properties

### command

• **command**: `string` = `"migration:run"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Applies all pending migrations onto the database"`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `configuration`: `string`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `configuration`: `string`  }\>

#### Implementation of

CommandModule.builder

___

### handler

▸ **handler**(`args`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to run the command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Arguments`<{ `configuration?`: `string`  }\> | A list with arguments and options sent by the user to the command. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Implementation of

CommandModule.handler
