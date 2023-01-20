[OneBE Framework - v2.4.14](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointBodyParameter

# Interface: IEndpointBodyParameter

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointBodyParameter

Interface describing an object that holds metadata information
about a body parameter.

## Table of contents

### Properties

- [defaultValue](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md#defaultvalue)
- [description](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md#description)
- [entity](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md#entity)
- [isArray](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md#isarray)
- [name](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md#name)
- [required](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md#required)
- [type](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md#type)

## Properties

### defaultValue

• `Optional` **defaultValue**: `string`

The default value of the parameter, when no value is sent.

___

### description

• `Optional` **description**: `string`

A description of what you want to do with body request parameter.

___

### entity

• `Optional` **entity**: `string`

The name of the entity used to describe the contents of body parameter.

___

### isArray

• `Optional` **isArray**: `boolean`

Flag used to mark the parameter as an array of elements of the given type.

___

### name

• **name**: `string`

The name of the body parameter.

___

### required

• `Optional` **required**: `boolean`

Flag used to mark the parameter as required.

___

### type

• **type**: [`BodyParameterType`](../enums/Documentation_Definition_DataTypes.BodyParameterType.md)

The data type of the body parameter.
