[OneBE Framework - v2.4.7](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointParameter

# Interface: IEndpointParameter

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointParameter

Interface describing an object that holds metadata information
about a URL parameter of an endpoint.

## Table of contents

### Properties

- [description](Documentation_Definition_RouteMetadata.IEndpointParameter.md#description)
- [isNumeric](Documentation_Definition_RouteMetadata.IEndpointParameter.md#isnumeric)
- [name](Documentation_Definition_RouteMetadata.IEndpointParameter.md#name)

## Properties

### description

• `Optional` **description**: `string`

A description of what the URL parameter is used for.

___

### isNumeric

• **isNumeric**: `boolean`

Flag to mark the URL parameter as numeric.

___

### name

• **name**: `string`

The name of the URL parameter you want to document. This has to be exactly the same
as the value you add in the endpoint URL. Example `/:id` -> parameter name: `id`.
