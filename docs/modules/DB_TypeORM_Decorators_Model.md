[OneBE Framework - v2.6.6](../README.md) / [Exports](../modules.md) / DB/TypeORM/Decorators/Model

# Module: DB/TypeORM/Decorators/Model

## Table of contents

### Functions

- [Model](DB_TypeORM_Decorators_Model.md#model)

## Functions

### Model

▸ **Model**<`T`\>(`nameOrOptions?`, `maybeOptions?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

This decorator is used to mark classes that will be an entity (table or document
depend on database type). Database schema will be created for all classes decorated
with it and Repository can be retrieved and used for it.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameOrOptions?` | `string` \| `EntityOptions` & { `description?`: `string`  } | The name of the entity or options used to define the entity. |
| `maybeOptions?` | `EntityOptions` & { `description?`: `string`  } | Options used for the entity definition. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>
