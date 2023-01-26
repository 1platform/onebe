[OneBE Framework - v2.5.0](../README.md) / [Exports](../modules.md) / [Documentation/Helpers/EntityHelpers](../modules/Documentation_Helpers_EntityHelpers.md) / CustomEntityHelper

# Class: CustomEntityHelper

[Documentation/Helpers/EntityHelpers](../modules/Documentation_Helpers_EntityHelpers.md).CustomEntityHelper

Helper class used to document a custom entity. Use this class only when you want
to document an interface.

Instances of this class are created using the exposed helper functions defined below.
The scope of this class is to provide an Object-Oriented way to define Custom Entities.

## Table of contents

### Constructors

- [constructor](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#constructor)

### Methods

- [arrayProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#arrayproperty)
- [booleanProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#booleanproperty)
- [dateProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#dateproperty)
- [dateTimeProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#datetimeproperty)
- [entityArrayProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#entityarrayproperty)
- [entityProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#entityproperty)
- [extends](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#extends)
- [integerProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#integerproperty)
- [numberProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#numberproperty)
- [property](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#property)
- [requiredProperty](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md#requiredproperty)

## Constructors

### constructor

• **new CustomEntityHelper**(`entityName`)

Custom Entity helper constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityName` | `string` | The name of the entity you want to document. |

## Methods

### arrayProperty

▸ **arrayProperty**(`propertyName`, `dataType`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define an Array property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `dataType` | [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md) | The data type of the array items. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### booleanProperty

▸ **booleanProperty**(`propertyName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define a Boolean property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### dateProperty

▸ **dateProperty**(`propertyName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define a Date property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### dateTimeProperty

▸ **dateTimeProperty**(`propertyName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define a DateTime property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### entityArrayProperty

▸ **entityArrayProperty**(`propertyName`, `referenceEntityName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define an Array of Entity property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `referenceEntityName` | `string` | The name of the entity used to describe the items of the property. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### entityProperty

▸ **entityProperty**(`propertyName`, `referenceEntityName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define an Object property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `referenceEntityName` | `string` | The name of the entity used to describe the property contents. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### extends

▸ **extends**(`...baseClasses`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define the class that the custom entity you are documenting
is extending.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...baseClasses` | `string`[] | The name of the classes you want to extend. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### integerProperty

▸ **integerProperty**(`propertyName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define an Integer property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### numberProperty

▸ **numberProperty**(`propertyName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define a Number property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### property

▸ **property**(`propertyName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define a property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

___

### requiredProperty

▸ **requiredProperty**(`propertyName`, `propertyOptions`): [`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

Helper method used to define a required property from a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property you want to document. |
| `propertyOptions` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | The definition of the property. |

#### Returns

[`CustomEntityHelper`](Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)
