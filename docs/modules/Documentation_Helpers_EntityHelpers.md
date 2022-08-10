[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Documentation/Helpers/EntityHelpers

# Module: Documentation/Helpers/EntityHelpers

## Table of contents

### Variables

- [EntityHelpers](Documentation_Helpers_EntityHelpers.md#entityhelpers)

## Variables

### EntityHelpers

• `Const` **EntityHelpers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `arrayProperty` | (`entityName`: `string`, `propertyName`: `string`, `dataType`: [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md), `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `booleanProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `dateProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `dateTimeProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `entity` | (`name`: `string`, `description`: `string`) => `CustomEntityHelper` |
| `entityArrayProperty` | (`entityName`: `string`, `propertyName`: `string`, `referenceEntityName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `entityProperty` | (`entityName`: `string`, `propertyName`: `string`, `referenceEntityName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `extends` | (`entityName`: `string`, `baseEntity`: `string`) => `CustomEntityHelper` |
| `integerProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `numberProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `property` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
| `requiredProperty` | (`entityName`: `string`, `propertyName`: `string`, `propertyOptions`: [`IEntityProperty`](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)) => `CustomEntityHelper` |
