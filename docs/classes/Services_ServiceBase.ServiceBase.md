[Spark OneBE - v1.0.8](../README.md) / [Exports](../modules.md) / [Services/ServiceBase](../modules/Services_ServiceBase.md) / ServiceBase

# Class: ServiceBase

[Services/ServiceBase](../modules/Services_ServiceBase.md).ServiceBase

The Service base class. Using this class we can perform
various actions in the application.

## Hierarchy

- **`ServiceBase`**

  ↳ [`ObserverBase`](DB_Mongo_ObserverBase.ObserverBase.md)

  ↳ [`EmailService`](Email_EmailService.EmailService.md)

  ↳ [`SMSService`](SMS_SMSService.SMSService.md)

## Table of contents

### Constructors

- [constructor](Services_ServiceBase.ServiceBase.md#constructor)

### Properties

- [\_validator](Services_ServiceBase.ServiceBase.md#_validator)

### Accessors

- [validator](Services_ServiceBase.ServiceBase.md#validator)

### Methods

- [customValidate](Services_ServiceBase.ServiceBase.md#customvalidate)
- [validate](Services_ServiceBase.ServiceBase.md#validate)

## Constructors

### constructor

• **new ServiceBase**()

## Properties

### \_validator

• `Protected` `Optional` **\_validator**: `AnySchema`

A default data validator schema that can be used to validate
some data used in the service.

## Accessors

### validator

• `get` **validator**(): `AnySchema`

Returns the default data validator of the service.

#### Returns

`AnySchema`

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
