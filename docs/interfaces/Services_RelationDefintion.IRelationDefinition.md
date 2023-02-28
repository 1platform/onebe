[OneBE Framework - v2.6.7](../README.md) / [Exports](../modules.md) / [Services/RelationDefintion](../modules/Services_RelationDefintion.md) / IRelationDefinition

# Interface: IRelationDefinition<ParentKey, ChildKey\>

[Services/RelationDefintion](../modules/Services_RelationDefintion.md).IRelationDefinition

Interface used to define a relation between two tables.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ParentKey` | `number` |
| `ChildKey` | `number` |

## Table of contents

### Properties

- [childField](Services_RelationDefintion.IRelationDefinition.md#childfield)
- [childTable](Services_RelationDefintion.IRelationDefinition.md#childtable)
- [data](Services_RelationDefintion.IRelationDefinition.md#data)
- [parentField](Services_RelationDefintion.IRelationDefinition.md#parentfield)
- [parentTable](Services_RelationDefintion.IRelationDefinition.md#parenttable)
- [parentValue](Services_RelationDefintion.IRelationDefinition.md#parentvalue)
- [relationName](Services_RelationDefintion.IRelationDefinition.md#relationname)

## Properties

### childField

• **childField**: `string`

The name of the child field that will be used for handling data changes.

___

### childTable

• **childTable**: `string`

The name of the child table.

___

### data

• **data**: `ChildKey`[]

The values of the child field that will be used for handling data.

___

### parentField

• **parentField**: `string`

The name of the parent field that will be used for handling data changes.

___

### parentTable

• **parentTable**: `string`

The name of the parent table.

___

### parentValue

• **parentValue**: `ParentKey`

The value of the parent field that will be used for handling data.

___

### relationName

• **relationName**: `string`

The name of the relation to be used for data handling.
