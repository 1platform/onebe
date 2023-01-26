[OneBE Framework - v2.5.1](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/SwaggerBuilder](../modules/Documentation_Swagger_SwaggerBuilder.md) / SwaggerBuilder

# Class: SwaggerBuilder

[Documentation/Swagger/SwaggerBuilder](../modules/Documentation_Swagger_SwaggerBuilder.md).SwaggerBuilder

Swagger file builder utility.

Using this class the Documentation system will create everything needed
to generate an OpenAPI 3 documentation file.

## Table of contents

### Constructors

- [constructor](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#constructor)

### Properties

- [componentBuilder](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#componentbuilder)
- [routesBuilder](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#routesbuilder)
- [store](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#store)
- [tagsBuilder](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#tagsbuilder)

### Methods

- [build](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#build)
- [getJSON](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#getjson)
- [getYaml](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md#getyaml)

## Constructors

### constructor

• **new SwaggerBuilder**()

## Properties

### componentBuilder

• `Protected` `Readonly` **componentBuilder**: [`SwaggerComponents`](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md)

Instance of the components builder tool.

Using this tool, the Swagger Builder adds all the entities used by the routes
in their body or in their responses.

___

### routesBuilder

• `Protected` `Readonly` **routesBuilder**: [`SwaggerRoutes`](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md)

Instance of the routes builder tool.

Using this tool, the Swagger Builder lists all the endpoints exposed by your
application, grouped by a tag and the path used for the various verbs used.

___

### store

• `Protected` **store**: `Record`<`string`, `unknown`\> = `{}`

The data store used to hold all the information required by the
OpenAPI 3 specifications.

___

### tagsBuilder

• `Protected` `Readonly` **tagsBuilder**: [`SwaggerTags`](Documentation_Swagger_Modules_SwaggerTags.SwaggerTags.md)

Instance of the tags builder tool.

Using this tool, the Swagger Builder creates all the tags that will group the
routes exposed by your application.

## Methods

### build

▸ **build**(): [`SwaggerBuilder`](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md)

Method used to build the OpenAPI 3 information store.

This method will take the information defined by you in the documentation metadata
using the Documentation SDK and create all the various items required by the OpenAPI 3
specification.

#### Returns

[`SwaggerBuilder`](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md)

___

### getJSON

▸ **getJSON**(): `Record`<`string`, `unknown`\>

Method used to export the JSON version of the OpenAPI 3 documentation.

#### Returns

`Record`<`string`, `unknown`\>

___

### getYaml

▸ **getYaml**(): `string`

Method used to export the YAML version of the OpenAPI 3 documentation.

#### Returns

`string`
