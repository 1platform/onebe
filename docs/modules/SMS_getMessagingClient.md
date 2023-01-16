[OneBE Framework - v2.4.13](../README.md) / [Exports](../modules.md) / SMS/getMessagingClient

# Module: SMS/getMessagingClient

## Table of contents

### Enumerations

- [MessagingType](../enums/SMS_getMessagingClient.MessagingType.md)

### Type Aliases

- [MessagingTypeObject](SMS_getMessagingClient.md#messagingtypeobject)

### Functions

- [getMessagingClient](SMS_getMessagingClient.md#getmessagingclient)
- [getTwilioClient](SMS_getMessagingClient.md#gettwilioclient)
- [getVonageClient](SMS_getMessagingClient.md#getvonageclient)

## Type Aliases

### MessagingTypeObject

Ƭ **MessagingTypeObject**: `Twilio` \| `Vonage`

Supported data types for the messaging object.

## Functions

### getMessagingClient

▸ **getMessagingClient**<`T`\>(`type`, `configuration`): `T`

Method used to return the client instance for the different messaging engines supported by the framework.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MessagingTypeObject`](SMS_getMessagingClient.md#messagingtypeobject) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`MessagingType`](../enums/SMS_getMessagingClient.MessagingType.md) | The type of messaging client instance needed. |
| `configuration` | `Record`<`string`, `any`\> | The configuration passed to create the messaging client instance. |

#### Returns

`T`

___

### getTwilioClient

▸ **getTwilioClient**(`configuration`): `Twilio`

Return the Twilio Client instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuration` | `Record`<`string`, `any`\> | The configuration needed to create the client instance. |

#### Returns

`Twilio`

___

### getVonageClient

▸ **getVonageClient**(`configuration`): `Vonage`

Return the Vonage Client instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuration` | `Record`<`string`, `any`\> | The configuration needed to create the client instance. |

#### Returns

`Vonage`
