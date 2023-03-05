[OneBE Framework - v2.6.10](../README.md) / [Exports](../modules.md) / Services/RelationDefintion

# Module: Services/RelationDefintion

## Table of contents

### Interfaces

- [IRelationDefinition](../interfaces/Services_RelationDefintion.IRelationDefinition.md)

### Functions

- [BuildRelationDefinition](Services_RelationDefintion.md#buildrelationdefinition)
- [InvertFields](Services_RelationDefintion.md#invertfields)
- [InvertTable](Services_RelationDefintion.md#inverttable)

## Functions

### BuildRelationDefinition

▸ **BuildRelationDefinition**<`ParentKey`, `ChildKey`\>(`parentTable`, `childTable`, `parentValue`, `data`): [`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\>

Builds the relation definition object based on the given data.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParentKey` | `number` |
| `ChildKey` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentTable` | `string` | The name of the parent table. |
| `childTable` | `string` | The name of the child table. |
| `parentValue` | `ParentKey` | The value used for the parent field. |
| `data` | `ChildKey`[] | The data used for the child field. |

#### Returns

[`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\>

___

### InvertFields

▸ **InvertFields**<`ParentKey`, `ChildKey`\>(`relation`): [`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\>

Inverts the fields used to handle the data changes in the database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParentKey` | `number` |
| `ChildKey` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relation` | [`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\> | The existing relation definition. |

#### Returns

[`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\>

___

### InvertTable

▸ **InvertTable**<`ParentKey`, `ChildKey`\>(`relation`): [`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\>

Inverts the relation name based on the given tables.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParentKey` | `number` |
| `ChildKey` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relation` | [`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\> | The existing relation definition. |

#### Returns

[`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`ParentKey`, `ChildKey`\>
