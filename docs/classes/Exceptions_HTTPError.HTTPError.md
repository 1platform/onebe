[OneBE Framework - v2.6.17](../README.md) / [Exports](../modules.md) / [Exceptions/HTTPError](../modules/Exceptions_HTTPError.md) / HTTPError

# Class: HTTPError

[Exceptions/HTTPError](../modules/Exceptions_HTTPError.md).HTTPError

A Generic Error with HTTP Status Code that can be thrown from your application.

Using the HTTPError class you can easily specify the HTTP Status Code of the response
when the error is triggered.

## Hierarchy

- [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

  ↳ **`HTTPError`**

  ↳↳ [`ForbiddenException`](Exceptions_ForbiddenException.ForbiddenException.md)

  ↳↳ [`PageNotFoundException`](Exceptions_PageNotFoundException.PageNotFoundException.md)

  ↳↳ [`UnauthorizedException`](Exceptions_UnauthorizedException.UnauthorizedException.md)

## Table of contents

### Constructors

- [constructor](Exceptions_HTTPError.HTTPError.md#constructor)

### Properties

- [parameters](Exceptions_HTTPError.HTTPError.md#parameters)
- [status](Exceptions_HTTPError.HTTPError.md#status)

## Constructors

### constructor

• **new HTTPError**(`message`, `status?`, `parameters?`)

Constructor of the Generic HTTP Error.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | The message of the exception. |
| `status` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.SERVER_ERROR` | The status code of the exception. |
| `parameters?` | `any` | `undefined` | Some extra parameters sent to the error. |

#### Overrides

Error.constructor

## Properties

### parameters

• **parameters**: `any` = `null`

The additional parameters sent to the exception.

___

### status

• **status**: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) = `HTTPStatus.SERVER_ERROR`

The HTTP Status code of the error.
