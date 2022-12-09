[OneBE Framework - v2.2.3](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/Modules/SwaggerComponents](../modules/Documentation_Swagger_Modules_SwaggerComponents.md) / ISwaggerComponent

# Interface: ISwaggerComponent

[Documentation/Swagger/Modules/SwaggerComponents](../modules/Documentation_Swagger_Modules_SwaggerComponents.md).ISwaggerComponent

Interface used to define how a Swagger Component should look like.

## Table of contents

### Properties

- [description](Documentation_Swagger_Modules_SwaggerComponents.ISwaggerComponent.md#description)
- [properties](Documentation_Swagger_Modules_SwaggerComponents.ISwaggerComponent.md#properties)
- [required](Documentation_Swagger_Modules_SwaggerComponents.ISwaggerComponent.md#required)
- [type](Documentation_Swagger_Modules_SwaggerComponents.ISwaggerComponent.md#type)

## Properties

### description

• `Optional` **description**: `string`

A short description of the component.

___

### properties

• **properties**: `Record`<`string`, `unknown`\>

A list of properties that can be found in the component.

___

### required

• `Optional` **required**: `string`[]

A list of required properties that should appear when sending data to the request.

___

### type

• **type**: `string`

The datatype of the component.
