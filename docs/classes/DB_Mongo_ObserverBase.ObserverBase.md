[Spark OneBE - v1.0.10](../README.md) / [Exports](../modules.md) / [DB/Mongo/ObserverBase](../modules/DB_Mongo_ObserverBase.md) / ObserverBase

# Class: ObserverBase

[DB/Mongo/ObserverBase](../modules/DB_Mongo_ObserverBase.md).ObserverBase

An abstract class representing an Observer base.

## Hierarchy

- [`ServiceBase`](Services_ServiceBase.ServiceBase.md)

  ↳ **`ObserverBase`**

## Table of contents

### Constructors

- [constructor](DB_Mongo_ObserverBase.ObserverBase.md#constructor)

### Properties

- [\_observer](DB_Mongo_ObserverBase.ObserverBase.md#_observer)

### Accessors

- [validator](DB_Mongo_ObserverBase.ObserverBase.md#validator)

### Methods

- [customValidate](DB_Mongo_ObserverBase.ObserverBase.md#customvalidate)
- [register](DB_Mongo_ObserverBase.ObserverBase.md#register)
- [validate](DB_Mongo_ObserverBase.ObserverBase.md#validate)

## Constructors

### constructor

• **new ObserverBase**()

#### Inherited from

[ServiceBase](Services_ServiceBase.ServiceBase.md).[constructor](Services_ServiceBase.ServiceBase.md#constructor)

## Properties

### \_observer

• `Protected` **\_observer**: [`Observable`](DB_Mongo_Observable.Observable.md) = `observer`

The observer plugin instance.

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

### register

▸ `Abstract` **register**(): `void`

The method used to register a new observer.

#### Returns

`void`

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
