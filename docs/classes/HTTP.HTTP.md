[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [HTTP](../modules/HTTP.md) / HTTP

# Class: HTTP

[HTTP](../modules/HTTP.md).HTTP

The HTTP server handler class.

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

Express application getter.

#### Returns

`Application`

___

### host

• `get` **host**(): `string`

The ip on which we listen on for http requests.

#### Returns

`string`

___

### http

• `get` **http**(): `Server`

HTTP Server instance getter.

#### Returns

`Server`

___

### port

• `get` **port**(): `number`

The port on which we listen on for http requests.

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

▸ **start**(): `void`

Start the HTTP server.

#### Returns

`void`

___

### use

▸ **use**(`middleware`): `void`

Attach a middleware to the express application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `middleware` | [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md) \| [`IMiddleware`](../interfaces/Middlewares_IMiddleware.IMiddleware.md)[] | The middleware we want to attach. |

#### Returns

`void`
