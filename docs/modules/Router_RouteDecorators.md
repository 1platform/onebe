[OneBE Framework - v2.6.0](../README.md) / [Exports](../modules.md) / Router/RouteDecorators

# Module: Router/RouteDecorators

## Table of contents

### Functions

- [API](Router_RouteDecorators.md#api)
- [Controller](Router_RouteDecorators.md#controller)
- [Custom](Router_RouteDecorators.md#custom)
- [Docs](Router_RouteDecorators.md#docs)
- [Group](Router_RouteDecorators.md#group)
- [Path](Router_RouteDecorators.md#path)

## Functions

### API

▸ **API**<`T`\>(): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator to mark the controller as an API controller.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Controller

▸ **Controller**<`T`\>(`path`, `name?`, `description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to define the path the controller will handle. It is an alias for @Path.

This decorator checks if documentation can be exposed and will allow the registration
of the Documentation APIs while keeping track of the various elements that need to
be added to the Documentation for controllers that are added in the application.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path on which we will register the routes of this controller. |
| `name?` | `string` | The name of the controller. If no name is specified, it will take the name of the controller. |
| `description?` | `string` | The description of the controller. If no description is passed, no description will be documented. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Custom

▸ **Custom**<`T`\>(`path`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator to define a custom controller prefix.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The custom controller path prefix. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Docs

▸ **Docs**<`T`\>(`path?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator to mark a controller as a Documentation one. If needed you can customize
the base path on which the endpoints exposed by the controller are.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path?` | `string` | The custom documentation path prefix. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Group

▸ **Group**<`T`\>(`groupName`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to add the controller into a group.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupName` | `string` | The name of the group. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Path

▸ **Path**<`T`\>(`path`, `name?`, `description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to define the path the controller will handle.

This decorator checks if documentation can be exposed and will allow the registration
of the Documentation APIs while keeping track of the various elements that need to
be added to the Documentation for controllers that are added in the application.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path on which we will register the routes of this controller. |
| `name?` | `string` | The name of the controller. If no name is specified, it will take the name of the controller. |
| `description?` | `string` | The description of the controller. If no description is passed, no description will be documented. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>
