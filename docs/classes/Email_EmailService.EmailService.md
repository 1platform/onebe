[Spark OneBE - v2.0.0](../README.md) / [Exports](../modules.md) / [Email/EmailService](../modules/Email_EmailService.md) / EmailService

# Class: EmailService

[Email/EmailService](../modules/Email_EmailService.md).EmailService

Class exposing the Email sending functionality.

## Hierarchy

- [`ServiceBase`](Services_ServiceBase.ServiceBase.md)

  ↳ **`EmailService`**

## Implements

- [`IEmailTransport`](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md)

## Table of contents

### Constructors

- [constructor](Email_EmailService.EmailService.md#constructor)

### Properties

- [\_validator](Email_EmailService.EmailService.md#_validator)

### Accessors

- [validator](Email_EmailService.EmailService.md#validator)

### Methods

- [customValidate](Email_EmailService.EmailService.md#customvalidate)
- [send](Email_EmailService.EmailService.md#send)
- [validate](Email_EmailService.EmailService.md#validate)

## Constructors

### constructor

• **new EmailService**()

Email Service constructor.

#### Overrides

[ServiceBase](Services_ServiceBase.ServiceBase.md).[constructor](Services_ServiceBase.ServiceBase.md#constructor)

## Properties

### \_validator

• `Protected` `Optional` **\_validator**: `AnySchema`

A default data validator schema that can be used to validate
some data used in the service.

#### Inherited from

[ServiceBase](Services_ServiceBase.ServiceBase.md).[_validator](Services_ServiceBase.ServiceBase.md#_validator)

## Accessors

### validator

• `get` **validator**(): `AnySchema`

Returns the default data validator of the service.

#### Returns

`AnySchema`

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
| `validator` | `AnySchema` | The validator to be used. |

#### Returns

`T`

#### Inherited from

[ServiceBase](Services_ServiceBase.ServiceBase.md).[customValidate](Services_ServiceBase.ServiceBase.md#customvalidate)

___

### send

▸ **send**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to send emails.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IEmailOptions`](../interfaces/Email_Transports_IEmailTransport.IEmailOptions.md) | The parameters we use for sending an email. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Implementation of

[IEmailTransport](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md).[send](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md#send)

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
