[OneBE Framework - v2.6.21](../README.md) / [Exports](../modules.md) / [Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md) / IRelationMetadata

# Interface: IRelationMetadata<T\>

[Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md).IRelationMetadata

Interface describing an object used to hold the metadata information about the
relations of two entities - database relations (many-2-many, one-2-one,
one-2-many, many-2-one).

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](../modules/Documentation_MetadataTypes.md#constructor) |

## Table of contents

### Properties

- [isArray](Documentation_Definition_EntityMetadata.IRelationMetadata.md#isarray)
- [propertyName](Documentation_Definition_EntityMetadata.IRelationMetadata.md#propertyname)
- [typeFunctionOrTarget](Documentation_Definition_EntityMetadata.IRelationMetadata.md#typefunctionortarget)

## Properties

### isArray

• `Optional` **isArray**: `boolean`

Flag to mark the relation as many-2-many or one-2-many.

___

### propertyName

• **propertyName**: `string`

The name of the property used to define the relation.

___

### typeFunctionOrTarget

• **typeFunctionOrTarget**: `string` \| (`type?`: `any`) => `ObjectType`<`T`\>

The function or target used to define the relation.
