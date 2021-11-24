[Spark OneBE - v0.9.10](../README.md) / [Exports](../modules.md) / [App/App](../modules/App_App.md) / App

# Class: App

[App/App](../modules/App_App.md).App

Main App Definition class.

## Indexable

▪ [key: `string`]: `any`

Any extra object or function defined in the Application Object.

## Table of contents

### Constructors

- [constructor](App_App.App.md#constructor)

### Accessors

- [app](App_App.App.md#app)

### Methods

- [hook](App_App.App.md#hook)
- [use](App_App.App.md#use)

## Constructors

### constructor

• **new App**()

## Accessors

### app

• `get` **app**(): [`IAppInfo`](../interfaces/App_IAppInfo.IAppInfo.md)

Return the application information object.

#### Returns

[`IAppInfo`](../interfaces/App_IAppInfo.IAppInfo.md)

• `set` **app**(`appInfo`): `void`

Set the application information object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appInfo` | [`IAppInfo`](../interfaces/App_IAppInfo.IAppInfo.md) | The new application information object. |

#### Returns

`void`

## Methods

### hook

▸ **hook**(`fn`): `void`

Add a function to the application object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`GenericFunction`](../modules/App_App.md#genericfunction) | The function we want to attach to the application object. |

#### Returns

`void`

___

### use

▸ **use**(`ElementInstance`): `void`

Add an class instance to the application object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ElementInstance` | [`Constructor`](../modules/Router_RouteTypes.md#constructor) | The class we want to create an object from and add to the application object. |

#### Returns

`void`
