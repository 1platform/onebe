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
- [buildEntityList](Documentation_EntityDefinition.EntityDefinition.md#buildentitylist)
- [entity](Documentation_EntityDefinition.EntityDefinition.md#entity)
- [extends](Documentation_EntityDefinition.EntityDefinition.md#extends)
- [getParentEntityProperties](Documentation_EntityDefinition.EntityDefinition.md#getparententityproperties)
- [getPrimaryKey](Documentation_EntityDefinition.EntityDefinition.md#getprimarykey)
- [hasProperty](Documentation_EntityDefinition.EntityDefinition.md#hasproperty)
- [markPrimaryKey](Documentation_EntityDefinition.EntityDefinition.md#markprimarykey)
- [markRequired](Documentation_EntityDefinition.EntityDefinition.md#markrequired)
- [property](Documentation_EntityDefinition.EntityDefinition.md#property)
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

▸ **property**(`entity`, `propertyName`, `propertyOptions`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `propertyName` | `string` |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

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
