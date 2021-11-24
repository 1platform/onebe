[Spark OneBE - v1.0.4](../README.md) / [Exports](../modules.md) / [Docs/DocsStore](../modules/Docs_DocsStore.md) / DocsStore

# Class: DocsStore

[Docs/DocsStore](../modules/Docs_DocsStore.md).DocsStore

Class representing the Docs store

## Table of contents

### Properties

- [\_interfaces](Docs_DocsStore.DocsStore.md#_interfaces)
- [\_routes](Docs_DocsStore.DocsStore.md#_routes)
- [\_instance](Docs_DocsStore.DocsStore.md#_instance)

### Accessors

- [instance](Docs_DocsStore.DocsStore.md#instance)

### Methods

- [addInterfaceProperty](Docs_DocsStore.DocsStore.md#addinterfaceproperty)
- [addRoute](Docs_DocsStore.DocsStore.md#addroute)
- [defineInterface](Docs_DocsStore.DocsStore.md#defineinterface)
- [getRoutes](Docs_DocsStore.DocsStore.md#getroutes)
- [getYaml](Docs_DocsStore.DocsStore.md#getyaml)
- [initGroup](Docs_DocsStore.DocsStore.md#initgroup)
- [setGroupItem](Docs_DocsStore.DocsStore.md#setgroupitem)

## Properties

### \_interfaces

• `Protected` **\_interfaces**: `Record`<`string`, [`IInterfaceDoc`](../interfaces/Docs_DocsInterfaces.IInterfaceDoc.md)\> = `{}`

The list of interfaces

___

### \_routes

• `Protected` **\_routes**: [`TRoutesList`](../modules/Docs_DocsInterfaces.md#trouteslist) = `{}`

The list of routes

___

### \_instance

▪ `Static` `Protected` **\_instance**: [`DocsStore`](Docs_DocsStore.DocsStore.md)

The Docs store instance

## Accessors

### instance

• `Static` `get` **instance**(): [`DocsStore`](Docs_DocsStore.DocsStore.md)

Get method to retrieve the Docs store instance

#### Returns

[`DocsStore`](Docs_DocsStore.DocsStore.md)

## Methods

### addInterfaceProperty

▸ **addInterfaceProperty**(`interfaceName`, `definition`): `void`

Method for adding interface property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interfaceName` | `string` | The name of the Interface |
| `definition` | [`IBodyDoc`](../interfaces/Docs_DocsInterfaces.IBodyDoc.md) | The definition of the property |

#### Returns

`void`

___

### addRoute

▸ **addRoute**(`group`, `routeDefinition`, `docs`): `void`

Method for adding a new Route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | `string` | The group in which to add the Route |
| `routeDefinition` | [`IRouteDoc`](../interfaces/Docs_DocsInterfaces.IRouteDoc.md) | The Route definition |
| `docs` | [`RouteDocs`](../modules/Docs_DocsDecorators.md#routedocs) | The docs |

#### Returns

`void`

___

### defineInterface

▸ **defineInterface**(`name`, `description?`): `void`

Method for defining an Interface

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the interface |
| `description?` | `string` | The description |

#### Returns

`void`

___

### getRoutes

▸ **getRoutes**(): `any`

Method to get the routes

#### Returns

`any`

___

### getYaml

▸ **getYaml**(): `string`

Method to get docs in YAML format

#### Returns

`string`

___

### initGroup

▸ **initGroup**(`name`, `basePath`, `description?`, `isAPI?`): `void`

Method used to initialize a Group

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name |
| `basePath` | `string` | `undefined` | The base path |
| `description` | `string` | `""` | The description |
| `isAPI` | `boolean` | `false` | If it is an API |

#### Returns

`void`

___

### setGroupItem

▸ **setGroupItem**(`name`, `key`, `value`): `void`

Method used to set a Group item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name |
| `key` | `string` | The key (description or name) |
| `value` | `string` | The value to be set |

#### Returns

`void`
