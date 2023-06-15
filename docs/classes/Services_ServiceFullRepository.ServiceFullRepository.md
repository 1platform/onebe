[OneBE Framework - v2.6.20](../README.md) / [Exports](../modules.md) / [Services/ServiceFullRepository](../modules/Services_ServiceFullRepository.md) / ServiceFullRepository

# Class: ServiceFullRepository<Entity, KeyType\>

[Services/ServiceFullRepository](../modules/Services_ServiceFullRepository.md).ServiceFullRepository

The base class for your services that are using a database table.

We recommend using a service with repository attached to perform all the actions in your application
that need working with a database.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends `ObjectLiteral` |
| `KeyType` | `number` |

## Hierarchy

- [`ServiceReadRepository`](Services_ServiceReadRepository.ServiceReadRepository.md)<`Entity`, `KeyType`\>

  ↳ **`ServiceFullRepository`**

## Table of contents

### Constructors

- [constructor](Services_ServiceFullRepository.ServiceFullRepository.md#constructor)

### Properties

- [\_dataSource](Services_ServiceFullRepository.ServiceFullRepository.md#_datasource)
- [\_repository](Services_ServiceFullRepository.ServiceFullRepository.md#_repository)
- [primaryKey](Services_ServiceFullRepository.ServiceFullRepository.md#primarykey)

### Accessors

- [dataSource](Services_ServiceFullRepository.ServiceFullRepository.md#datasource)
- [entityName](Services_ServiceFullRepository.ServiceFullRepository.md#entityname)
- [repository](Services_ServiceFullRepository.ServiceFullRepository.md#repository)
- [tableName](Services_ServiceFullRepository.ServiceFullRepository.md#tablename)
- [validator](Services_ServiceFullRepository.ServiceFullRepository.md#validator)

### Methods

- [\_getPaginatedOptions](Services_ServiceFullRepository.ServiceFullRepository.md#_getpaginatedoptions)
- [clone](Services_ServiceFullRepository.ServiceFullRepository.md#clone)
- [create](Services_ServiceFullRepository.ServiceFullRepository.md#create)
- [customValidate](Services_ServiceFullRepository.ServiceFullRepository.md#customvalidate)
- [delete](Services_ServiceFullRepository.ServiceFullRepository.md#delete)
- [fetchRelationDefinition](Services_ServiceFullRepository.ServiceFullRepository.md#fetchrelationdefinition)
- [forceDelete](Services_ServiceFullRepository.ServiceFullRepository.md#forcedelete)
- [get](Services_ServiceFullRepository.ServiceFullRepository.md#get)
- [getAll](Services_ServiceFullRepository.ServiceFullRepository.md#getall)
- [getAllPaginated](Services_ServiceFullRepository.ServiceFullRepository.md#getallpaginated)
- [getAllPaginatedWithDeleted](Services_ServiceFullRepository.ServiceFullRepository.md#getallpaginatedwithdeleted)
- [getAllWithDeleted](Services_ServiceFullRepository.ServiceFullRepository.md#getallwithdeleted)
- [getByKey](Services_ServiceFullRepository.ServiceFullRepository.md#getbykey)
- [init](Services_ServiceFullRepository.ServiceFullRepository.md#init)
- [insertCustomRelationAction](Services_ServiceFullRepository.ServiceFullRepository.md#insertcustomrelationaction)
- [insertCustomRelationDirect](Services_ServiceFullRepository.ServiceFullRepository.md#insertcustomrelationdirect)
- [insertCustomRelationIndirect](Services_ServiceFullRepository.ServiceFullRepository.md#insertcustomrelationindirect)
- [insertRelationAction](Services_ServiceFullRepository.ServiceFullRepository.md#insertrelationaction)
- [insertRelationDirect](Services_ServiceFullRepository.ServiceFullRepository.md#insertrelationdirect)
- [insertRelationIndirect](Services_ServiceFullRepository.ServiceFullRepository.md#insertrelationindirect)
- [removeCustomRelationAction](Services_ServiceFullRepository.ServiceFullRepository.md#removecustomrelationaction)
- [removeCustomRelationDirect](Services_ServiceFullRepository.ServiceFullRepository.md#removecustomrelationdirect)
- [removeCustomRelationIndirect](Services_ServiceFullRepository.ServiceFullRepository.md#removecustomrelationindirect)
- [removeRelationAction](Services_ServiceFullRepository.ServiceFullRepository.md#removerelationaction)
- [removeRelationDirect](Services_ServiceFullRepository.ServiceFullRepository.md#removerelationdirect)
- [removeRelationIndirect](Services_ServiceFullRepository.ServiceFullRepository.md#removerelationindirect)
- [restore](Services_ServiceFullRepository.ServiceFullRepository.md#restore)
- [update](Services_ServiceFullRepository.ServiceFullRepository.md#update)
- [validate](Services_ServiceFullRepository.ServiceFullRepository.md#validate)

## Constructors

### constructor

• `Protected` **new ServiceFullRepository**<`Entity`, `KeyType`\>(`entity`, `dataSource?`)

Service constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends `ObjectLiteral` |
| `KeyType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `EntityTarget`<`Entity`\> | The entity for which we want to create the repository. |
| `dataSource?` | `DataSource` | The datasource on which to create the repository. |

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[constructor](Services_ServiceReadRepository.ServiceReadRepository.md#constructor)

## Properties

### \_dataSource

• `Protected` `Readonly` **\_dataSource**: `DataSource`

The datasource used for the repository.

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[_dataSource](Services_ServiceReadRepository.ServiceReadRepository.md#_datasource)

___

### \_repository

• `Protected` `Readonly` **\_repository**: `Repository`<`Entity`\>

The repository created by TypeORM for the entity used in the repository.

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[_repository](Services_ServiceReadRepository.ServiceReadRepository.md#_repository)

___

### primaryKey

• `Protected` **primaryKey**: `string` = `"id"`

The name of the primary key field used to get data by id.

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[primaryKey](Services_ServiceReadRepository.ServiceReadRepository.md#primarykey)

## Accessors

### dataSource

• `get` **dataSource**(): `DataSource`

Getter for the datasource attached to the service.

#### Returns

`DataSource`

#### Inherited from

ServiceReadRepository.dataSource

___

### entityName

• `get` **entityName**(): `string`

Getter for the entity name used by this service.

#### Returns

`string`

#### Inherited from

ServiceReadRepository.entityName

___

### repository

• `get` **repository**(): `Repository`<`Entity`\>

Getter for the repository attached to the service.

#### Returns

`Repository`<`Entity`\>

#### Inherited from

ServiceReadRepository.repository

___

### tableName

• `get` **tableName**(): `string`

Getter for the table name used by this service.

#### Returns

`string`

#### Inherited from

ServiceReadRepository.tableName

___

### validator

• `get` **validator**(): `AnySchema`<`any`\>

Returns the default data validator of the service.

#### Returns

`AnySchema`<`any`\>

#### Inherited from

ServiceReadRepository.validator

• `set` **validator**(`newValidator`): `void`

Sets the validator value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValidator` | `AnySchema`<`any`\> | The new validator to be set. |

#### Returns

`void`

#### Inherited from

ServiceReadRepository.validator

## Methods

### \_getPaginatedOptions

▸ `Protected` **_getPaginatedOptions**(`paginatedOptions`): [`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)<`Entity`\>

Method used to get the pagination information from the pagination options
sent by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paginatedOptions` | [`IPaginatedOptions`](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md)<`Entity`\> | The pagination options. |

#### Returns

[`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)<`Entity`\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[_getPaginatedOptions](Services_ServiceReadRepository.ServiceReadRepository.md#_getpaginatedoptions)

___

### clone

▸ **clone**<`T`\>(`properties?`): `T`

Creates a clone of the current service.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`ServiceBase`](Services_ServiceBase.ServiceBase.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | `Record`<`string`, `any`\> | A list of properties that you want to pass to the new instance. |

#### Returns

`T`

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[clone](Services_ServiceReadRepository.ServiceReadRepository.md#clone)

___

### create

▸ **create**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

Method used to create a new entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `DeepPartial`<`Entity`\> | The data to be stored. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

___

### customValidate

▸ `Protected` **customValidate**<`T`\>(`data`, `validator`): `T`

Validates the given data against a given validator and returns
the data after applying the validator on it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | The data to be validated. |
| `validator` | `AnySchema`<`any`\> | The validator to be used. |

#### Returns

`T`

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[customValidate](Services_ServiceReadRepository.ServiceReadRepository.md#customvalidate)

___

### delete

▸ **delete**(`itemId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

Method used to delete an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `KeyType` | The ID of the element to be deleted. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

___

### fetchRelationDefinition

▸ `Protected` **fetchRelationDefinition**<`ChildRelationType`\>(`item`, `child`, `data`, `isInvertedTable?`, `isInvertedFields?`, `customRelationName?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`KeyType`, `ChildRelationType`\>\>

Based on the given definition parameters, generates a relation definition that can be used for data
insertion and deletion.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | `undefined` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | `undefined` | The child entity we want to use for handling data. |
| `data` | `ChildRelationType`[] | `undefined` | The child data to be used for database changes. |
| `isInvertedTable?` | `boolean` | `false` | Flag to let the engine know about the table naming changes. |
| `isInvertedFields?` | `boolean` | `false` | Flag to let the engine know about the fields naming changes. |
| `customRelationName?` | `string` | `undefined` | The custom relation name. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`IRelationDefinition`](../interfaces/Services_RelationDefintion.IRelationDefinition.md)<`KeyType`, `ChildRelationType`\>\>

___

### forceDelete

▸ **forceDelete**(`itemId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

Method used to force delete an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `KeyType` | The ID of the element to be deleted. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

___

### get

▸ **get**(`where`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

Method used to get a single element, based on the filters sent
as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `where` | `FindOptionsWhere`<`Entity`\> \| `FindOptionsWhere`<`Entity`\>[] | The where clause to be used to fetch the data. |
| `options?` | `FindOneOptions`<`Entity`\> | Extra options to be used for finding the data. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[get](Services_ServiceReadRepository.ServiceReadRepository.md#get)

___

### getAll

▸ **getAll**(`options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`[]\>

Method used to get all the data from the repository, based on the
filters sent as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `FindManyOptions`<`Entity`\> | A list with options to be used when getting the data. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`[]\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[getAll](Services_ServiceReadRepository.ServiceReadRepository.md#getall)

___

### getAllPaginated

▸ **getAllPaginated**(`paginatedOptions`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)<`Entity`\>\>

Method used to get the paginated data from the repository, based on the
filters sent as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paginatedOptions` | [`IPaginatedOptions`](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md)<`Entity`\> | A list with parameters needed for pagination. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)<`Entity`\>\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[getAllPaginated](Services_ServiceReadRepository.ServiceReadRepository.md#getallpaginated)

___

### getAllPaginatedWithDeleted

▸ **getAllPaginatedWithDeleted**(`paginatedOptions`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)<`Entity`\>\>

Method used to get the paginated data from the repository, with the deleted records,
based on the filters sent as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paginatedOptions` | [`IPaginatedOptions`](../interfaces/Services_PaginationDefinition.IPaginatedOptions.md)<`Entity`\> | A list with parameters needed for pagination. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)<`Entity`\>\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[getAllPaginatedWithDeleted](Services_ServiceReadRepository.ServiceReadRepository.md#getallpaginatedwithdeleted)

___

### getAllWithDeleted

▸ **getAllWithDeleted**(`options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`[]\>

Method used to get all the data from the repository, including deleted items,
based on the filters sent as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `FindManyOptions`<`Entity`\> | A list with options to be used when getting the data. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`[]\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[getAllWithDeleted](Services_ServiceReadRepository.ServiceReadRepository.md#getallwithdeleted)

___

### getByKey

▸ **getByKey**(`entityKey`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

Method used to get a single element, based on the primary key of the entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityKey` | `KeyType` | The primary key value after which we search. |
| `options?` | `FindOneOptions`<`Entity`\> | Extra options to be used for finding the data. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[getByKey](Services_ServiceReadRepository.ServiceReadRepository.md#getbykey)

___

### init

▸ **init**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to perform some initialisations in the class.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[init](Services_ServiceReadRepository.ServiceReadRepository.md#init)

___

### insertCustomRelationAction

▸ `Protected` **insertCustomRelationAction**<`ChildRelationType`\>(`item`, `child`, `customRelationName`, `data`, `isInvertedTable?`, `isInvertedFields?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, performs a database insert into the relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | `undefined` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | `undefined` | The child entity we want to use for handling data. |
| `customRelationName` | `string` | `undefined` | The name of the relation. |
| `data` | `ChildRelationType`[] | `undefined` | The child data to be used for database changes. |
| `isInvertedTable` | `boolean` | `false` | Flag to let the engine know about the table naming changes. |
| `isInvertedFields` | `boolean` | `false` | Flag to let the engine know about the fields naming changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### insertCustomRelationDirect

▸ **insertCustomRelationDirect**<`ChildRelationType`\>(`item`, `child`, `customRelationName`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, performs a database insert into the relation table, using a custom relation name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `customRelationName` | `string` | The name of the custom relation between the 2 tables. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### insertCustomRelationIndirect

▸ **insertCustomRelationIndirect**<`ChildRelationType`\>(`item`, `child`, `customRelationName`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, performs a database insert into the inverted relation table, using a custom relation name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `customRelationName` | `string` | The name of the custom relation between the 2 tables. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### insertRelationAction

▸ `Protected` **insertRelationAction**<`ChildRelationType`\>(`item`, `child`, `data`, `isInvertedTable?`, `isInvertedFields?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, performs a database insert into the relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | `undefined` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | `undefined` | The child entity we want to use for handling data. |
| `data` | `ChildRelationType`[] | `undefined` | The child data to be used for database changes. |
| `isInvertedTable` | `boolean` | `false` | Flag to let the engine know about the table naming changes. |
| `isInvertedFields` | `boolean` | `false` | Flag to let the engine know about the fields naming changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### insertRelationDirect

▸ **insertRelationDirect**<`ChildRelationType`\>(`item`, `child`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, performs a database insert into the relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### insertRelationIndirect

▸ **insertRelationIndirect**<`ChildRelationType`\>(`item`, `child`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, performs a database insert into the inverted relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### removeCustomRelationAction

▸ `Protected` **removeCustomRelationAction**<`ChildRelationType`\>(`item`, `child`, `customRelationName`, `data`, `isInvertedTable?`, `isInvertedFields?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, deletes records from the relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | `undefined` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | `undefined` | The child entity we want to use for handling data. |
| `customRelationName` | `string` | `undefined` | The name of the relation. |
| `data` | `ChildRelationType`[] | `undefined` | The child data to be used for database changes. |
| `isInvertedTable` | `boolean` | `false` | Flag to let the engine know about the table naming changes. |
| `isInvertedFields` | `boolean` | `false` | Flag to let the engine know about the fields naming changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### removeCustomRelationDirect

▸ **removeCustomRelationDirect**<`ChildRelationType`\>(`item`, `child`, `customRelationName`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, deletes data from the relation table, using a custom relation name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `customRelationName` | `string` | The name of the custom relation between the 2 tables. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### removeCustomRelationIndirect

▸ **removeCustomRelationIndirect**<`ChildRelationType`\>(`item`, `child`, `customRelationName`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, deletes data from the inverted relation table, using a custom relation name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `customRelationName` | `string` | The name of the custom relation between the 2 tables. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### removeRelationAction

▸ `Protected` **removeRelationAction**<`ChildRelationType`\>(`item`, `child`, `data`, `isInvertedTable?`, `isInvertedFields?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, deletes records from the relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | `undefined` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | `undefined` | The child entity we want to use for handling data. |
| `data` | `ChildRelationType`[] | `undefined` | The child data to be used for database changes. |
| `isInvertedTable` | `boolean` | `false` | Flag to let the engine know about the table naming changes. |
| `isInvertedFields` | `boolean` | `false` | Flag to let the engine know about the fields naming changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### removeRelationDirect

▸ **removeRelationDirect**<`ChildRelationType`\>(`item`, `child`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, deletes data from the relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### removeRelationIndirect

▸ **removeRelationIndirect**<`ChildRelationType`\>(`item`, `child`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Based on the given definition parameters, deletes data from the inverted relation table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildRelationType` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Entity` \| `KeyType` | The item used by the parent table. |
| `child` | `EntityTarget`<`any`\> | The child entity we want to use for handling data. |
| `data` | `ChildRelationType`[] | The child data to be used for database changes. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### restore

▸ **restore**(`itemId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

Method used to restore a deleted entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `KeyType` | The ID of the element to be restored. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

___

### update

▸ **update**(`itemId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

Method used to update an existing entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `KeyType` | The ID of the element to be updated. |
| `data` | `DeepPartial`<`Entity`\> | The data to be stored. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Entity`\>

___

### validate

▸ **validate**<`T`\>(`data`): `T`

Validates the given data against the default validator and returns
the data after applying the validator on it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | The data to be validated. |

#### Returns

`T`

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[validate](Services_ServiceReadRepository.ServiceReadRepository.md#validate)
