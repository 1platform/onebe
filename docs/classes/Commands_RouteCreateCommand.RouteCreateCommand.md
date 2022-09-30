[OneBE Framework - v2.1.6](../README.md) / [Exports](../modules.md) / [Commands/RouteCreateCommand](../modules/Commands_RouteCreateCommand.md) / RouteCreateCommand

# Class: RouteCreateCommand

[Commands/RouteCreateCommand](../modules/Commands_RouteCreateCommand.md).RouteCreateCommand

CLI Command to create a new route.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_RouteCreateCommand.RouteCreateCommand.md#constructor)

### Properties

- [aliases](Commands_RouteCreateCommand.RouteCreateCommand.md#aliases)
- [command](Commands_RouteCreateCommand.RouteCreateCommand.md#command)
- [describe](Commands_RouteCreateCommand.RouteCreateCommand.md#describe)

### Methods

- [builder](Commands_RouteCreateCommand.RouteCreateCommand.md#builder)
- [handler](Commands_RouteCreateCommand.RouteCreateCommand.md#handler)

## Constructors

### constructor

• **new RouteCreateCommand**()

## Properties

### aliases

• **aliases**: `string`[]

#### Implementation of

CommandModule.aliases

___

### command

• **command**: `string` = `"route:create <routeName>"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Creates a new route file."`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `routeName`: `unknown`  } & { `api`: `boolean`  } & { `docs`: `boolean`  } & { `custom`: `string`  } & { `path`: `string`  } & { `override`: `boolean`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `routeName`: `unknown`  } & { `api`: `boolean`  } & { `docs`: `boolean`  } & { `custom`: `string`  } & { `path`: `string`  } & { `override`: `boolean`  }\>

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
