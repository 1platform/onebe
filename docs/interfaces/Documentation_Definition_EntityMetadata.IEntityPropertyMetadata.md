[OneBE Framework - v2.2.0](../README.md) / [Exports](../modules.md) / [Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md) / IEntityPropertyMetadata

# Interface: IEntityPropertyMetadata

[Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md).IEntityPropertyMetadata

Interface describing an object used to hold the metadata information
for an entity property.

## Table of contents

### Properties

- [dataType](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#datatype)
- [description](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#description)
- [entity](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#entity)
- [isArray](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#isarray)
- [isPrimaryKey](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#isprimarykey)
- [maxLength](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#maxlength)
- [name](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#name)
- [options](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#options)
- [required](Documentation_Definition_EntityMetadata.IEntityPropertyMetadata.md#required)

## Properties

### dataType

• **dataType**: [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md)

The data type of the property.

___

### description

• `Optional` **description**: `string`

A short description of the property.

___

### entity

• `Optional` **entity**: `string`

The name of the entity used to describe the value of the property.

___

### isArray

• `Optional` **isArray**: `boolean`

Flag to mark if the value held in the property is an array or not.

___

### isPrimaryKey

• `Optional` **isPrimaryKey**: `boolean`

Flag to mark the property as a primary key for the entity.

___

### maxLength

• `Optional` **maxLength**: `number`

The maximum length of the value held in the property.

___

### name

• **name**: `string`

The name of the property.

___

### options

• `Optional` **options**: `Record`<`string`, `any`\>

Other metadata information that you might need for documentation.

___

### required

• `Optional` **required**: `boolean`

Flag to mark the property as required.
