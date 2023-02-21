[OneBE Framework - v2.6.4](../README.md) / [Exports](../modules.md) / [Commands/DatabaseSeedCommand](../modules/Commands_DatabaseSeedCommand.md) / DatabaseSeedCommand

# Class: DatabaseSeedCommand

[Commands/DatabaseSeedCommand](../modules/Commands_DatabaseSeedCommand.md).DatabaseSeedCommand

CLI Command to load data into the database.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_DatabaseSeedCommand.DatabaseSeedCommand.md#constructor)

### Properties

- [aliases](Commands_DatabaseSeedCommand.DatabaseSeedCommand.md#aliases)
- [command](Commands_DatabaseSeedCommand.DatabaseSeedCommand.md#command)
- [describe](Commands_DatabaseSeedCommand.DatabaseSeedCommand.md#describe)

### Methods

- [builder](Commands_DatabaseSeedCommand.DatabaseSeedCommand.md#builder)
- [handler](Commands_DatabaseSeedCommand.DatabaseSeedCommand.md#handler)

## Constructors

### constructor

• **new DatabaseSeedCommand**()

## Properties

### aliases

• **aliases**: `string`[]

#### Implementation of

CommandModule.aliases

___

### command

• **command**: `string` = `"database:seed"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Load data into the database using seed files."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `configuration`: `string`  } & { `truncate`: `boolean`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `configuration`: `string`  } & { `truncate`: `boolean`  }\>

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
