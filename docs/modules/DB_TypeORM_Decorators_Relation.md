[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / DB/TypeORM/Decorators/Relation

# Module: DB/TypeORM/Decorators/Relation

## Table of contents

### Functions

- [JoinColumn](DB_TypeORM_Decorators_Relation.md#joincolumn)
- [JoinTable](DB_TypeORM_Decorators_Relation.md#jointable)
- [ManyToMany](DB_TypeORM_Decorators_Relation.md#manytomany)
- [ManyToOne](DB_TypeORM_Decorators_Relation.md#manytoone)
- [OneToMany](DB_TypeORM_Decorators_Relation.md#onetomany)
- [OneToOne](DB_TypeORM_Decorators_Relation.md#onetoone)

## Functions

### JoinColumn

▸ **JoinColumn**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `JoinColumnOptions` & { `description?`: `string`  } |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### JoinTable

▸ **JoinTable**(): `PropertyDecorator`

JoinTable decorator is used in many-to-many relationship to specify owner side of relationship.
Its also used to set a custom junction table's name, column names and referenced columns.

#### Returns

`PropertyDecorator`

▸ **JoinTable**(`options`): `PropertyDecorator`

JoinTable decorator is used in many-to-many relationship to specify owner side of relationship.
Its also used to set a custom junction table's name, column names and referenced columns.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `JoinTableOptions` |

#### Returns

`PropertyDecorator`

▸ **JoinTable**(`options`): `PropertyDecorator`

JoinTable decorator is used in many-to-many relationship to specify owner side of relationship.
Its also used to set a custom junction table's name, column names and referenced columns.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `JoinTableMultipleColumnsOptions` |

#### Returns

`PropertyDecorator`

___

### ManyToMany

▸ **ManyToMany**<`T`\>(`typeFunctionOrTarget`, `inverseSide?`, `options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> |
| `inverseSide?` | `string` \| (`object`: `T`) => `any` |
| `options?` | `RelationOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### ManyToOne

▸ **ManyToOne**<`T`\>(`typeFunctionOrTarget`, `options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> |
| `options?` | `RelationOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### OneToMany

▸ **OneToMany**<`T`\>(`typeFunctionOrTarget`, `inverseSide?`, `options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> |
| `inverseSide?` | `string` \| (`object`: `T`) => `any` |
| `options?` | `RelationOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### OneToOne

▸ **OneToOne**<`T`\>(`typeFunctionOrTarget`, `options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> |
| `options?` | `RelationOptions` |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)
