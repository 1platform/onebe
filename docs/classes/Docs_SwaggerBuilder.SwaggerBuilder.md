[Spark OneBE - v1.0.11](../README.md) / [Exports](../modules.md) / [Docs/SwaggerBuilder](../modules/Docs_SwaggerBuilder.md) / SwaggerBuilder

# Class: SwaggerBuilder

[Docs/SwaggerBuilder](../modules/Docs_SwaggerBuilder.md).SwaggerBuilder

Class representing a Swagger Builder

## Table of contents

### Constructors

- [constructor](Docs_SwaggerBuilder.SwaggerBuilder.md#constructor)

### Properties

- [\_interfaces](Docs_SwaggerBuilder.SwaggerBuilder.md#_interfaces)
- [\_routes](Docs_SwaggerBuilder.SwaggerBuilder.md#_routes)

### Methods

- [getYaml](Docs_SwaggerBuilder.SwaggerBuilder.md#getyaml)

## Constructors

### constructor

• **new SwaggerBuilder**(`routes`, `interfaces`)

The Swagger Builder constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `routes` | [`TRoutesList`](../modules/Docs_DocsInterfaces.md#trouteslist) | The list of routes |
| `interfaces` | `Record`<`string`, [`IInterfaceDoc`](../interfaces/Docs_DocsInterfaces.IInterfaceDoc.md)\> | The list of interfaces |

## Properties

### \_interfaces

• `Protected` **\_interfaces**: `Record`<`string`, [`IInterfaceDoc`](../interfaces/Docs_DocsInterfaces.IInterfaceDoc.md)\> = `{}`

The list of interfaces

___

### \_routes

• `Protected` **\_routes**: [`TRoutesList`](../modules/Docs_DocsInterfaces.md#trouteslist) = `{}`

The list of routes

## Methods

### getYaml

▸ **getYaml**(): `string`

Method for returning the yaml docs

#### Returns

`string`
