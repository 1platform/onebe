[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Router/RouteDecorators

# Module: Router/RouteDecorators

## Table of contents

### Functions

- [API](Router_RouteDecorators.md#api)
- [Custom](Router_RouteDecorators.md#custom)
- [Group](Router_RouteDecorators.md#group)
- [Path](Router_RouteDecorators.md#path)

## Functions

### API

▸ **API**<`T`\>(`BaseClass`): [`ControllerDecorator`](Router_RouteTypes.md#controllerdecorator)<`T`\>

Decorator to define the controller as an API controller.

Attaches to the target the following metadata:
- route:path
- route:api

Based on this metadata we know what to generate in the Documentation generator.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `BaseClass` | `T` | The Controller we want to decorate. |

#### Returns

[`ControllerDecorator`](Router_RouteTypes.md#controllerdecorator)<`T`\>

___

### Custom

▸ **Custom**<`T`\>(`path`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator to define a custom controller prefix.

Attaches to the target the following metadata:
- route:path
- route:custom:path

Based on this metadata we know what to generate in the Documentation generator.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The custom controller path prefix. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Group

▸ **Group**<`T`\>(`groupName`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | `string` |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Path

▸ **Path**<`T`\>(`path`, `name?`, `description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator to define the path the controller will handle.

Attaches to the target the following metadata:
- route:path
- route:api - if the api decorator was used.
- route:name
- route:docs
- route:path:callbacks

Based on this metadata we know what to generate in the Documentation generator.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path on which we will register the routes of this controller. |
| `name?` | `string` | The name of the controller. If no name is specified, it will take the name of the controller. |
| `description?` | `string` | The description of the controller. If no description is passed, no description will be documented. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>
