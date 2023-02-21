[OneBE Framework - v2.6.5](../README.md) / [Exports](../modules.md) / [Commands/MigrationCreateCommand](../modules/Commands_MigrationCreateCommand.md) / MigrationCreateCommand

# Class: MigrationCreateCommand

[Commands/MigrationCreateCommand](../modules/Commands_MigrationCreateCommand.md).MigrationCreateCommand

CLI Command used to create a new migration.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_MigrationCreateCommand.MigrationCreateCommand.md#constructor)

### Properties

- [command](Commands_MigrationCreateCommand.MigrationCreateCommand.md#command)
- [describe](Commands_MigrationCreateCommand.MigrationCreateCommand.md#describe)

### Methods

- [builder](Commands_MigrationCreateCommand.MigrationCreateCommand.md#builder)
- [handler](Commands_MigrationCreateCommand.MigrationCreateCommand.md#handler)

## Constructors

### constructor

• **new MigrationCreateCommand**()

## Properties

### command

• **command**: `string` = `"migration:create <migrationName>"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Creates a new migration file."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `migrationName`: `unknown`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `migrationName`: `unknown`  }\>

#### Implementation of

CommandModule.builder

___

### handler

▸ **handler**(`args`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to run the command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Arguments`<{ `migrationName`: `string`  }\> | A list with arguments and options sent by the user to the command. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Implementation of

CommandModule.handler
