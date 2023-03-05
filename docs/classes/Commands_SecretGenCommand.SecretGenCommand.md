[OneBE Framework - v2.6.10](../README.md) / [Exports](../modules.md) / [Commands/SecretGenCommand](../modules/Commands_SecretGenCommand.md) / SecretGenCommand

# Class: SecretGenCommand

[Commands/SecretGenCommand](../modules/Commands_SecretGenCommand.md).SecretGenCommand

CLI Command to generate secret codes for various elements.

## Implements

- `CommandModule`

## Table of contents

### Constructors

- [constructor](Commands_SecretGenCommand.SecretGenCommand.md#constructor)

### Properties

- [command](Commands_SecretGenCommand.SecretGenCommand.md#command)
- [describe](Commands_SecretGenCommand.SecretGenCommand.md#describe)

### Methods

- [builder](Commands_SecretGenCommand.SecretGenCommand.md#builder)
- [handler](Commands_SecretGenCommand.SecretGenCommand.md#handler)

## Constructors

### constructor

• **new SecretGenCommand**()

## Properties

### command

• **command**: `string` = `"secret:generate"`

#### Implementation of

CommandModule.command

___

### describe

• **describe**: `string` = `"Generate secrets"`

#### Implementation of

CommandModule.describe

## Methods

### builder

▸ **builder**(`args`): `Argv`<{ `type`: `string`  }\>

Method used to define the options and parameters that the CLI command
can receive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Argv`<{}\> | A list with arguments and options sent by the user to the command. |

#### Returns

`Argv`<{ `type`: `string`  }\>

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
