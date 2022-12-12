[OneBE Framework - v2.2.4](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/Modules/SwaggerTags](../modules/Documentation_Swagger_Modules_SwaggerTags.md) / SwaggerTags

# Class: SwaggerTags

[Documentation/Swagger/Modules/SwaggerTags](../modules/Documentation_Swagger_Modules_SwaggerTags.md).SwaggerTags

Swagger Tags Builder tool.

Using this class the Documentation system will create everything needed
by the OpenAPI 3 tags specification.

## Table of contents

### Constructors

- [constructor](Documentation_Swagger_Modules_SwaggerTags.SwaggerTags.md#constructor)

### Methods

- [getTags](Documentation_Swagger_Modules_SwaggerTags.SwaggerTags.md#gettags)

## Constructors

### constructor

• **new SwaggerTags**()

## Methods

### getTags

▸ **getTags**(`routesMetadata`): `Record`<`string`, `unknown`\>[]

Method that extracts the tags from the route definition metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `routesMetadata` | [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[] | The list of documented routes from the metadata store. |

#### Returns

`Record`<`string`, `unknown`\>[]
