[OneBE Framework - v2.4.13](../README.md) / [Exports](../modules.md) / [Exceptions/PageNotFoundException](../modules/Exceptions_PageNotFoundException.md) / PageNotFoundException

# Class: PageNotFoundException

[Exceptions/PageNotFoundException](../modules/Exceptions_PageNotFoundException.md).PageNotFoundException

Exception thrown when an endpoint is not found or there is no data for
the given parameters.

## Hierarchy

- [`HTTPError`](Exceptions_HTTPError.HTTPError.md)

  ↳ **`PageNotFoundException`**

## Table of contents

### Constructors

- [constructor](Exceptions_PageNotFoundException.PageNotFoundException.md#constructor)

### Properties

- [parameters](Exceptions_PageNotFoundException.PageNotFoundException.md#parameters)
- [status](Exceptions_PageNotFoundException.PageNotFoundException.md#status)

## Constructors

### constructor

• **new PageNotFoundException**()

Constructor of the PageNotFoundException.

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
