[OneBE Framework - v2.4.4](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointBody

# Interface: IEndpointBody

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointBody

Interface describing an object that holds metadata information
about the entity used as a request body.

## Table of contents

### Properties

- [description](Documentation_Definition_RouteMetadata.IEndpointBody.md#description)
- [entity](Documentation_Definition_RouteMetadata.IEndpointBody.md#entity)
- [isArray](Documentation_Definition_RouteMetadata.IEndpointBody.md#isarray)

## Properties

### description

• `Optional` **description**: `string`

A description of what you want to do with body requests.

___

### entity

• **entity**: `string`

The name of the entity used to describe the contents of the request body.

___

### isArray

• `Optional` **isArray**: `boolean`

Flag used to mark the body request as an array of elements of the given entity.
