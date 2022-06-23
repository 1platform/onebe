[Spark OneBE - v1.0.29](../README.md) / [Exports](../modules.md) / [Email/Transports/IEmailTransport](../modules/Email_Transports_IEmailTransport.md) / IEmailTransport

# Interface: IEmailTransport

[Email/Transports/IEmailTransport](../modules/Email_Transports_IEmailTransport.md).IEmailTransport

How should the Email Transport classes look like.

## Implemented by

- [`BaseTransport`](../classes/Email_Transports_BaseTransport.BaseTransport.md)
- [`EmailService`](../classes/Email_EmailService.EmailService.md)
- [`SMTPTransport`](../classes/Email_Transports_SMTPTransport.SMTPTransport.md)
- [`TestTransport`](../classes/Email_Transports_TestTransport.TestTransport.md)

## Table of contents

### Methods

- [send](Email_Transports_IEmailTransport.IEmailTransport.md#send)

## Methods

### send

▸ **send**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Method used to send emails.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IEmailOptions`](Email_Transports_IEmailTransport.IEmailOptions.md) | The parameters we use for sending an email. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>
