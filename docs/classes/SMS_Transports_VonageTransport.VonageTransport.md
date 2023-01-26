[OneBE Framework - v2.5.2](../README.md) / [Exports](../modules.md) / [SMS/Transports/VonageTransport](../modules/SMS_Transports_VonageTransport.md) / VonageTransport

# Class: VonageTransport

[SMS/Transports/VonageTransport](../modules/SMS_Transports_VonageTransport.md).VonageTransport

SMS Transport using the Vonage/Nexmo engine.

## Implements

- [`ISMSTransport`](../interfaces/SMS_Transports_ISMSTransport.ISMSTransport.md)

## Table of contents

### Constructors

- [constructor](SMS_Transports_VonageTransport.VonageTransport.md#constructor)

### Methods

- [send](SMS_Transports_VonageTransport.VonageTransport.md#send)

## Constructors

### constructor

• **new VonageTransport**()

VonageTransport constructor

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
