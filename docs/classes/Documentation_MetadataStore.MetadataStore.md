[OneBE Framework - v2.1.3](../README.md) / [Exports](../modules.md) / [Documentation/MetadataStore](../modules/Documentation_MetadataStore.md) / MetadataStore

# Class: MetadataStore

[Documentation/MetadataStore](../modules/Documentation_MetadataStore.md).MetadataStore

A store where you can document the entities and routes of your application.

Inside this store the framework keeps information about what should be passed
by whom and where. When needed, the documentation system will extract all the
information needed and generate the required documentation.

## Table of contents

### Properties

- [\_instance](Documentation_MetadataStore.MetadataStore.md#_instance)

### Accessors

- [entities](Documentation_MetadataStore.MetadataStore.md#entities)
- [entity](Documentation_MetadataStore.MetadataStore.md#entity)
- [route](Documentation_MetadataStore.MetadataStore.md#route)
- [routes](Documentation_MetadataStore.MetadataStore.md#routes)
- [instance](Documentation_MetadataStore.MetadataStore.md#instance)

## Properties

### \_instance

▪ `Static` `Protected` **\_instance**: [`MetadataStore`](Documentation_MetadataStore.MetadataStore.md)

The Metadata Store instance

## Accessors

### entities

• `get` **entities**(): [`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

Getter for the list of entities defined in the application.

#### Returns

[`IEntityMetadata`](../interfaces/Documentation_Definition_EntityMetadata.IEntityMetadata.md)[]

___

### entity

• `get` **entity**(): [`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

Getter for the entity metadata definition utility.

#### Returns

[`EntityDefinition`](Documentation_EntityDefinition.EntityDefinition.md)

___

### route

• `get` **route**(): [`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

Getter for the route metadata definition utility.

#### Returns

[`RouteDefinition`](Documentation_RouteDefinition.RouteDefinition.md)

___

### routes

• `get` **routes**(): [`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[]

Getter for the list of routes defined in the application.

#### Returns

[`IRouteMetadata`](../interfaces/Documentation_Definition_RouteMetadata.IRouteMetadata.md)[]

___

### instance

• `Static` `get` **instance**(): [`MetadataStore`](Documentation_MetadataStore.MetadataStore.md)

Getter for the MetadataStore instance.

#### Returns

[`MetadataStore`](Documentation_MetadataStore.MetadataStore.md)
