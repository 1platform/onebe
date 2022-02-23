[Spark OneBE - v1.0.20](../README.md) / [Exports](../modules.md) / HTTP/HTTPTypes

# Module: HTTP/HTTPTypes

## Table of contents

### Type aliases

- [ExpressNextFunction](HTTP_HTTPTypes.md#expressnextfunction)
- [ExpressRequest](HTTP_HTTPTypes.md#expressrequest)
- [ExpressResponse](HTTP_HTTPTypes.md#expressresponse)
- [HTTPMiddleware](HTTP_HTTPTypes.md#httpmiddleware)

## Type aliases

### ExpressNextFunction

Ƭ **ExpressNextFunction**: `NextFunction`

Re-exported NextFunction Express type/interface.

___

### ExpressRequest

Ƭ **ExpressRequest**: `Request`

Re-exported Request Express type/interface.

___

### ExpressResponse

Ƭ **ExpressResponse**: `Response`

Re-exported Response Express type/interface.

___

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
