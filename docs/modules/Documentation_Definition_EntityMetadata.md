[OneBE Framework - v2.6.19](../README.md) / [Exports](../modules.md) / Documentation/Definition/EntityMetadata

# Module: Documentation/Definition/EntityMetadata

## Table of contents

### Interfaces

- [IEntityMetadata](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)
- [IEntityProperty](../interfaces/Documentation_Definition_EntityMetadata.IEntityProperty.md)
- [IEntityPropertyMetadata](../interfaces/Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)
- [IRelationMetadata](../interfaces/Documentation_Definition_EntityMetadata.IRelationMetadata.md)

### Functions

- [mapSQLToEntity](Documentation_Definition_EntityMetadata.md#mapsqltoentity)

## Functions

### mapSQLToEntity

▸ **mapSQLToEntity**(`dataType`): [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md)

Converter function to get the EntityPropertyDataType out of the SQL datatype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataType` | `ColumnType` | The SQL datatype we want to convert. |

#### Returns

[`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md)
