[Spark OneBE - v1.0.6](../README.md) / [Exports](../modules.md) / [Exceptions/PageNotFoundException](../modules/Exceptions_PageNotFoundException.md) / PageNotFoundException

# Class: PageNotFoundException

[Exceptions/PageNotFoundException](../modules/Exceptions_PageNotFoundException.md).PageNotFoundException

Exception thrown when an endpoint is not found.

## Hierarchy

- [`HTTPError`](Exceptions_HTTPError.HTTPError.md)

  ↳ **`PageNotFoundException`**

## Table of contents

### Constructors

- [constructor](Exceptions_PageNotFoundException.PageNotFoundException.md#constructor)

### Properties

- [message](Exceptions_PageNotFoundException.PageNotFoundException.md#message)
- [name](Exceptions_PageNotFoundException.PageNotFoundException.md#name)
- [parameters](Exceptions_PageNotFoundException.PageNotFoundException.md#parameters)
- [stack](Exceptions_PageNotFoundException.PageNotFoundException.md#stack)
- [status](Exceptions_PageNotFoundException.PageNotFoundException.md#status)
- [prepareStackTrace](Exceptions_PageNotFoundException.PageNotFoundException.md#preparestacktrace)
- [stackTraceLimit](Exceptions_PageNotFoundException.PageNotFoundException.md#stacktracelimit)

### Methods

- [captureStackTrace](Exceptions_PageNotFoundException.PageNotFoundException.md#capturestacktrace)

## Constructors

### constructor

• **new PageNotFoundException**()

Constructor of the PageNotFoundException.

#### Overrides

[HTTPError](Exceptions_HTTPError.HTTPError.md).[constructor](Exceptions_HTTPError.HTTPError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[message](Exceptions_HTTPError.HTTPError.md#message)

___

### name

• **name**: `string`

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[name](Exceptions_HTTPError.HTTPError.md#name)

___

### parameters

• **parameters**: `any` = `null`

The additional parameters sent to the exception.

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[parameters](Exceptions_HTTPError.HTTPError.md#parameters)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[stack](Exceptions_HTTPError.HTTPError.md#stack)

___

### status

• **status**: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) = `HTTPStatus.SERVER_ERROR`

The HTTP Status code.

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[status](Exceptions_HTTPError.HTTPError.md#status)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ), `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ) |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[prepareStackTrace](Exceptions_HTTPError.HTTPError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[stackTraceLimit](Exceptions_HTTPError.HTTPError.md#stacktracelimit)

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function ) |

#### Returns

`void`

#### Inherited from

[HTTPError](Exceptions_HTTPError.HTTPError.md).[captureStackTrace](Exceptions_HTTPError.HTTPError.md#capturestacktrace)
