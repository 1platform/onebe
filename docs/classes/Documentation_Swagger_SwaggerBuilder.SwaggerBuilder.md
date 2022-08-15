[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/SwaggerBuilder](../modules/Documentation_Swagger_SwaggerBuilder.md) / SwaggerBuilder

# Class: SwaggerBuilder

[Documentation/Swagger/SwaggerBuilder](../modules/Documentation_Swagger_SwaggerBuilder.md).SwaggerBuilder

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

___

### routesBuilder

• `Protected` `Readonly` **routesBuilder**: [`SwaggerRoutes`](Documentation_Swagger_Modules_SwaggerRoutes.SwaggerRoutes.md)

___

### store

• `Protected` **store**: `Record`<`string`, `unknown`\> = `{}`

___

### tagsBuilder

• `Protected` `Readonly` **tagsBuilder**: [`SwaggerTags`](Documentation_Swagger_Modules_SwaggerTags.SwaggerTags.md)

## Methods

### build

▸ **build**(): [`SwaggerBuilder`](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md)

#### Returns

[`SwaggerBuilder`](Documentation_Swagger_SwaggerBuilder.SwaggerBuilder.md)

___

### getJSON

▸ **getJSON**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>

___

### getYaml

▸ **getYaml**(): `string`

#### Returns

`string`
