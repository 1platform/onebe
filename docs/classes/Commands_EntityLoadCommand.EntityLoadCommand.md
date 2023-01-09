[OneBE Framework - v2.4.6](../README.md) / [Exports](../modules.md) / [Commands/EntityLoadCommand](../modules/Commands_EntityLoadCommand.md) / EntityLoadCommand

# Class: EntityLoadCommand

[Commands/EntityLoadCommand](../modules/Commands_EntityLoadCommand.md).EntityLoadCommand

CLI Command to load data into a specific entity.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_EntityLoadCommand.EntityLoadCommand.md#constructor)

### Properties

- [command](Commands_EntityLoadCommand.EntityLoadCommand.md#command)
- [describe](Commands_EntityLoadCommand.EntityLoadCommand.md#describe)

### Methods

- [builder](Commands_EntityLoadCommand.EntityLoadCommand.md#builder)
- [handler](Commands_EntityLoadCommand.EntityLoadCommand.md#handler)

## Constructors

### constructor

• **new EntityLoadCommand**()

## Properties

### command

• **command**: `string` = `"entity:load"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Load data into the database for a specified entity."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `inputFile`: `string`  } & { `entity`: `string`  } & { `path`: `string`  } & { `configuration`: `string`  } & { `clear`: `boolean`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `inputFile`: `string`  } & { `entity`: `string`  } & { `path`: `string`  } & { `configuration`: `string`  } & { `clear`: `boolean`  }\>

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
