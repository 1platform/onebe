[Spark OneBE - v1.0.21](../README.md) / [Exports](../modules.md) / [Services/ServiceLoader](../modules/Services_ServiceLoader.md) / ServiceLoader

# Class: ServiceLoader

[Services/ServiceLoader](../modules/Services_ServiceLoader.md).ServiceLoader

The application service loader singleton.

## Table of contents

### Constructors

- [constructor](Services_ServiceLoader.ServiceLoader.md#constructor)

### Properties

- [\_services](Services_ServiceLoader.ServiceLoader.md#_services)
- [\_instance](Services_ServiceLoader.ServiceLoader.md#_instance)

### Accessors

- [instance](Services_ServiceLoader.ServiceLoader.md#instance)

### Methods

- [\_get](Services_ServiceLoader.ServiceLoader.md#_get)
- [\_set](Services_ServiceLoader.ServiceLoader.md#_set)
- [get](Services_ServiceLoader.ServiceLoader.md#get)
- [set](Services_ServiceLoader.ServiceLoader.md#set)

## Constructors

### constructor

• `Protected` **new ServiceLoader**()

The protected constructor of the service loader class.

## Properties

### \_services

• `Protected` **\_services**: `Record`<`string`, [`ServiceBase`](Services_ServiceBase.ServiceBase.md)\> = `{}`

A map containing all the instantiated services of the application.

___

### \_instance

▪ `Static` `Protected` **\_instance**: [`ServiceLoader`](Services_ServiceLoader.ServiceLoader.md) = `null`

The instance of the Service Loader.

## Accessors

### instance

• `Static` `get` **instance**(): [`ServiceLoader`](Services_ServiceLoader.ServiceLoader.md)

Service loader instance getter.

#### Returns

[`ServiceLoader`](Services_ServiceLoader.ServiceLoader.md)

## Methods

### \_get

▸ `Protected` **_get**(`serviceName`): [`ServiceBase`](Services_ServiceBase.ServiceBase.md)

Method used to get the services from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceName` | `string` | The name of the service. |

#### Returns

[`ServiceBase`](Services_ServiceBase.ServiceBase.md)

___

### \_set

▸ `Protected` **_set**<`T`\>(`serviceName`, `serviceInstance`): `T`

Method used to add a service to the service loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceName` | `string` | The name of the service we want to add. |
| `serviceInstance` | `T` | The service instance we want to add. |

#### Returns

`T`

___

### get

▸ `Static` **get**<`T`\>(`serviceName`): `T`

Static method used to get a service from the service loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceName` | `string` | The name of the service we want to get. |

#### Returns

`T`

___

### set

▸ `Static` **set**<`T`\>(`serviceName`, `serviceInstance`): `T`

Static method used to add a service to the service loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceName` | `string` | The name of the service we want to add. |
| `serviceInstance` | `T` | The service instance we want to add. |

#### Returns

`T`
