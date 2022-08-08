[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Documentation/MetadataTypes

# Module: Documentation/MetadataTypes

## Table of contents

### Type Aliases

- [Constructor](Documentation_MetadataTypes.md#constructor)
- [PropertyDecorator](Documentation_MetadataTypes.md#propertydecorator)

## Type Aliases

### Constructor

Ƭ **Constructor**: `Object`

Type used to define a Class with a constructor.

___

### PropertyDecorator

Ƭ **PropertyDecorator**<`T`\>: (`target`: `T`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Type declaration

▸ (`target`, `propertyKey`, `descriptor`): `void`

Type used to define a Property Decorator function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target on which we apply the decorator. |
| `propertyKey` | `string` | The property on which we apply the decorator. |
| `descriptor` | `PropertyDescriptor` | The property descriptor of the property we want to apply the decorator on. |

##### Returns

`void`
