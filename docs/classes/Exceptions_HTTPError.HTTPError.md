[Spark OneBE - v1.0.23](../README.md) / [Exports](../modules.md) / [Exceptions/HTTPError](../modules/Exceptions_HTTPError.md) / HTTPError

# Class: HTTPError

[Exceptions/HTTPError](../modules/Exceptions_HTTPError.md).HTTPError

Generic Exception with HTTP Status Code.

## Hierarchy

- [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

  ↳ **`HTTPError`**

  ↳↳ [`ForbiddenException`](Exceptions_ForbiddenException.ForbiddenException.md)

  ↳↳ [`PageNotFoundException`](Exceptions_PageNotFoundException.PageNotFoundException.md)

## Table of contents

### Constructors

- [constructor](Exceptions_HTTPError.HTTPError.md#constructor)

### Properties

- [message](Exceptions_HTTPError.HTTPError.md#message)
- [name](Exceptions_HTTPError.HTTPError.md#name)
- [parameters](Exceptions_HTTPError.HTTPError.md#parameters)
- [stack](Exceptions_HTTPError.HTTPError.md#stack)
- [status](Exceptions_HTTPError.HTTPError.md#status)
- [prepareStackTrace](Exceptions_HTTPError.HTTPError.md#preparestacktrace)
- [stackTraceLimit](Exceptions_HTTPError.HTTPError.md#stacktracelimit)

### Methods

- [captureStackTrace](Exceptions_HTTPError.HTTPError.md#capturestacktrace)

## Constructors

### constructor

• **new HTTPError**(`message`, `status?`, `parameters?`)

Constructor of the HTTPError.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | The message of the exception. |
| `status` | [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) | `HTTPStatus.SERVER_ERROR` | The status code of the exception. |
| `parameters?` | `any` | `undefined` | Some extra parameters sent to the error. |

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### parameters

• **parameters**: `any` = `null`

The additional parameters sent to the exception.

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### status

• **status**: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md) = `HTTPStatus.SERVER_ERROR`

The HTTP Status code.

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

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace
