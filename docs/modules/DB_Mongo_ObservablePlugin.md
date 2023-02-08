[OneBE Framework - v2.6.1](../README.md) / [Exports](../modules.md) / DB/Mongo/ObservablePlugin

# Module: DB/Mongo/ObservablePlugin

## Table of contents

### Type Aliases

- [HookNextFunction](DB_Mongo_ObservablePlugin.md#hooknextfunction)
- [PluginFunction](DB_Mongo_ObservablePlugin.md#pluginfunction)

### Variables

- [observer](DB_Mongo_ObservablePlugin.md#observer)

### Functions

- [observerPlugin](DB_Mongo_ObservablePlugin.md#observerplugin)

## Type Aliases

### HookNextFunction

Ƭ **HookNextFunction**: (`err?`: `CallbackError`) => `void`

#### Type declaration

▸ (`err?`): `void`

Type definition for the function used to call the next available hook (callback).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err?` | `CallbackError` | The errors, if any, passed to the next callback. |

##### Returns

`void`

___

### PluginFunction

Ƭ **PluginFunction**<`DocType`, `SchemaDefinitionType`\>: (`schema`: `Schema`<`DocType`, `Model`<`DocType`\>, `SchemaDefinitionType`\>, `opts?`: `any`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DocType` | [`Document`]( https://developer.mozilla.org/en-US/docs/Web/API/Document ) |
| `SchemaDefinitionType` | `undefined` |

#### Type declaration

▸ (`schema`, `opts?`): `void`

The definition of the observer plugin function returned by the Observer Plugin function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `Schema`<`DocType`, `Model`<`DocType`\>, `SchemaDefinitionType`\> | The schema for which we want to observe changes. |
| `opts?` | `any` | Various other options passed by Mongoose. |

##### Returns

`void`

## Variables

### observer

• `Const` **observer**: [`Observable`](../classes/DB_Mongo_Observable.Observable.md)

The observer instance we use to observe database changes.

## Functions

### observerPlugin

▸ **observerPlugin**<`DocType`, `SchemaDefinitionType`\>(`modelName`): [`PluginFunction`](DB_Mongo_ObservablePlugin.md#pluginfunction)<`DocType`, `SchemaDefinitionType`\>

Adds observable functionality to any Mongoose models that we want to be
observable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DocType` | [`Document`]( https://developer.mozilla.org/en-US/docs/Web/API/Document ) |
| `SchemaDefinitionType` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the model we want to observe. |

#### Returns

[`PluginFunction`](DB_Mongo_ObservablePlugin.md#pluginfunction)<`DocType`, `SchemaDefinitionType`\>
