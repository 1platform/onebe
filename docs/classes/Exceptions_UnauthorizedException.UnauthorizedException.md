[OneBE Framework - v2.2.5](../README.md) / [Exports](../modules.md) / [Exceptions/UnauthorizedException](../modules/Exceptions_UnauthorizedException.md) / UnauthorizedException

# Class: UnauthorizedException

[Exceptions/UnauthorizedException](../modules/Exceptions_UnauthorizedException.md).UnauthorizedException

Exception thrown when a user isn't authorized to perform the action.

## Hierarchy

- [`HTTPError`](Exceptions_HTTPError.HTTPError.md)

  ↳ **`UnauthorizedException`**

## Table of contents

### Constructors

- [constructor](Exceptions_UnauthorizedException.UnauthorizedException.md#constructor)

### Properties

- [parameters](Exceptions_UnauthorizedException.UnauthorizedException.md#parameters)
- [status](Exceptions_UnauthorizedException.UnauthorizedException.md#status)

## Constructors

### constructor

• **new UnauthorizedException**()

Constructor of the UnauthorizedException.

#### Overrides

[HTTPError](Exceptions_HTTPError.HTTPError.md).[constructor](Exceptions_HTTPError.HTTPError.md#constructor)

## Properties

### parameters

• **parameters**: `any` = `null`

The additional parameters sent to the exception.

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[parameters](Exceptions_HTTPError.HTTPError.md#parameters)

___

### status

• **status**: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) = `HTTPStatus.SERVER_ERROR`

The HTTP Status code of the error.

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[status](Exceptions_HTTPError.HTTPError.md#status)
