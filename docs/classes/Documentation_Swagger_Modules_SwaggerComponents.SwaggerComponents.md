[OneBE Framework - v2.2.3](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/Modules/SwaggerComponents](../modules/Documentation_Swagger_Modules_SwaggerComponents.md) / SwaggerComponents

# Class: SwaggerComponents

[Documentation/Swagger/Modules/SwaggerComponents](../modules/Documentation_Swagger_Modules_SwaggerComponents.md).SwaggerComponents

Swagger Components Builder tool.

Using this class the Documentation system will create everything needed
by the OpenAPI 3 components specification.

## Table of contents

### Constructors

- [constructor](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#constructor)

### Methods

- [getComponent](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#getcomponent)
- [getComponents](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#getcomponents)
- [getErrorEntity](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#geterrorentity)
- [getSecuritySchemes](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#getsecurityschemes)

## Constructors

### constructor

• **new SwaggerComponents**()

## Methods

### getComponent

▸ `Protected` **getComponent**(`entity`): [`ISwaggerComponentDefinition`](../interfaces/Documentation_Swagger_Modules_SwaggerComponents.ISwaggerComponentDefinition.md)

Method used to generate the definition of a component. It takes as parameter
the entity metadata information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md) | The entity we want to generate a component from. |

#### Returns

[`ISwaggerComponentDefinition`](../interfaces/Documentation_Swagger_Modules_SwaggerComponents.ISwaggerComponentDefinition.md)

___

### getComponents

▸ **getComponents**(`entities`): `Record`<`string`, `unknown`\>

Method that extracts the components from the entities definition metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[] | The list of documented entities from the metadata store. |

#### Returns

`Record`<`string`, `unknown`\>

___

### getErrorEntity

▸ `Protected` **getErrorEntity**(): `Record`<`string`, `unknown`\>

Method used to generate the error entity definition. Since all the errors
returned by the application follow the same pattern we can easily define a
generic error entity and reuse it everywhere we need to return an error.

#### Returns

`Record`<`string`, `unknown`\>

___

### getSecuritySchemes

▸ `Protected` **getSecuritySchemes**(): `Record`<`string`, `unknown`\>

Method used to generate the security schemas based on the authentication
methods supported by the framework.

#### Returns

`Record`<`string`, `unknown`\>
