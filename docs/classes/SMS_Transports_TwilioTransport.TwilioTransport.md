[OneBE Framework - v2.6.20](../README.md) / [Exports](../modules.md) / [SMS/Transports/TwilioTransport](../modules/SMS_Transports_TwilioTransport.md) / TwilioTransport

# Class: TwilioTransport

[SMS/Transports/TwilioTransport](../modules/SMS_Transports_TwilioTransport.md).TwilioTransport

SMS Transport using the Twilio engine.

## Implements

- [`ISMSTransport`](../interfaces/SMS_Transports_ISMSTransport.ISMSTransport.md)

## Table of contents

### Constructors

- [constructor](SMS_Transports_TwilioTransport.TwilioTransport.md#constructor)

### Methods

- [send](SMS_Transports_TwilioTransport.TwilioTransport.md#send)

## Constructors

### constructor

• **new TwilioTransport**()

TwilioTransport constructor

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

#### Implementation of

[ISMSTransport](../interfaces/SMS_Transports_ISMSTransport.ISMSTransport.md).[send](../interfaces/SMS_Transports_ISMSTransport.ISMSTransport.md#send)
