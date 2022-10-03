[OneBE Framework - v2.1.9](../README.md) / [Exports](../modules.md) / [Services/ServiceBase](../modules/Services_ServiceBase.md) / ServiceBase

# Class: ServiceBase

[Services/ServiceBase](../modules/Services_ServiceBase.md).ServiceBase

The base class for your services.

We recommend using a service to perform all the actions in your application. Database handling should
happen through a service using a repository.

## Hierarchy

- **`ServiceBase`**

  ↳ [`ObserverServiceBase`](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md)

  ↳ [`EmailService`](Email_EmailService.EmailService.md)

  ↳ [`SMSService`](SMS_SMSService.SMSService.md)

  ↳ [`ServiceWithRepository`](Services_ServiceWithRepository.ServiceWithRepository.md)

## Table of contents

### Constructors

- [constructor](Services_ServiceBase.ServiceBase.md#constructor)

### Accessors

- [validator](Services_ServiceBase.ServiceBase.md#validator)

### Methods

- [customValidate](Services_ServiceBase.ServiceBase.md#customvalidate)
- [validate](Services_ServiceBase.ServiceBase.md#validate)

## Constructors

### constructor

• **new ServiceBase**()

## Accessors

### validator

• `get` **validator**(): `AnySchema`<`any`\>

Returns the default data validator of the service.

#### Returns

`AnySchema`<`any`\>

• `set` **validator**(`newValidator`): `void`

Sets the validator value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValidator` | `AnySchema`<`any`\> | The new validator to be set. |

#### Returns

`void`

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
