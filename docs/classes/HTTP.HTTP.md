[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [HTTP](../modules/HTTP.md) / HTTP

# Class: HTTP

[HTTP](../modules/HTTP.md).HTTP

The HTTP service used to create the HTTP server.

Through this service you can start an HTTP server using Express, secured with
Helmet and having some default Middlewares/Plugins loaded in the application.

## Table of contents

### Constructors

- [constructor](HTTP.HTTP.md#constructor)

### Accessors

- [app](HTTP.HTTP.md#app)
- [host](HTTP.HTTP.md#host)
- [http](HTTP.HTTP.md#http)
- [port](HTTP.HTTP.md#port)

### Methods

- [setLocal](HTTP.HTTP.md#setlocal)
- [start](HTTP.HTTP.md#start)
- [use](HTTP.HTTP.md#use)

## Constructors

### constructor

• **new HTTP**()

HTTP Class constructor.

## Accessors

### app

• `get` **app**(): `Application`

Getter for the Express instance.

#### Returns

`Application`

___

### host

• `get` **host**(): `string`

Getter for the Host IP used to serve the HTTP server.

#### Returns

`string`

___

### http

• `get` **http**(): `Server`

Getter for the HTTP server.

#### Returns

`Server`

___

### port

• `get` **port**(): `number`

Getter for the port used to serve the HTTP server.

#### Returns

`number`

## Methods

### setLocal

▸ **setLocal**(`variable`, `value`): `void`

Set a local variable on the express application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variable` | `string` | The variable name. |
| `value` | `any` | The value of the variable. |

#### Returns

`void`

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Method used to start the HTTP server created by the service.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### use

▸ **use**(`middleware`): `void`

Attach a middleware or a list of middlewares to the express application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `middleware` | [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md) \| [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)[] | A middleware or a list of middlewares you want to attach. |

#### Returns

`void`
