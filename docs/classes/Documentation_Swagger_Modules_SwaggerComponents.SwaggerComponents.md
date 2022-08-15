[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/Swagger/Modules/SwaggerComponents](../modules/Documentation_Swagger_Modules_SwaggerComponents.md) / SwaggerComponents

# Class: SwaggerComponents

[Documentation/Swagger/Modules/SwaggerComponents](../modules/Documentation_Swagger_Modules_SwaggerComponents.md).SwaggerComponents

## Table of contents

### Constructors

- [constructor](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#constructor)

### Methods

- [buildComponents](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#buildcomponents)
- [getComponent](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#getcomponent)
- [getErrorEntity](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#geterrorentity)
- [getSecuritySchemes](Documentation_Swagger_Modules_SwaggerComponents.SwaggerComponents.md#getsecurityschemes)

## Constructors

### constructor

• **new SwaggerComponents**()

## Methods

### buildComponents

▸ **buildComponents**(`entities`): `Record`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[] |

#### Returns

`Record`<`string`, `unknown`\>

___

### getComponent

▸ **getComponent**(`entity`): `ISwaggerComponentDefinition`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md) |

#### Returns

`ISwaggerComponentDefinition`

___

### getErrorEntity

▸ **getErrorEntity**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>

___

### getSecuritySchemes

▸ **getSecuritySchemes**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>
