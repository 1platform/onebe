[OneBE Framework - v2.1.5](../README.md) / [Exports](../modules.md) / [Exceptions/ForbiddenException](../modules/Exceptions_ForbiddenException.md) / ForbiddenException

# Class: ForbiddenException

[Exceptions/ForbiddenException](../modules/Exceptions_ForbiddenException.md).ForbiddenException

Exception thrown when an endpoint has restricted access.

## Hierarchy

- [`HTTPError`](Exceptions_HTTPError.HTTPError.md)

  ↳ **`ForbiddenException`**

## Table of contents

### Constructors

- [constructor](Exceptions_ForbiddenException.ForbiddenException.md#constructor)

### Properties

- [parameters](Exceptions_ForbiddenException.ForbiddenException.md#parameters)
- [status](Exceptions_ForbiddenException.ForbiddenException.md#status)

## Constructors

### constructor

• **new ForbiddenException**()

Constructor of the ForbiddenException.

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
