[OneBE Framework - v2.6.20](../README.md) / [Exports](../modules.md) / [Services/ServiceWithRepository](../modules/Services_ServiceWithRepository.md) / ServiceWithRepository

# Class: ServiceWithRepository<Entity\>

[Services/ServiceWithRepository](../modules/Services_ServiceWithRepository.md).ServiceWithRepository

The base class for your services that are using a database table.

We recommend using a service with repository attached to perform all the actions in your application
that need working with a database.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends `ObjectLiteral` |

## Hierarchy

- [`ServiceBase`](Services_ServiceBase.ServiceBase.md)

  ↳ **`ServiceWithRepository`**

  ↳↳ [`ServiceReadRepository`](Services_ServiceReadRepository.ServiceReadRepository.md)

## Table of contents

### Constructors

- [constructor](Services_ServiceWithRepository.ServiceWithRepository.md#constructor)

### Properties

- [\_dataSource](Services_ServiceWithRepository.ServiceWithRepository.md#_datasource)
- [\_repository](Services_ServiceWithRepository.ServiceWithRepository.md#_repository)

### Accessors

- [dataSource](Services_ServiceWithRepository.ServiceWithRepository.md#datasource)
- [entityName](Services_ServiceWithRepository.ServiceWithRepository.md#entityname)
- [repository](Services_ServiceWithRepository.ServiceWithRepository.md#repository)
- [tableName](Services_ServiceWithRepository.ServiceWithRepository.md#tablename)
- [validator](Services_ServiceWithRepository.ServiceWithRepository.md#validator)

### Methods

- [clone](Services_ServiceWithRepository.ServiceWithRepository.md#clone)
- [customValidate](Services_ServiceWithRepository.ServiceWithRepository.md#customvalidate)
- [init](Services_ServiceWithRepository.ServiceWithRepository.md#init)
- [validate](Services_ServiceWithRepository.ServiceWithRepository.md#validate)

## Constructors

### constructor

• `Protected` **new ServiceWithRepository**<`Entity`\>(`entity`, `dataSource?`)

Service constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends `ObjectLiteral` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `EntityTarget`<`Entity`\> | The entity for which we want to create the repository. |
| `dataSource?` | `DataSource` | The datasource on which to create the repository. |

#### Overrides

[ServiceBase](Services_ServiceBase.ServiceBase.md).[constructor](Services_ServiceBase.ServiceBase.md#constructor)

## Properties

### \_dataSource

• `Protected` `Readonly` **\_dataSource**: `DataSource`

The datasource used for the repository.

___

### \_repository

• `Protected` `Readonly` **\_repository**: `Repository`<`Entity`\>

The repository created by TypeORM for the entity used in the repository.

## Accessors

### dataSource

• `get` **dataSource**(): `DataSource`

Getter for the datasource attached to the service.

#### Returns

`DataSource`

___

### entityName

• `get` **entityName**(): `string`

Getter for the entity name used by this service.

#### Returns

`string`

___

### repository

• `get` **repository**(): `Repository`<`Entity`\>

Getter for the repository attached to the service.

#### Returns

`Repository`<`Entity`\>

___

### tableName

• `get` **tableName**(): `string`

Getter for the table name used by this service.

#### Returns

`string`

___

### validator

• `get` **validator**(): `AnySchema`<`any`\>

Returns the default data validator of the service.

#### Returns

`AnySchema`<`any`\>

#### Inherited from

ServiceBase.validator

• `set` **validator**(`newValidator`): `void`

Sets the validator value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValidator` | `AnySchema`<`any`\> | The new validator to be set. |

#### Returns

`void`

#### Inherited from

ServiceBase.validator

## Methods

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

[ServiceBase](Services_ServiceBase.ServiceBase.md).[clone](Services_ServiceBase.ServiceBase.md#clone)

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

[ServiceBase](Services_ServiceBase.ServiceBase.md).[customValidate](Services_ServiceBase.ServiceBase.md#customvalidate)

___

### init

▸ **init**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to perform some initialisations in the class.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Inherited from

[ServiceBase](Services_ServiceBase.ServiceBase.md).[init](Services_ServiceBase.ServiceBase.md#init)

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

[ServiceBase](Services_ServiceBase.ServiceBase.md).[validate](Services_ServiceBase.ServiceBase.md#validate)
