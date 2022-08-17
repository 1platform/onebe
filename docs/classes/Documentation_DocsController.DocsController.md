[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Documentation/DocsController](../modules/Documentation_DocsController.md) / DocsController

# Class: DocsController

[Documentation/DocsController](../modules/Documentation_DocsController.md).DocsController

A base class used for all the routes exposed by the final application.

## Hierarchy

- [`Route`](Router_Route.Route.md)

  ↳ **`DocsController`**

## Table of contents

### Constructors

- [constructor](Documentation_DocsController.DocsController.md#constructor)

### Methods

- [getAppInfo](Documentation_DocsController.DocsController.md#getappinfo)
- [getOpenAPI](Documentation_DocsController.DocsController.md#getopenapi)
- [getRoutes](Documentation_DocsController.DocsController.md#getroutes)

## Constructors

### constructor

• **new DocsController**()

#### Overrides

[Route](Router_Route.Route.md).[constructor](Router_Route.Route.md#constructor)

## Methods

### getAppInfo

▸ **getAppInfo**(`context`): `Record`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ContextAPI`](Router_ContextAPI.ContextAPI.md)<`any`\> |

#### Returns

`Record`<`string`, `unknown`\>

___

### getOpenAPI

▸ **getOpenAPI**(`context`): `Record`<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ContextAPI`](Router_ContextAPI.ContextAPI.md)<`any`\> |

#### Returns

`Record`<`string`, `string`\>

___

### getRoutes

▸ **getRoutes**(`context`): `Record`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ContextAPI`](Router_ContextAPI.ContextAPI.md)<`any`\> |

#### Returns

`Record`<`string`, `unknown`\>
