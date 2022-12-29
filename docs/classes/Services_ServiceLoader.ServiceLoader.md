[OneBE Framework - v2.3.0](../README.md) / [Exports](../modules.md) / [Services/ServiceLoader](../modules/Services_ServiceLoader.md) / ServiceLoader

# Class: ServiceLoader

[Services/ServiceLoader](../modules/Services_ServiceLoader.md).ServiceLoader

A system to load services into the application and reuse them as needed.

## Table of contents

### Constructors

- [constructor](Services_ServiceLoader.ServiceLoader.md#constructor)

### Properties

- [\_clonedServices](Services_ServiceLoader.ServiceLoader.md#_clonedservices)
- [\_services](Services_ServiceLoader.ServiceLoader.md#_services)
- [\_instance](Services_ServiceLoader.ServiceLoader.md#_instance)

### Accessors

- [instance](Services_ServiceLoader.ServiceLoader.md#instance)

### Methods

- [\_clone](Services_ServiceLoader.ServiceLoader.md#_clone)
- [\_get](Services_ServiceLoader.ServiceLoader.md#_get)
- [\_set](Services_ServiceLoader.ServiceLoader.md#_set)
- [clone](Services_ServiceLoader.ServiceLoader.md#clone)
- [get](Services_ServiceLoader.ServiceLoader.md#get)
- [set](Services_ServiceLoader.ServiceLoader.md#set)

## Constructors

### constructor

• `Protected` **new ServiceLoader**()

The protected constructor of the service loader class.

## Properties

### \_clonedServices

• `Protected` **\_clonedServices**: `Record`<`string`, [`ServiceBase`](Services_ServiceBase.ServiceBase.md)\> = `{}`

A map containing all the cloned instances in the application.

___

### \_services

• `Protected` **\_services**: `Record`<`string`, [`ServiceBase`](Services_ServiceBase.ServiceBase.md)\> = `{}`

A map containing all the instantiated services in the application.

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

### \_clone

▸ `Protected` **_clone**<`T`\>(`serviceName`, `properties?`): `T`

Method used to get the services from the database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceName` | `string` | The name of the service. |
| `properties?` | `Record`<`string`, `any`\> | A list of properties that you want to pass to the new instance. |

#### Returns

`T`

___

### \_get

▸ `Protected` **_get**<`T`\>(`serviceName`): `T`

Method used to get the services from the database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceName` | `string` | The name of the service. |

#### Returns

`T`

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

### clone

▸ `Static` **clone**<`T`\>(`serviceNameOrClass`, `properties`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Static method used to get a clone with parameters of a service from the service loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceNameOrClass` | `string` \| [`Constructor`](../modules/Documentation_MetadataTypes.md#constructor)<`T`\> | The name of the service you want to get. |
| `properties` | `Record`<`string`, `any`\> | A list of properties that you want to pass to the new instance. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

___

### get

▸ `Static` **get**<`T`\>(`serviceNameOrClass`, `properties?`): `T`

Static method used to get a service from the service loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceNameOrClass` | `string` \| [`Constructor`](../modules/Documentation_MetadataTypes.md#constructor)<`T`\> | The name of the service you want to get. |
| `properties?` | `Record`<`string`, `any`\> | A list of properties that you want to pass to the new instance. |

#### Returns

`T`

___

### set

▸ `Static` **set**<`T`\>(`serviceNameOrInstance`, `serviceInstance?`): `T`

Static method used to add a service to the service loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ServiceBase`](Services_ServiceBase.ServiceBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceNameOrInstance` | `string` \| `T` | The name of the service you want to add or The service instance you want to add. |
| `serviceInstance?` | `T` | The service instance you want to add. |

#### Returns

`T`
