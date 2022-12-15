[OneBE Framework - v2.2.5](../README.md) / [Exports](../modules.md) / Documentation/Decorators/EntityDecorators

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
- [Extends](Documentation_Decorators_EntityDecorators.md#extends)
- [IntegerProperty](Documentation_Decorators_EntityDecorators.md#integerproperty)
- [IsRequired](Documentation_Decorators_EntityDecorators.md#isrequired)
- [NumberProperty](Documentation_Decorators_EntityDecorators.md#numberproperty)
- [Property](Documentation_Decorators_EntityDecorators.md#property)
- [RequiredProperty](Documentation_Decorators_EntityDecorators.md#requiredproperty)
- [StringProperty](Documentation_Decorators_EntityDecorators.md#stringproperty)

## Functions

### ArrayProperty

▸ **ArrayProperty**(`dataType?`, `options?`): `PropertyDecorator`

Decorator used to describe an array property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dataType?` | [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md) | `EntityPropertyDataTypes.STRING` | The data type of the property. |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | `undefined` | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### BooleanProperty

▸ **BooleanProperty**(`options?`): `PropertyDecorator`

Decorator used to describe a boolean property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### DateProperty

▸ **DateProperty**(`options?`): `PropertyDecorator`

Decorator used to describe a date property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### DateTimeProperty

▸ **DateTimeProperty**(`options?`): `PropertyDecorator`

Decorator used to describe a date-time property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### Entity

▸ **Entity**<`T`\>(`description?`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to describe a custom entity that is extending the
BaseEntity class.

Using this decorator we can give a custom entity a name and define
what other entity it extends. When the Documentation API is exposing
the metadata, it will look in the hierarchy of the class and list
all the properties in one place.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description?` | `string` | A short description of the entity. |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### EntityArrayProperty

▸ **EntityArrayProperty**(`entityName`, `options?`): `PropertyDecorator`

Decorator used to describe a property of a custom entity that references a list of another entities.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityName` | `string` | The name of the entity we want to reference. |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### EntityProperty

▸ **EntityProperty**(`entityName`, `options?`): `PropertyDecorator`

Decorator used to describe a property of a custom entity that references another entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityName` | `string` | The name of the entity we want to reference. |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### Extends

▸ **Extends**<`T`\>(`...entities`): [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

Decorator used to add what entity it extends to the entity.

Using this decorator we can give additional information to a custom entity
about what other entity it extends. When the Documentation API is exposing
the metadata, it will look in the hierarchy of the class and list
all the properties in one place.

**`Decorator`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](Documentation_MetadataTypes.md#constructor)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...entities` | `string`[] | The name of the entities extended |

#### Returns

[`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\>

___

### IntegerProperty

▸ **IntegerProperty**(`options?`): `PropertyDecorator`

Decorator used to describe an integer property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### IsRequired

▸ **IsRequired**(`object`, `propertyName`): `void`

Decorator used to mark the property of a custom entity as required.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The entity on which we apply the decorator. |
| `propertyName` | `string` | The name of the property on which we apply the decorator. |

#### Returns

`void`

___

### NumberProperty

▸ **NumberProperty**(`options?`): `PropertyDecorator`

Decorator used to describe a number property of a custom entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### Property

▸ **Property**(`options?`): `PropertyDecorator`

Decorator used to describe the property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### RequiredProperty

▸ **RequiredProperty**(`options?`): `PropertyDecorator`

Decorator used to describe a required property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`

___

### StringProperty

▸ **StringProperty**(`options?`): `PropertyDecorator`

Decorator used to describe a string property of a custom entity.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md) | A list of options to define a property of an entity. |

#### Returns

`PropertyDecorator`
