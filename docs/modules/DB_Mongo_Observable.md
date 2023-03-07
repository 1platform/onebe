[OneBE Framework - v2.6.12](../README.md) / [Exports](../modules.md) / DB/Mongo/Observable

# Module: DB/Mongo/Observable

## Table of contents

### Enumerations

- [ObservableType](../enums/DB_Mongo_Observable.ObservableType.md)

### Classes

- [Observable](../classes/DB_Mongo_Observable.Observable.md)

### Type Aliases

- [ObserverCallback](DB_Mongo_Observable.md#observercallback)

## Type Aliases

### ObserverCallback

Ƭ **ObserverCallback**<`T`\>: (`document`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document` |

#### Type declaration

▸ (`document`): `void`

Type used to define what a callback used to register an observer function should look like.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `document` | `T` | The document we want to observe. |

##### Returns

`void`
