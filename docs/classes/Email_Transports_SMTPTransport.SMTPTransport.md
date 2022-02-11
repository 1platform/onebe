[Spark OneBE - v1.0.19](../README.md) / [Exports](../modules.md) / [Email/Transports/SMTPTransport](../modules/Email_Transports_SMTPTransport.md) / SMTPTransport

# Class: SMTPTransport

[Email/Transports/SMTPTransport](../modules/Email_Transports_SMTPTransport.md).SMTPTransport

SMTP Transport used for sending emails.

## Hierarchy

- [`BaseTransport`](Email_Transports_BaseTransport.BaseTransport.md)

  ↳ **`SMTPTransport`**

## Implements

- [`IEmailTransport`](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md)

## Table of contents

### Constructors

- [constructor](Email_Transports_SMTPTransport.SMTPTransport.md#constructor)

### Properties

- [\_transporter](Email_Transports_SMTPTransport.SMTPTransport.md#_transporter)

### Methods

- [send](Email_Transports_SMTPTransport.SMTPTransport.md#send)

## Constructors

### constructor

• **new SMTPTransport**()

SMTPTransport constructor.

#### Overrides

[BaseTransport](Email_Transports_BaseTransport.BaseTransport.md).[constructor](Email_Transports_BaseTransport.BaseTransport.md#constructor)

## Properties

### \_transporter

• `Protected` **\_transporter**: `Transporter`<`any`\>

The message transporter that we use for sending an email.

#### Inherited from

[BaseTransport](Email_Transports_BaseTransport.BaseTransport.md).[_transporter](Email_Transports_BaseTransport.BaseTransport.md#_transporter)

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

#### Inherited from

[BaseTransport](Email_Transports_BaseTransport.BaseTransport.md).[send](Email_Transports_BaseTransport.BaseTransport.md#send)
