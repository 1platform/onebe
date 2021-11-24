[Spark OneBE - v1.0.6](../README.md) / [Exports](../modules.md) / HTTP/HTTPTypes

# Module: HTTP/HTTPTypes

## Table of contents

### Type aliases

- [HTTPMiddleware](HTTP_HTTPTypes.md#httpmiddleware)

## Type aliases

### HTTPMiddleware

Ƭ **HTTPMiddleware**: (`req`: `Request`, `res`: `Response`, `next?`: `NextFunction`) => `void`

#### Type declaration

▸ (`req`, `res`, `next?`): `void`

Route endpoint Middleware function definition.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `Request` | The request object. |
| `res` | `Response` | The response object. |
| `next?` | `NextFunction` | The next callback function in list. |

##### Returns

`void`
