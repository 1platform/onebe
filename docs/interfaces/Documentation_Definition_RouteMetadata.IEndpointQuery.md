[OneBE Framework - v2.5.2](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointQuery

# Interface: IEndpointQuery

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointQuery

Interface describing an object that holds metadata information
about a query parameter of an endpoint.

## Table of contents

### Properties

- [arrayItems](Documentation_Definition_RouteMetadata.IEndpointQuery.md#arrayitems)
- [description](Documentation_Definition_RouteMetadata.IEndpointQuery.md#description)
- [isRequired](Documentation_Definition_RouteMetadata.IEndpointQuery.md#isrequired)
- [name](Documentation_Definition_RouteMetadata.IEndpointQuery.md#name)
- [type](Documentation_Definition_RouteMetadata.IEndpointQuery.md#type)

## Properties

### arrayItems

• `Optional` **arrayItems**: [`QueryParameterType`](../enums/Documentation_Definition_DataTypes.QueryParameterType.md)

If the data type is marked as an array, the Documentation API needs to know
what is the data type of the items in the array.

___

### description

• `Optional` **description**: `string`

A description of what the Query parameter is used for.

___

### isRequired

• `Optional` **isRequired**: `boolean`

Flag to mark the Query parameter as a required one.

___

### name

• **name**: `string`

The name of the Query parameter you want to document.

___

### type

• **type**: [`QueryParameterType`](../enums/Documentation_Definition_DataTypes.QueryParameterType.md)

The data type of the value you expect to receive in the Query parameter.
