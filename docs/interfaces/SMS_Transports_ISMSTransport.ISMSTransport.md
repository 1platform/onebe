[OneBE Framework - v2.4.7](../README.md) / [Exports](../modules.md) / [SMS/Transports/ISMSTransport](../modules/SMS_Transports_ISMSTransport.md) / ISMSTransport

# Interface: ISMSTransport

[SMS/Transports/ISMSTransport](../modules/SMS_Transports_ISMSTransport.md).ISMSTransport

How should the SMS Transport classes look like.

## Implemented by

- [`SMSService`](../classes/SMS_SMSService.SMSService.md)
- [`TwilioTransport`](../classes/SMS_Transports_TwilioTransport.TwilioTransport.md)
- [`VonageTransport`](../classes/SMS_Transports_VonageTransport.VonageTransport.md)

## Table of contents

### Methods

- [send](SMS_Transports_ISMSTransport.ISMSTransport.md#send)

## Methods

### send

▸ **send**(`to`, `text`, `from?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to send an SMS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `string` | The receiver of the message |
| `text` | `string` | The text of the message |
| `from?` | `string` | The sender of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
