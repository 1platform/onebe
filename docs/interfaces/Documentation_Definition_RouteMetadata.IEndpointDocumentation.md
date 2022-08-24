[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IEndpointDocumentation

# Interface: IEndpointDocumentation

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IEndpointDocumentation

Interface describing an object that holds metadata information
about an endpoint, when generating the documentation elements.

## Table of contents

### Properties

- [body](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#body)
- [bodyParameters](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#bodyparameters)
- [description](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#description)
- [parameters](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#parameters)
- [query](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#query)
- [responses](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#responses)
- [statuses](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#statuses)
- [summary](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#summary)
- [throws](Documentation_Definition_RouteMetadata.IEndpointDocumentation.md#throws)

## Properties

### body

• `Optional` **body**: [`IEndpointBody`](Documentation_Definition_RouteMetadata.IEndpointBody.md)

The entity used to describe the properties available in the body of the request.
When this is filled, the `bodyParameters` property will be deleted and the other way around.

___

### bodyParameters

• `Optional` **bodyParameters**: [`IEndpointBodyParameter`](Documentation_Definition_RouteMetadata.IEndpointBodyParameter.md)[]

A list of Body Parameters that can be passed to the endpoint. When this is
filled, the `body` property will be deleted and the other way around.

___

### description

• `Optional` **description**: `string`

A description of what the endpoint does.

___

### parameters

• `Optional` **parameters**: [`IEndpointParameter`](Documentation_Definition_RouteMetadata.IEndpointParameter.md)[]

A list of URL parameters required by the endpoint.

___

### query

• `Optional` **query**: [`IEndpointQuery`](Documentation_Definition_RouteMetadata.IEndpointQuery.md)[]

A list of query parameters that can be sent to the endpoint.

___

### responses

• `Optional` **responses**: [`IEndpointResponse`](Documentation_Definition_RouteMetadata.IEndpointResponse.md)<`any`\>[]

A list of Responses returned by the endpoint.

___

### statuses

• `Optional` **statuses**: `Record`<[`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), `string`\>

A map of HTTP Statuses returned by the endpoint.

___

### summary

• `Optional` **summary**: `string`

A short description of what the endpoint does.

___

### throws

• `Optional` **throws**: [`IEndpointThrowResponse`](Documentation_Definition_RouteMetadata.IEndpointThrowResponse.md)<`any`\>[]

A list of error thrown by the endpoint.
