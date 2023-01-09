[OneBE Framework - v2.4.5](../README.md) / [Exports](../modules.md) / [Commands/MigrationUndoCommand](../modules/Commands_MigrationUndoCommand.md) / MigrationUndoCommand

# Class: MigrationUndoCommand

[Commands/MigrationUndoCommand](../modules/Commands_MigrationUndoCommand.md).MigrationUndoCommand

CLI command to undo the last applied migration.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_MigrationUndoCommand.MigrationUndoCommand.md#constructor)

### Properties

- [command](Commands_MigrationUndoCommand.MigrationUndoCommand.md#command)
- [describe](Commands_MigrationUndoCommand.MigrationUndoCommand.md#describe)

### Methods

- [builder](Commands_MigrationUndoCommand.MigrationUndoCommand.md#builder)
- [handler](Commands_MigrationUndoCommand.MigrationUndoCommand.md#handler)

## Constructors

### constructor

• **new MigrationUndoCommand**()

## Properties

### command

• **command**: `string` = `"migration:undo"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Undo last applied migration from the database"`

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
