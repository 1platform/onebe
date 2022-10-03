[OneBE Framework - v2.1.9](../README.md) / [Exports](../modules.md) / HTTP/HTTPTypes

# Module: HTTP/HTTPTypes

## Table of contents

### Type Aliases

- [ExpressNextFunction](HTTP_HTTPTypes.md#expressnextfunction)
- [ExpressRequest](HTTP_HTTPTypes.md#expressrequest)
- [ExpressResponse](HTTP_HTTPTypes.md#expressresponse)
- [HTTPMiddleware](HTTP_HTTPTypes.md#httpmiddleware)

## Type Aliases

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

Ƭ **HTTPMiddleware**: (`request`: `Request`, `response`: `Response`, `next?`: `NextFunction`) => `void`

#### Type declaration

▸ (`request`, `response`, `next?`): `void`

Definition of how a Middleware Function should look like.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `Request` | The request object. |
| `response` | `Response` | The response object. |
| `next?` | `NextFunction` | The next callback function in list. |

##### Returns

`void`
