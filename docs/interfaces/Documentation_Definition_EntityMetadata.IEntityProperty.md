[OneBE Framework - v2.1.2](../README.md) / [Exports](../modules.md) / [Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md) / IEntityProperty

# Interface: IEntityProperty

[Documentation/Definition/EntityMetadata](../modules/Documentation_Definition_EntityMetadata.md).IEntityProperty

Interface describing an object used to describe the extended metadata information
of a property from an entity.

## Table of contents

### Properties

- [childType](Documentation_Definition_EntityMetadata.IEntityProperty.md#childtype)
- [dataType](Documentation_Definition_EntityMetadata.IEntityProperty.md#datatype)
- [defaultValue](Documentation_Definition_EntityMetadata.IEntityProperty.md#defaultvalue)
- [description](Documentation_Definition_EntityMetadata.IEntityProperty.md#description)
- [enumOptions](Documentation_Definition_EntityMetadata.IEntityProperty.md#enumoptions)
- [fieldName](Documentation_Definition_EntityMetadata.IEntityProperty.md#fieldname)
- [isDate](Documentation_Definition_EntityMetadata.IEntityProperty.md#isdate)
- [isDateTime](Documentation_Definition_EntityMetadata.IEntityProperty.md#isdatetime)
- [isPrimaryKey](Documentation_Definition_EntityMetadata.IEntityProperty.md#isprimarykey)
- [length](Documentation_Definition_EntityMetadata.IEntityProperty.md#length)
- [options](Documentation_Definition_EntityMetadata.IEntityProperty.md#options)
- [reference](Documentation_Definition_EntityMetadata.IEntityProperty.md#reference)
- [referenceId](Documentation_Definition_EntityMetadata.IEntityProperty.md#referenceid)
- [required](Documentation_Definition_EntityMetadata.IEntityProperty.md#required)

## Properties

### childType

• `Optional` **childType**: [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md)

In case this property is an array, we want to know what type is the
content of the array.

___

### dataType

• `Optional` **dataType**: [`EntityPropertyDataTypes`](../enums/Documentation_Definition_DataTypes.EntityPropertyDataTypes.md)

The datatype of the property.

___

### defaultValue

• `Optional` **defaultValue**: `string`

The default value of the property.

**`TODO`**

___

### description

• `Optional` **description**: `string`

A short description of the property.

___

### enumOptions

• `Optional` **enumOptions**: `string`[]

A list of possible values that can be passed to the property.

**`TODO`**

___

### fieldName

• `Optional` **fieldName**: `string`

The name of the field attached to the property, in case it is a
referenced property.

___

### isDate

• `Optional` **isDate**: `boolean`

Flag to mark the property as a Date field.

___

### isDateTime

• `Optional` **isDateTime**: `boolean`

Flag to mark the property as a DateTime field.

___

### isPrimaryKey

• `Optional` **isPrimaryKey**: `boolean`

Flag to mark the property as a primary key.

___

### length

• `Optional` **length**: `string` \| `number`

The maximum length of the property value.

___

### options

• `Optional` **options**: `any`

Any other options related to the property definition.

___

### reference

• `Optional` **reference**: `string`

The name of the entity used to describe the value of the property.

___

### referenceId

• `Optional` **referenceId**: `string`

The ID field of the entity we reference.

___

### required

• `Optional` **required**: `boolean`

Flag to mark the property as required.
