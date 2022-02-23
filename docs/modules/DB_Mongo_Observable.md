[Spark OneBE - v1.0.20](../README.md) / [Exports](../modules.md) / DB/Mongo/Observable

# Module: DB/Mongo/Observable

## Table of contents

### Enumerations

- [ObservableType](../enums/DB_Mongo_Observable.ObservableType.md)

### Classes

- [Observable](../classes/DB_Mongo_Observable.Observable.md)

### Type aliases

- [ObserverCallback](DB_Mongo_Observable.md#observercallback)

## Type aliases

### ObserverCallback

Ƭ **ObserverCallback**<`T`\>: (`document`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document` |

#### Type declaration

▸ (`document`): `void`

The callback used to define/register callbacks.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `document` | `T` | The document we want to observe. |

##### Returns

`void`
