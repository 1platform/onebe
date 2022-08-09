[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IVerbDecorators

# Interface: IVerbDecorators<Request, Response\>

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).IVerbDecorators

The VerbDecorators parameter contents.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [descriptor](Router_RouteInterfaces.IVerbDecorators.md#descriptor)
- [passRequest](Router_RouteInterfaces.IVerbDecorators.md#passrequest)
- [path](Router_RouteInterfaces.IVerbDecorators.md#path)
- [propertyKey](Router_RouteInterfaces.IVerbDecorators.md#propertykey)
- [target](Router_RouteInterfaces.IVerbDecorators.md#target)
- [verb](Router_RouteInterfaces.IVerbDecorators.md#verb)

## Properties

### descriptor

• **descriptor**: `PropertyDescriptor`

The property descriptor of the route endpoint function.

___

### passRequest

• **passRequest**: `boolean`

Pass the request and response objects.

___

### path

• **path**: `string`

The path of the route endpoint.

___

### propertyKey

• **propertyKey**: `string`

The name of the route endpoint function.

___

### target

• **target**: [`Route`](../classes/Router_Route.Route.md)

The target Controller.

___

### verb

• **verb**: [`HTTPVerb`](../enums/HTTP_HTTPVerb.HTTPVerb.md)

The HTTP Verb used for the route endpoint.
