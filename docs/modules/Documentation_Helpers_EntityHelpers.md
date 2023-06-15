[OneBE Framework - v2.6.20](../README.md) / [Exports](../modules.md) / Documentation/Helpers/EntityHelpers

# Module: Documentation/Helpers/EntityHelpers

## Table of contents

### Classes

- [CustomEntityHelper](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md)

### Variables

- [EntityHelpers](Documentation_Helpers_EntityHelpers.md#entityhelpers)

## Variables

### EntityHelpers

• `Const` **EntityHelpers**: `Object`

Helper functions to document custom entities using interfaces.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `arrayProperty` | (`entityName`: `string`, `propertyName`: `string`, `dataType`: [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md), `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `booleanProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `dateProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `dateTimeProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `entity` | (`name`: `string`, `description?`: `string`) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `entityArrayProperty` | (`entityName`: `string`, `propertyName`: `string`, `referenceEntityName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `entityProperty` | (`entityName`: `string`, `propertyName`: `string`, `referenceEntityName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `extends` | (`entityName`: `string`, ...`baseEntities`: `string`[]) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `integerProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `numberProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `property` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
| `requiredProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => [`CustomEntityHelper`](../classes/Documentation_Helpers_EntityHelpers.CustomEntityHelper.md) |
