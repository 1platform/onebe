[OneBE Framework - v2.6.13](../README.md) / [Exports](../modules.md) / [Commands/EntityCreateCommand](../modules/Commands_EntityCreateCommand.md) / EntityCreateCommand

# Class: EntityCreateCommand

[Commands/EntityCreateCommand](../modules/Commands_EntityCreateCommand.md).EntityCreateCommand

CLI Command to create a new entity.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_EntityCreateCommand.EntityCreateCommand.md#constructor)

### Properties

- [command](Commands_EntityCreateCommand.EntityCreateCommand.md#command)
- [describe](Commands_EntityCreateCommand.EntityCreateCommand.md#describe)

### Methods

- [builder](Commands_EntityCreateCommand.EntityCreateCommand.md#builder)
- [handler](Commands_EntityCreateCommand.EntityCreateCommand.md#handler)

## Constructors

### constructor

• **new EntityCreateCommand**()

## Properties

### command

• **command**: `string` = `"entity:create <entityName>"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Creates a new entity file."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `entityName`: `unknown`  } & { `migration`: `boolean`  } & { `audit`: `boolean`  } & { `softDelete`: `boolean`  } & { `uuid`: `boolean`  } & { `override`: `boolean`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `entityName`: `unknown`  } & { `migration`: `boolean`  } & { `audit`: `boolean`  } & { `softDelete`: `boolean`  } & { `uuid`: `boolean`  } & { `override`: `boolean`  }\>

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
