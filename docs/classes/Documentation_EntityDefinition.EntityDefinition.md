[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/EntityDefinition](../modules/Documentation_EntityDefinition.md) / EntityDefinition

# Class: EntityDefinition

[Documentation/EntityDefinition](../modules/Documentation_EntityDefinition.md).EntityDefinition

## Table of contents

### Constructors

- [constructor](Documentation_EntityDefinition.EntityDefinition.md#constructor)

### Accessors

- [list](Documentation_EntityDefinition.EntityDefinition.md#list)

### Methods

- [add](Documentation_EntityDefinition.EntityDefinition.md#add)
- [addRelation](Documentation_EntityDefinition.EntityDefinition.md#addrelation)
- [buildEntityList](Documentation_EntityDefinition.EntityDefinition.md#buildentitylist)
- [entity](Documentation_EntityDefinition.EntityDefinition.md#entity)
- [extends](Documentation_EntityDefinition.EntityDefinition.md#extends)
- [getParentEntityProperties](Documentation_EntityDefinition.EntityDefinition.md#getparententityproperties)
- [getPrimaryKey](Documentation_EntityDefinition.EntityDefinition.md#getprimarykey)
- [hasProperty](Documentation_EntityDefinition.EntityDefinition.md#hasproperty)
- [markPrimaryKey](Documentation_EntityDefinition.EntityDefinition.md#markprimarykey)
- [markRequired](Documentation_EntityDefinition.EntityDefinition.md#markrequired)
- [property](Documentation_EntityDefinition.EntityDefinition.md#property)
- [registerRelation](Documentation_EntityDefinition.EntityDefinition.md#registerrelation)
- [registerRelations](Documentation_EntityDefinition.EntityDefinition.md#registerrelations)
- [relationField](Documentation_EntityDefinition.EntityDefinition.md#relationfield)
- [tableName](Documentation_EntityDefinition.EntityDefinition.md#tablename)
- [update](Documentation_EntityDefinition.EntityDefinition.md#update)

## Constructors

### constructor

• **new EntityDefinition**()

## Accessors

### list

• `get` **list**(): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

## Methods

### add

▸ **add**(`name`, `description?`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `description?` | `string` |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### addRelation

▸ **addRelation**<`T`\>(`entity`, `propertyName`, `typeFunctionOrTarget`, `isArray?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](../modules/Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `propertyName` | `string` |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> |
| `isArray?` | `boolean` |

#### Returns

`void`

___

### buildEntityList

▸ **buildEntityList**(): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

___

### entity

▸ **entity**(`name`): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)

___

### extends

▸ **extends**(`entity`, `extendedEntity`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `extendedEntity` | `string` |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### getParentEntityProperties

▸ `Protected` **getParentEntityProperties**(`parentEntityName`): [`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentEntityName` | `string` |

#### Returns

[`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

___

### getPrimaryKey

▸ **getPrimaryKey**(`entity`): [`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |

#### Returns

[`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

___

### hasProperty

▸ **hasProperty**(`entity`, `propertyName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `propertyName` | `string` |

#### Returns

`boolean`

___

### markPrimaryKey

▸ **markPrimaryKey**(`entity`, `propertyName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `propertyName` | `string` |

#### Returns

`void`

___

### markRequired

▸ **markRequired**(`entity`, `propertyName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `propertyName` | `string` |

#### Returns

`void`

___

### property

▸ **property**(`entity`, `propertyName`, `propertyOptions`, `afterProperty?`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `propertyName` | `string` |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |
| `afterProperty?` | `string` |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### registerRelation

▸ `Protected` **registerRelation**(`entityName`, `relation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityName` | `string` |
| `relation` | [`IRelationMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IRelationMetadata.md)<[`Constructor`](../modules/Documentation_MetadataTypes.md#constructor)\> |

#### Returns

`void`

___

### registerRelations

▸ **registerRelations**(): `void`

#### Returns

`void`

___

### relationField

▸ **relationField**(`entity`, `propertyName`, `relationField`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `propertyName` | `string` |
| `relationField` | `string` |

#### Returns

`void`

___

### tableName

▸ **tableName**(`entity`, `tableName`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `tableName` | `string` |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### update

▸ **update**(`name`, `description?`): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `description?` | `string` |

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)
