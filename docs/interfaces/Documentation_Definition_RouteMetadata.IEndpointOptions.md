[OneBE Framework - v2.6.11](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointOptions

# Interface: IEndpointOptions

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointOptions

Interface describing an object that is passed as options when
defining an endpoint.

## Table of contents

### Properties

- [description](Documentation_Definition_RouteMetadata.IEndpointOptions.md#description)
- [descriptor](Documentation_Definition_RouteMetadata.IEndpointOptions.md#descriptor)
- [methodName](Documentation_Definition_RouteMetadata.IEndpointOptions.md#methodname)
- [passRequest](Documentation_Definition_RouteMetadata.IEndpointOptions.md#passrequest)
- [path](Documentation_Definition_RouteMetadata.IEndpointOptions.md#path)
- [summary](Documentation_Definition_RouteMetadata.IEndpointOptions.md#summary)
- [verb](Documentation_Definition_RouteMetadata.IEndpointOptions.md#verb)

## Properties

### description

• `Optional` **description**: `string`

A description of what the endpoint does.

___

### descriptor

• **descriptor**: `PropertyDescriptor`

The property descriptor of the function on which we apply the decorator.

___

### methodName

• **methodName**: `string`

The name of the method that is called when accessing the endpoint.

___

### passRequest

• **passRequest**: `boolean`

Flag to mark if the request and response objects are needed in the ContextAPI object.

___

### path

• **path**: `string`

The path used to access the endpoint.

___

### summary

• `Optional` **summary**: `string`

A short description of what the endpoint does.

___

### verb

• **verb**: [`HTTPVerb`](../enums/HTTP_HTTPVerb.HTTPVerb.md)

The HTTP Verb/Method used to access the endpoint.
