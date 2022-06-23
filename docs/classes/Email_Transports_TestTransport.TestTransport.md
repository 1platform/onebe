[Spark OneBE - v1.0.29](../README.md) / [Exports](../modules.md) / [Email/Transports/TestTransport](../modules/Email_Transports_TestTransport.md) / TestTransport

# Class: TestTransport

[Email/Transports/TestTransport](../modules/Email_Transports_TestTransport.md).TestTransport

Email testing Transport class.

## Hierarchy

- [`BaseTransport`](Email_Transports_BaseTransport.BaseTransport.md)

  ↳ **`TestTransport`**

## Implements

- [`IEmailTransport`](../interfaces/Email_Transports_IEmailTransport.IEmailTransport.md)

## Table of contents

### Constructors

- [constructor](Email_Transports_TestTransport.TestTransport.md#constructor)

### Properties

- [\_transporter](Email_Transports_TestTransport.TestTransport.md#_transporter)

### Methods

- [send](Email_Transports_TestTransport.TestTransport.md#send)

## Constructors

### constructor

• **new TestTransport**()

TestTransport constructor.

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

#### Overrides

[BaseTransport](Email_Transports_BaseTransport.BaseTransport.md).[send](Email_Transports_BaseTransport.BaseTransport.md#send)
