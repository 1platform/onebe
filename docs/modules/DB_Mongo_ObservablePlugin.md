[Spark OneBE - v1.0.25](../README.md) / [Exports](../modules.md) / DB/Mongo/ObservablePlugin

# Module: DB/Mongo/ObservablePlugin

## Table of contents

### Type aliases

- [HookNextFunction](DB_Mongo_ObservablePlugin.md#hooknextfunction)
- [PluginFunction](DB_Mongo_ObservablePlugin.md#pluginfunction)

### Variables

- [observer](DB_Mongo_ObservablePlugin.md#observer)

### Functions

- [observerPlugin](DB_Mongo_ObservablePlugin.md#observerplugin)

## Type aliases

### HookNextFunction

Ƭ **HookNextFunction**: (`err?`: `CallbackError`) => `void`

#### Type declaration

▸ (`err?`): `void`

The definition of the next hook function.

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

The definition of the observer plugin function returned by the observerPlugin function.

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

The observer instance we use to observe changes.

## Functions

### observerPlugin

▸ **observerPlugin**<`DocType`, `SchemaDefinitionType`\>(`name`): [`PluginFunction`](DB_Mongo_ObservablePlugin.md#pluginfunction)<`DocType`, `SchemaDefinitionType`\>

Creates an observer for our model.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DocType` | [`Document`]( https://developer.mozilla.org/en-US/docs/Web/API/Document ) |
| `SchemaDefinitionType` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the model. |

#### Returns

[`PluginFunction`](DB_Mongo_ObservablePlugin.md#pluginfunction)<`DocType`, `SchemaDefinitionType`\>
