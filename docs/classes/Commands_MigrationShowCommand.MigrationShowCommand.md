[OneBE Framework - v2.4.6](../README.md) / [Exports](../modules.md) / [Commands/MigrationShowCommand](../modules/Commands_MigrationShowCommand.md) / MigrationShowCommand

# Class: MigrationShowCommand

[Commands/MigrationShowCommand](../modules/Commands_MigrationShowCommand.md).MigrationShowCommand

CLI Command used to view all migrations and their status.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_MigrationShowCommand.MigrationShowCommand.md#constructor)

### Properties

- [command](Commands_MigrationShowCommand.MigrationShowCommand.md#command)
- [describe](Commands_MigrationShowCommand.MigrationShowCommand.md#describe)

### Methods

- [builder](Commands_MigrationShowCommand.MigrationShowCommand.md#builder)
- [handler](Commands_MigrationShowCommand.MigrationShowCommand.md#handler)

## Constructors

### constructor

• **new MigrationShowCommand**()

## Properties

### command

• **command**: `string` = `"migration:show"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Show all the migration statuses."`

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
