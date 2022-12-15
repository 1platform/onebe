[OneBE Framework - v2.2.5](../README.md) / [Exports](../modules.md) / [Documentation/DocumentationRoute](../modules/Documentation_DocumentationRoute.md) / DocumentationRoute

# Class: DocumentationRoute

[Documentation/DocumentationRoute](../modules/Documentation_DocumentationRoute.md).DocumentationRoute

A base class used for all the routes exposed by your application.

## Hierarchy

- [`Route`](Router_Route.Route.md)

  ↳ **`DocumentationRoute`**

## Table of contents

### Constructors

- [constructor](Documentation_DocumentationRoute.DocumentationRoute.md#constructor)

### Methods

- [getAppInfo](Documentation_DocumentationRoute.DocumentationRoute.md#getappinfo)
- [getOpenAPIJSON](Documentation_DocumentationRoute.DocumentationRoute.md#getopenapijson)
- [getOpenAPIYaml](Documentation_DocumentationRoute.DocumentationRoute.md#getopenapiyaml)
- [getRoutes](Documentation_DocumentationRoute.DocumentationRoute.md#getroutes)

## Constructors

### constructor

• **new DocumentationRoute**()

#### Overrides

[Route](Router_Route.Route.md).[constructor](Router_Route.Route.md#constructor)

## Methods

### getAppInfo

▸ **getAppInfo**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>

___

### getOpenAPIJSON

▸ **getOpenAPIJSON**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

___

### getOpenAPIYaml

▸ **getOpenAPIYaml**(): [`IResponse`](../interfaces/Router_RouteInterfaces.IResponse.md)<`string`\>

#### Returns

[`IResponse`](../interfaces/Router_RouteInterfaces.IResponse.md)<`string`\>

___

### getRoutes

▸ **getRoutes**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>
