[Spark OneBE - v1.0.8](../README.md) / [Exports](../modules.md) / Router/RouteDecorators

# Module: Router/RouteDecorators

## Table of contents

### Functions

- [api](Router_RouteDecorators.md#api)
- [path](Router_RouteDecorators.md#path)

## Functions

### api

▸ **api**<`T`\>(`BaseClass`): [`ControllerDecorator`](Router_RouteTypes.md#controllerdecorator)<`T`\>

Decorator to define the controller as an API controller.

Attaches to the target the following metadata:
- route:path
- route:api

Based on this metadata we know what to generate in the Documentation generator.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Router_RouteTypes.md#constructor) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `BaseClass` | `T` | The Controller we want to decorate. |

#### Returns

[`ControllerDecorator`](Router_RouteTypes.md#controllerdecorator)<`T`\>

___

### path

▸ **path**<`T`\>(`path`, `name?`, `description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator to define the path the controller will handle.

Attaches to the target the following metadata:
- route:path
- route:api - if the [api](Router_RouteDecorators.md#api) decorator was used.
- route:name
- route:docs
- route:path:callbacks

Based on this metadata we know what to generate in the Documentation generator.

**`decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Router_RouteTypes.md#constructor) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path on which we will register the routes of this controller. |
| `name?` | `string` | The name of the controller. If no name is specified, it will take the name of the controller. |
| `description?` | `string` | The description of the controller. If no description is passed, no description will be documented. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>
