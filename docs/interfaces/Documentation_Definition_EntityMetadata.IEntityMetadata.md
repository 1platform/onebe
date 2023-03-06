[OneBE Framework - v2.6.11](../README.md) / [Exports](../modules.md) / [Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md) / IEntityMetadata

# Interface: IEntityMetadata

[Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md).IEntityMetadata

Interface describing an object used to hold the metadata information
for an entity.

## Table of contents

### Properties

- [description](Documentation_Definition_EntityMetadata.IEntityMetadata.md#description)
- [extends](Documentation_Definition_EntityMetadata.IEntityMetadata.md#extends)
- [name](Documentation_Definition_EntityMetadata.IEntityMetadata.md#name)
- [properties](Documentation_Definition_EntityMetadata.IEntityMetadata.md#properties)
- [tableName](Documentation_Definition_EntityMetadata.IEntityMetadata.md#tablename)

## Properties

### description

• `Optional` **description**: `string`

The description of the entity.

___

### extends

• `Optional` **extends**: `string`[]

The list of the entities our entity extends from.

___

### name

• **name**: `string`

The name of the entity.

___

### properties

• `Optional` **properties**: [`IEntityPropertyMetadata`](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md)[]

A list of properties metadata related to the entity.

___

### tableName

• `Optional` **tableName**: `string`

The database table name of the entity. Used only when documenting
the database entities.
