[OneBE Framework - v2.3.0](../README.md) / [Exports](../modules.md) / Documentation/Decorators/ControllerDecorators

# Module: Documentation/Decorators/ControllerDecorators

## Table of contents

### Functions

- [Controller](Documentation_Decorators_ControllerDecorators.md#controller)
- [Description](Documentation_Decorators_ControllerDecorators.md#description)
- [Name](Documentation_Decorators_ControllerDecorators.md#name)

## Functions

### Controller

▸ **Controller**<`T`\>(`name`, `description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to document a controller.

Use this decorator when you want to specifically mark a class as a controller
in the documentation. Otherwise, by using the

**`Path`**

decorator you can add
the same documentation elements like this decorator.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the controller. |
| `description?` | `string` | A short description of the controller. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Description

▸ **Description**<`T`\>(`description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to give a description to a controller.

Use this decorator when you want to specifically give a description to a controller.
Otherwise, by using the

**`Path`**

decorator you can add the same documentation
elements like this decorator.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description?` | `string` | A short description of the controller. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### Name

▸ **Name**<`T`\>(`name`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to give a name to a controller.

Use this decorator when you want to specifically give a name to a controller.
Otherwise, by using the

**`Path`**

decorator you can add the same documentation
elements like this decorator.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the controller. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>
