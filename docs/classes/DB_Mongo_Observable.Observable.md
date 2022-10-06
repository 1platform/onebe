[OneBE Framework - v2.1.10](../README.md) / [Exports](../modules.md) / [DB/Mongo/Observable](../modules/DB_Mongo_Observable.md) / Observable

# Class: Observable

[DB/Mongo/Observable](../modules/DB_Mongo_Observable.md).Observable

Class used to perform observable actions to a Mongoose model.

Using this class we register observers that can perform various tasks
on the Mongoose model when an action happens (Save or Remove).
Through the usage of Observers we can do updates on related elements
from other models (think at the cascade delete action).

## Hierarchy

- `EventEmitter`

  ↳ **`Observable`**

## Table of contents

### Constructors

- [constructor](DB_Mongo_Observable.Observable.md#constructor)

### Methods

- [registerObservable](DB_Mongo_Observable.Observable.md#registerobservable)
- [registerRemovePost](DB_Mongo_Observable.Observable.md#registerremovepost)
- [registerRemovePre](DB_Mongo_Observable.Observable.md#registerremovepre)
- [registerSavePost](DB_Mongo_Observable.Observable.md#registersavepost)
- [registerSavePre](DB_Mongo_Observable.Observable.md#registersavepre)

## Constructors

### constructor

• **new Observable**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `EventEmitterOptions` |

#### Inherited from

EventEmitter.constructor

## Methods

### registerObservable

▸ **registerObservable**<`T`\>(`modelName`, `type`, `isPost`, `observerCallback`): `void`

Method used to register an observer for a given model, with a given type,
at a given time moment (pre- or post-action).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the model for which we want to register the observer. |
| `type` | [`ObservableType`](../enums/DB_Mongo_Observable.ObservableType.md) | The type of the Observable action. |
| `isPost` | `boolean` | The moment of the action (true = POST, false = PRE). |
| `observerCallback` | [`ObserverCallback`](../modules/DB_Mongo_Observable.md#observercallback)<`T`\> | The observer to be executed. |

#### Returns

`void`

___

### registerRemovePost

▸ **registerRemovePost**<`T`\>(`modelName`, `observerCallback`): `void`

Register a post remove observer for a given model.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the model for which we want to register the observer. |
| `observerCallback` | [`ObserverCallback`](../modules/DB_Mongo_Observable.md#observercallback)<`T`\> | The observer to be executed. |

#### Returns

`void`

___

### registerRemovePre

▸ **registerRemovePre**<`T`\>(`modelName`, `observerCallback`): `void`

Register a pre remove observer for a given model.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the model for which we want to register the observer. |
| `observerCallback` | [`ObserverCallback`](../modules/DB_Mongo_Observable.md#observercallback)<`T`\> | The observer to be executed. |

#### Returns

`void`

___

### registerSavePost

▸ **registerSavePost**<`T`\>(`modelName`, `observerCallback`): `void`

Register a post save observer for a given model.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the model for which we want to register the observer. |
| `observerCallback` | [`ObserverCallback`](../modules/DB_Mongo_Observable.md#observercallback)<`T`\> | The observer to be executed. |

#### Returns

`void`

___

### registerSavePre

▸ **registerSavePre**<`T`\>(`modelName`, `observerCallback`): `void`

Register a pre save observer for a given model.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the model for which we want to register the observer. |
| `observerCallback` | [`ObserverCallback`](../modules/DB_Mongo_Observable.md#observercallback)<`T`\> | The observer to be executed. |

#### Returns

`void`
