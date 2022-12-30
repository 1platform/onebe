[OneBE Framework - v2.4.0](../README.md) / [Exports](../modules.md) / DB/TypeORM/Decorators/Relation

# Module: DB/TypeORM/Decorators/Relation

## Table of contents

### Functions

- [JoinColumn](DB_TypeORM_Decorators_Relation.md#joincolumn)
- [ManyToMany](DB_TypeORM_Decorators_Relation.md#manytomany)
- [ManyToOne](DB_TypeORM_Decorators_Relation.md#manytoone)
- [OneToMany](DB_TypeORM_Decorators_Relation.md#onetomany)
- [OneToOne](DB_TypeORM_Decorators_Relation.md#onetoone)

## Functions

### JoinColumn

▸ **JoinColumn**(`options?`): `PropertyDecorator`

Decorator used to define a column used to store the relation key for a referenced model.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `JoinColumnOptions` & { `description?`: `string`  } | A list of options used for defining the join column. |

#### Returns

`PropertyDecorator`

___

### ManyToMany

▸ **ManyToMany**<`T`\>(`typeFunctionOrTarget`, `inverseSide?`, `options?`): `PropertyDecorator`

Decorator used to define a many-to-many relation between two models.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> | The target of the many-to-many relation. |
| `inverseSide?` | `string` \| (`object`: `T`) => `any` | The inverse side target of the many-to-many relation. |
| `options?` | `RelationOptions` | A list of options used for defining the relation. |

#### Returns

`PropertyDecorator`

___

### ManyToOne

▸ **ManyToOne**<`T`\>(`typeFunctionOrTarget`, `options?`): `PropertyDecorator`

Decorator used to define a many-to-one relation between two models.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> | The target of the many-to-one relation. |
| `options?` | `RelationOptions` | A list of options used for defining the relation. |

#### Returns

`PropertyDecorator`

___

### OneToMany

▸ **OneToMany**<`T`\>(`typeFunctionOrTarget`, `inverseSide?`, `options?`): `PropertyDecorator`

Decorator used to define a one-to-many relation between two models.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> | The target of the one-to-many relation. |
| `inverseSide?` | `string` \| (`object`: `T`) => `any` | The inverse side target of the one-to-many relation. |
| `options?` | `RelationOptions` | A list of options used for defining the relation. |

#### Returns

`PropertyDecorator`

___

### OneToOne

▸ **OneToOne**<`T`\>(`typeFunctionOrTarget`, `options?`): `PropertyDecorator`

Decorator used to define a one-to-one relation between two models.

As a bonus, this decorator will add metadata information to the column that
will be used for documentation.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> | The target of the one-to-one relation. |
| `options?` | `RelationOptions` | A list of options used for defining the relation. |

#### Returns

`PropertyDecorator`
