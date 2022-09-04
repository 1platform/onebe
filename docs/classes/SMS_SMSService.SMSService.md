[Spark OneBE - v2.0.1](../README.md) / [Exports](../modules.md) / [SMS/SMSService](../modules/SMS_SMSService.md) / SMSService

# Class: SMSService

[SMS/SMSService](../modules/SMS_SMSService.md).SMSService

Service used to handle SMS Sending from the application.

## Hierarchy

- [`ServiceBase`](Services_ServiceBase.ServiceBase.md)

  ↳ **`SMSService`**

## Implements

- [`ISMSTransport`](../interfaces/SMS_Transports_ISMSTransport.ISMSTransport.md)

## Table of contents

### Constructors

- [constructor](SMS_SMSService.SMSService.md#constructor)

### Accessors

- [validator](SMS_SMSService.SMSService.md#validator)

### Methods

- [customValidate](SMS_SMSService.SMSService.md#customvalidate)
- [send](SMS_SMSService.SMSService.md#send)
- [validate](SMS_SMSService.SMSService.md#validate)

## Constructors

### constructor

• **new SMSService**()

SMSService Constructor

#### Overrides

[ServiceBase](Services_ServiceBase.ServiceBase.md).[constructor](Services_ServiceBase.ServiceBase.md#constructor)

## Accessors

### validator

• `get` **validator**(): `AnySchema`<`any`\>

Returns the default data validator of the service.

#### Returns

`AnySchema`<`any`\>

#### Inherited from

ServiceBase.validator

• `set` **validator**(`newValidator`): `void`

Sets the validator value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValidator` | `AnySchema`<`any`\> | The new validator to be set. |

#### Returns

`void`

#### Inherited from

ServiceBase.validator

## Methods

### customValidate

▸ `Protected` **customValidate**<`T`\>(`data`, `validator`): `T`

Validates the given data against a given validator and returns
the data after applying the validator on it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | The data to be validated. |
| `validator` | `AnySchema`<`any`\> | The validator to be used. |

#### Returns

`T`

#### Inherited from

[ServiceBase](Services_ServiceBase.ServiceBase.md).[customValidate](Services_ServiceBase.ServiceBase.md#customvalidate)

___

### send

▸ **send**(`to`, `text`, `from?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to send SMS messages

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

___

### validate

▸ **validate**<`T`\>(`data`): `T`

Validates the given data against the default validator and returns
the data after applying the validator on it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | The data to be validated. |

#### Returns

`T`

#### Inherited from

[ServiceBase](Services_ServiceBase.ServiceBase.md).[validate](Services_ServiceBase.ServiceBase.md#validate)
