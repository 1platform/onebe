[Spark OneBE - v2.0.1](../README.md) / [Exports](../modules.md) / [Documentation/DocsController](../modules/Documentation_DocsController.md) / DocsController

# Class: DocsController

[Documentation/DocsController](../modules/Documentation_DocsController.md).DocsController

A base class used for all the routes exposed by your application.

## Hierarchy

- [`Route`](Router_Route.Route.md)

  ↳ **`DocsController`**

## Table of contents

### Constructors

- [constructor](Documentation_DocsController.DocsController.md#constructor)

### Methods

- [getAppInfo](Documentation_DocsController.DocsController.md#getappinfo)
- [getOpenAPIJSON](Documentation_DocsController.DocsController.md#getopenapijson)
- [getOpenAPIYaml](Documentation_DocsController.DocsController.md#getopenapiyaml)
- [getRoutes](Documentation_DocsController.DocsController.md#getroutes)

## Constructors

### constructor

• **new DocsController**()

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

▸ **getOpenAPIYaml**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

___

### getRoutes

▸ **getRoutes**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>
