[Spark OneBE - v1.0.25](../README.md) / [Exports](../modules.md) / [Email/Transports/BaseTransport](../modules/Email_Transports_BaseTransport.md) / BaseTransport

# Class: BaseTransport

[Email/Transports/BaseTransport](../modules/Email_Transports_BaseTransport.md).BaseTransport

Class representing the Base Transport.

## Hierarchy

- **`BaseTransport`**

  ↳ [`SMTPTransport`](Email_Transports_SMTPTransport.SMTPTransport.md)

  ↳ [`TestTransport`](Email_Transports_TestTransport.TestTransport.md)

## Implements

- [`IEmailTransport`](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md)

## Table of contents

### Constructors

- [constructor](Email_Transports_BaseTransport.BaseTransport.md#constructor)

### Properties

- [\_transporter](Email_Transports_BaseTransport.BaseTransport.md#_transporter)

### Methods

- [send](Email_Transports_BaseTransport.BaseTransport.md#send)

## Constructors

### constructor

• **new BaseTransport**()

## Properties

### \_transporter

• `Protected` **\_transporter**: `Transporter`<`any`\>

The message transporter that we use for sending an email.

## Methods

### send

▸ **send**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Method used to send emails.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IEmailOptions`](../interfaces/Email_Transports_IEmailTransport.IEmailOptions.md) | The parameters we use for sending an email. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Implementation of

[IEmailTransport](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md).[send](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md#send)
