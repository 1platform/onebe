[OneBE Framework - v2.2.3](../README.md) / [Exports](../modules.md) / [DB/Mongo/ObserverServiceBase](../modules/DB_Mongo_ObserverServiceBase.md) / ObserverServiceBase

# Class: ObserverServiceBase

[DB/Mongo/ObserverServiceBase](../modules/DB_Mongo_ObserverServiceBase.md).ObserverServiceBase

A base abstract class used to define Services that use Mongoose models
and require observers in order to perform various tasks.

## Hierarchy

- [`ServiceBase`](Services_ServiceBase.ServiceBase.md)

  ↳ **`ObserverServiceBase`**

## Table of contents

### Constructors

- [constructor](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md#constructor)

### Properties

- [\_observer](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md#_observer)

### Accessors

- [observer](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md#observer)
- [validator](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md#validator)

### Methods

- [customValidate](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md#customvalidate)
- [register](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md#register)
- [validate](DB_Mongo_ObserverServiceBase.ObserverServiceBase.md#validate)

## Constructors

### constructor

• **new ObserverServiceBase**()

#### Inherited from

[ServiceBase](Services_ServiceBase.ServiceBase.md).[constructor](Services_ServiceBase.ServiceBase.md#constructor)

## Properties

### \_observer

• `Protected` `Readonly` **\_observer**: [`Observable`](DB_Mongo_Observable.Observable.md) = `observer`

The default instance of the Observable plugin that can be used
to attach observers to a given model.

## Accessors

### observer

• `get` **observer**(): [`Observable`](DB_Mongo_Observable.Observable.md)

Getter for the observer instance.

#### Returns

[`Observable`](DB_Mongo_Observable.Observable.md)

___

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

The method used to register observers for the models handled by
the services defined in this class.

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
