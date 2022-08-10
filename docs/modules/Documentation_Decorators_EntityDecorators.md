[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Documentation/Decorators/EntityDecorators

# Module: Documentation/Decorators/EntityDecorators

## Table of contents

### Functions

- [ArrayProperty](Documentation_Decorators_EntityDecorators.md#arrayproperty)
- [BooleanProperty](Documentation_Decorators_EntityDecorators.md#booleanproperty)
- [DateProperty](Documentation_Decorators_EntityDecorators.md#dateproperty)
- [DateTimeProperty](Documentation_Decorators_EntityDecorators.md#datetimeproperty)
- [Entity](Documentation_Decorators_EntityDecorators.md#entity)
- [EntityArrayProperty](Documentation_Decorators_EntityDecorators.md#entityarrayproperty)
- [EntityProperty](Documentation_Decorators_EntityDecorators.md#entityproperty)
- [IntegerProperty](Documentation_Decorators_EntityDecorators.md#integerproperty)
- [IsRequired](Documentation_Decorators_EntityDecorators.md#isrequired)
- [NumberProperty](Documentation_Decorators_EntityDecorators.md#numberproperty)
- [Property](Documentation_Decorators_EntityDecorators.md#property)
- [RequiredProperty](Documentation_Decorators_EntityDecorators.md#requiredproperty)
- [StringProperty](Documentation_Decorators_EntityDecorators.md#stringproperty)

## Functions

### ArrayProperty

▸ **ArrayProperty**(`dataType`, `options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`STRING`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md#string) |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### BooleanProperty

▸ **BooleanProperty**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### DateProperty

▸ **DateProperty**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### DateTimeProperty

▸ **DateTimeProperty**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### Entity

▸ **Entity**<`T`\>(`name?`, `description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `description?` | `string` |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### EntityArrayProperty

▸ **EntityArrayProperty**(`entityName`, `options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityName` | `string` |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### EntityProperty

▸ **EntityProperty**(`entityName`, `options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityName` | `string` |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### IntegerProperty

▸ **IntegerProperty**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### IsRequired

▸ **IsRequired**(`object`, `propertyName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Constructor`](Documentation_MetadataTypes.md#constructor) |
| `propertyName` | `string` |

#### Returns

`void`

___

### NumberProperty

▸ **NumberProperty**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### Property

▸ **Property**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### RequiredProperty

▸ **RequiredProperty**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

___

### StringProperty

▸ **StringProperty**(`options?`): [`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) |

#### Returns

[`PropertyDecorator`](Documentation_MetadataTypes.md#propertydecorator)
