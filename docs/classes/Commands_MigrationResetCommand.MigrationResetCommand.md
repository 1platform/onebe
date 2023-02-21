[OneBE Framework - v2.6.4](../README.md) / [Exports](../modules.md) / [Commands/MigrationResetCommand](../modules/Commands_MigrationResetCommand.md) / MigrationResetCommand

# Class: MigrationResetCommand

[Commands/MigrationResetCommand](../modules/Commands_MigrationResetCommand.md).MigrationResetCommand

CLI Command used to reset the database to the original state.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_MigrationResetCommand.MigrationResetCommand.md#constructor)

### Properties

- [command](Commands_MigrationResetCommand.MigrationResetCommand.md#command)
- [describe](Commands_MigrationResetCommand.MigrationResetCommand.md#describe)

### Methods

- [builder](Commands_MigrationResetCommand.MigrationResetCommand.md#builder)
- [handler](Commands_MigrationResetCommand.MigrationResetCommand.md#handler)

## Constructors

### constructor

• **new MigrationResetCommand**()

## Properties

### command

• **command**: `string` = `"migration:reset"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Undo all applied migration from the database"`

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
