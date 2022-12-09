[OneBE Framework - v2.2.3](../README.md) / [Exports](../modules.md) / [Services/ServiceFullRepository](../modules/Services_ServiceFullRepository.md) / ServiceFullRepository

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
- [repository](Services_ServiceFullRepository.ServiceFullRepository.md#repository)
- [validator](Services_ServiceFullRepository.ServiceFullRepository.md#validator)

### Methods

- [\_getPaginatedOptions](Services_ServiceFullRepository.ServiceFullRepository.md#_getpaginatedoptions)
- [create](Services_ServiceFullRepository.ServiceFullRepository.md#create)
- [customValidate](Services_ServiceFullRepository.ServiceFullRepository.md#customvalidate)
- [delete](Services_ServiceFullRepository.ServiceFullRepository.md#delete)
- [get](Services_ServiceFullRepository.ServiceFullRepository.md#get)
- [getAll](Services_ServiceFullRepository.ServiceFullRepository.md#getall)
- [getAllPaginated](Services_ServiceFullRepository.ServiceFullRepository.md#getallpaginated)
- [getByKey](Services_ServiceFullRepository.ServiceFullRepository.md#getbykey)
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

### repository

• `get` **repository**(): `Repository`<`Entity`\>

Getter for the repository attached to the service.

#### Returns

`Repository`<`Entity`\>

#### Inherited from

ServiceReadRepository.repository

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
| `paginatedOptions` | [`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)<`Entity`\> | The pagination options. |

#### Returns

[`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)<`Entity`\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[_getPaginatedOptions](Services_ServiceReadRepository.ServiceReadRepository.md#_getpaginatedoptions)

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
| `itemId` | `KeyType` | The ID of the element to be updated. |

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
| `where` | `FindOptionsWhere`<`Entity`\> | The where clause to be used to fetch the data. |
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
| `paginatedOptions` | [`PaginatedOptions`](Services_PaginationDefinition.PaginatedOptions.md)<`Entity`\> | A list with parameters needed for pagination. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PaginatedEntity`](Services_PaginationDefinition.PaginatedEntity.md)<`Entity`\>\>

#### Inherited from

[ServiceReadRepository](Services_ServiceReadRepository.ServiceReadRepository.md).[getAllPaginated](Services_ServiceReadRepository.ServiceReadRepository.md#getallpaginated)

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
