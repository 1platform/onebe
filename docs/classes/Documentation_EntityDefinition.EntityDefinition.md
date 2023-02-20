[OneBE Framework - v2.6.3](../README.md) / [Exports](../modules.md) / [Documentation/EntityDefinition](../modules/Documentation_EntityDefinition.md) / EntityDefinition

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
- [buildChainExtension](Documentation_EntityDefinition.EntityDefinition.md#buildchainextension)
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

Getter used to list all the entities defined in the application.

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

## Methods

### add

▸ **add**(`entity`, `description?`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

Method used to add a new entity in the entity metadata store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `description?` | `string` | A short description of the entity. |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### addRelation

▸ **addRelation**<`T`\>(`entity`, `propertyName`, `typeFunctionOrTarget`, `isArray?`): `void`

Method used to add a relation between entities.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Constructor`](../modules/Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `propertyName` | `string` | The name of the property on which we add information. |
| `typeFunctionOrTarget` | `string` \| (`type?`: `any`) => `ObjectType`<`T`\> | The target of the relation. |
| `isArray?` | `boolean` | Flag to mark the relation as one-to-many or many-to-many. |

#### Returns

`void`

___

### buildChainExtension

▸ **buildChainExtension**(`entity`, `baseClass`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

Method used to define the parent entity of the current entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `any` | The entity on which we add information. |
| `baseClass` | [`Constructor`](../modules/Documentation_MetadataTypes.md#constructor)<`any`\> \| `ObjectLiteral` | The actual entity class. |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### buildEntityList

▸ **buildEntityList**(): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

Builds the list of entities, based on the relation between them and
the parents defined for each of them.

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

___

### entity

▸ **entity**(`entity`): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)

Method used to get an entity from the entity metadata store. If the entity does
not exist yet, it will create it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)

___

### extends

▸ **extends**(`entity`, `extendedEntity`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

Method used to define the parent entity of the current entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `extendedEntity` | `string` | The entity from which we get additional information. |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### getParentEntityProperties

▸ `Protected` **getParentEntityProperties**(`parentEntityName`): [`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

Method used internally to get properties of the parent entities of an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentEntityName` | `string` | The name of the parent entity. |

#### Returns

[`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

___

### getPrimaryKey

▸ **getPrimaryKey**(`entity`): [`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

Returns an array of items marked as primary keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |

#### Returns

[`IEntityPropertyMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

___

### hasProperty

▸ **hasProperty**(`entity`, `propertyName`): `boolean`

Check if an entity has the given property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we perform the check. |
| `propertyName` | `string` | The name of the property which we want to check after. |

#### Returns

`boolean`

___

### markPrimaryKey

▸ **markPrimaryKey**(`entity`, `propertyName`): `void`

Method used to mark a property as a primary key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `propertyName` | `string` | The name of the property on which we add information. |

#### Returns

`void`

___

### markRequired

▸ **markRequired**(`entity`, `propertyName`): `void`

Method used to mark a property as required.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `propertyName` | `string` | The name of the property on which we add information. |

#### Returns

`void`

___

### property

▸ **property**(`entity`, `propertyName`, `propertyOptions`, `afterProperty?`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

Method used to document properties of the entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `propertyName` | `string` | The name of the property on which we add information. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The list of options related to the property. |
| `afterProperty?` | `string` | The name of the property after which we add the property. |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### registerRelation

▸ `Protected` **registerRelation**(`entity`, `relation`): `void`

Method used internally to add all the relations for an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `relation` | [`IRelationMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IRelationMetadata.md)<[`Constructor`](../modules/Documentation_MetadataTypes.md#constructor)<`any`\>\> | Relation metadata for an entity. |

#### Returns

`void`

___

### registerRelations

▸ **registerRelations**(): `void`

Method used to register all the relations between entities.

#### Returns

`void`

___

### relationField

▸ **relationField**(`entity`, `propertyName`, `relationField`): `void`

Method used to define the relation between the property and the destination
entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `propertyName` | `string` | The name of the property on which we add information. |
| `relationField` | `string` | The field used for the relation. |

#### Returns

`void`

___

### tableName

▸ **tableName**(`entity`, `tableName`): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

Method used to attach a table name to an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `tableName` | `string` | The name of the table attached to the entity. |

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### update

▸ **update**(`entity`, `description?`): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)

Method used to update the information about an entity. If the entity does not exist
it will be created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | The entity on which we add information. |
| `description?` | `string` | A short description of the entity. |

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)
